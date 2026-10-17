/* Prescrição — referência de medicamentos + montagem da receita + PDF. */
(function () {
  "use strict";
  var A = window.APP, D = A.D, S = A.S, esc = A.esc, tag = A.tag, tint = A.tint, render = A.render, L = window.RxLogic;

  var CONTROLLED = ["opioides", "benzodiazepinicos"];
  var ANALGESIC = ["analgesicos", "opioides", "aines"];
  var GROUP_KW = { aines: ["aines"], corticoides: ["corticoide"], benzodiazepinicos: ["benzodiazep"], antibioticos: ["antibiotico"] };
  var PALETTE = ["#30d158", "#4f8fff", "#ff9f0a", "#bf5af2", "#ff453a", "#5ac8fa", "#ff6b9d", "#ffd60a", "#64d2ff", "#8e8cf2", "#a2845e"];
  var COLOR = {}; D.RX.forEach(function (g, i) { COLOR[g.id] = PALETTE[i % PALETTE.length]; });

  S.rx = { step: 0, q: "", q2: "", open: {}, sel: [], patientId: null, name: "", street: "", number: "", city: "", uf: "", weight: "", pos: {}, pdf: null, busy: false };
  var pdfBlob = null;

  /* ── helpers ── */
  var KEY = function (gid, name) { return gid + "||" + name; };
  function find(key) {
    var i = key.indexOf("||"), gid = key.slice(0, i), name = key.slice(i + 2), g = D.RX.find(function (x) { return x.id === gid; });
    return { gid: gid, group: g, drug: g.drugs.find(function (d) { return d.name === name; }) };
  }
  function isExt(drug) { return drug.use === "externo"; }
  /* Classe terapêutica de cada medicamento (antibióticos e antissépticos = uma só) */
  function classKeys(keys) {
    var set = [];
    keys.forEach(function (k) { var c = L.classKey(find(k).gid); if (set.indexOf(c) < 0) set.push(c); });
    return set;
  }
  function classesCount(keys) { return classKeys(keys).length; }
  function classLabel(c) { return c === "antibioticos" ? "Antibióticos / Antissépticos" : D.RX.find(function (g) { return g.id === c; }).title; }
  /** Páginas previstas: até 3 classes por página */
  function pagePlan(keys) {
    var cls = classKeys(keys), pages = [];
    for (var i = 0; i < cls.length; i += 3) pages.push(cls.slice(i, i + 3));
    return pages;
  }
  function formOf(drug, p) { var fs = drug.posology.forms; return fs.find(function (f) { return f.id === p.formId; }) || fs[0]; }
  function defaults(drug, formId) {
    var f = drug.posology.forms.find(function (x) { return x.id === formId; }) || drug.posology.forms[0];
    return { formId: f.id, dose: f.doseOptions[0], interval: f.intervals[0], days: String(f.durations[0]) };
  }
  function getP(key) { var f = find(key); if (!S.rx.pos[key]) S.rx.pos[key] = defaults(f.drug); return S.rx.pos[key]; }
  function needsWeight() { return S.rx.sel.some(function (k) { return formOf(find(k).drug, getP(k)).weightBased; }); }
  A.rxPatient = function () { return S.patients.find(function (p) { return p.id === S.rx.patientId; }); };

  /* alertas do prontuário que citam o medicamento escolhido (como no DentoCheck) */
  function patientWarns() {
    var pat = A.rxPatient(); if (!pat) return [];
    var src = [];
    pat.comorb.forEach(function (id) { var c = A.comorbById(id); if (c) src.push({ label: c.label, alerts: c.alerts, kind: "c" }); });
    pat.meds.forEach(function (id) { var m = A.medById(id); if (m) src.push({ label: m.label, alerts: m.alerts, kind: "m" }); });
    var out = [], seen = {};
    S.rx.sel.forEach(function (k) {
      var f = find(k), kws = [A.norm(f.drug.name).split(/[\s\/]/)[0]].concat(GROUP_KW[f.gid] || []);
      src.forEach(function (s) {
        s.alerts.forEach(function (al) {
          var n = A.norm(al);
          if (kws.some(function (kw) { return kw.length >= 4 && n.indexOf(kw) >= 0; })) {
            var id = s.label + "|" + al;
            if (!seen[id]) { seen[id] = 1; out.push({ drug: f.drug.name, src: s.label, kind: s.kind, text: al }); }
          }
        });
      });
    });
    return out;
  }
  function warnsFor(drugName) { return patientWarns().filter(function (w) { return w.drug === drugName; }); }

  function chip(label, color, active, attrs) {
    var t = tag(label, color, active, attrs);
    return label.length > 26 ? t.replace('class="tag', 'class="tag long') : t;
  }
  function groupBadge(gid) {
    return (CONTROLLED.indexOf(gid) >= 0 ? '<span class="badge" style="' + tint("#ff453a", 0.15, 0.4) + '">Receita especial</span>' : "");
  }

  /* ── 0) Referência ── */
  function reference() {
    var q = A.norm(S.rx.q), h = '<h1>Prescrição</h1><div class="sub">Medicamentos de uso odontológico e receita em PDF</div>' +
      '<button class="btn pri block" style="margin-bottom:16px" data-act="rxStart">Montar receita</button>' +
      '<input class="inp" placeholder="Buscar medicamento ou nome comercial..." value="' + esc(S.rx.q) + '" data-bind="rx.q" data-r="1">';
    var any = false;
    D.RX.forEach(function (g) {
      var drugs = q ? g.drugs.filter(function (d) { return A.norm(d.name + " " + d.brands).indexOf(q) >= 0; }) : g.drugs;
      if (!drugs.length) return; any = true;
      var color = COLOR[g.id], open = q || S.rx.open[g.id];
      h += '<div style="margin-bottom:10px"><div class="med-hdr" style="' + tint(color, 0.1, 0.28) + 'background:var(--t1);border:1px solid var(--t2a);' + (open ? "border-radius:20px 20px 0 0" : "") + '" data-act="rxOpen" data-val="' + g.id + '"><b>' + esc(g.title) + '</b><span style="display:flex;gap:8px;align-items:center"><span class="pill-n">' + drugs.length + '</span><span class="arrow' + (open ? " open" : "") + '">⌄</span></span></div>';
      if (open) {
        h += '<div class="med-list">' + drugs.map(function (d) {
          return '<div class="med-it"><div class="med-top"><div><div class="name">' + esc(d.name) + '</div><div class="brand-txt" style="color:' + color + '">' + esc(d.brands) + "</div></div>" + (isExt(d) ? badge2("Uso externo", "#32d74b") : "") + "</div>" +
            row("Adulto", d.adultDose) + row("Pediátrico", d.pediatric) + row("Duração", d.duration) + row("Apresentação", d.presentation) +
            (d.notes ? '<div class="note" style="margin:8px 0 0">' + esc(d.notes) + "</div>" : "") + "</div>";
        }).join("") + "</div>";
      }
      h += "</div>";
    });
    return h + (any ? "" : '<div class="empty">Nenhum medicamento encontrado.</div>');
  }
  function badge2(t, c) { return '<span class="badge" style="' + tint(c, 0.15, 0.4) + '">' + t + "</span>"; }
  function row(l, v) { return v ? '<div style="font-size:12.5px;margin-bottom:4px"><span style="color:var(--dim);font-weight:700;font-size:10px;letter-spacing:.8px;text-transform:uppercase;margin-right:6px">' + l + '</span><span style="color:var(--sub)">' + esc(v) + "</span></div>" : ""; }

  /* ── 1) Seleção ── */
  function patientPicker() {
    if (!S.patients.length) return "";
    return '<div class="card"><span class="lbl">Paciente (opcional)</span><div class="wrap">' +
      tag("Sem cadastro", "#4f8fff", !S.rx.patientId, 'data-act="rxPatient" data-val=""') +
      S.patients.map(function (p) { return tag(p.name, "#4f8fff", S.rx.patientId === p.id, 'data-act="rxPatient" data-val="' + p.id + '"'); }).join("") +
      '</div><div class="note" style="margin:8px 0 0">Ao escolher um paciente, nome e endereço são preenchidos e o app avisa sobre alertas do prontuário.</div></div>';
  }
  function select() {
    var q = A.norm(S.rx.q2), n = S.rx.sel.length, cls = classesCount(S.rx.sel);
    var h = '<div class="row-btns tight"><button class="btn gho" data-act="rxBack0">Voltar</button><div style="flex:1;font-size:17px;font-weight:700;letter-spacing:-.3px">Medicamentos da receita</div></div>' + patientPicker() +
      '<input class="inp" placeholder="Buscar medicamento..." value="' + esc(S.rx.q2) + '" data-bind="rx.q2" data-r="1">';
    var pw = patientWarns(), any = false;
    D.RX.forEach(function (g) {
      var drugs = q ? g.drugs.filter(function (d) { return A.norm(d.name + " " + d.brands).indexOf(q) >= 0; }) : g.drugs;
      if (!drugs.length) return; any = true;
      var color = COLOR[g.id];
      h += '<div class="card" style="padding:14px 16px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="cat-lbl" style="--tcol:' + color + ';margin:0">' + esc(g.title.toUpperCase()) + "</div>" + groupBadge(g.id) + "</div>" +
        drugs.map(function (d) {
          var key = KEY(g.id, d.name), on = S.rx.sel.indexOf(key) >= 0, hasW = pw.some(function (w) { return w.drug === d.name; });
          return '<div class="chk' + (on ? " on" : "") + '" data-act="rxToggle" data-val="' + esc(key) + '"><div class="cb">✓</div><div class="lt"><b>' + esc(d.name) + (isExt(d) ? ' <span style="font-size:10px;color:var(--ok);font-weight:700">· USO EXTERNO</span>' : "") + "</b><small>" + esc(d.brands) + "</small>" +
            (hasW ? '<small style="color:var(--warn);white-space:normal">⚠ Há alerta no prontuário deste paciente</small>' : "") + "</div></div>";
        }).join("") + "</div>";
    });
    if (!any) h += '<div class="empty">Nenhum medicamento encontrado.</div>';
    var pg = pagePlan(S.rx.sel).length;
    h += '<div class="sticky-bar"><div class="sb-t">' + n + " selecionado(s) · classes: <b>" + cls + "</b> · receita de <b>" + Math.max(pg, 1) + " página" + (pg > 1 ? "s" : "") + "</b></div>" +
      (pg > 1 ? '<div class="sb-t" style="margin-top:-4px;color:var(--warn)">Mais de 3 classes: a receita será dividida em páginas.</div>' : "") +
      '<button class="btn pri block" data-act="rxNext"' + (n ? "" : " disabled") + ">Continuar</button></div>";
    return h;
  }

  /* ── 2) Posologia ── */
  function posology() {
    var rx = S.rx, h = '<div class="row-btns tight"><button class="btn gho" data-act="rxBack1">Voltar</button><div style="flex:1;font-size:17px;font-weight:700;letter-spacing:-.3px">Posologia</div></div>';

    h += '<div class="card"><span class="lbl">Dados do paciente</span><input class="inp" placeholder="Nome do paciente" autocomplete="off" value="' + esc(rx.name) + '" data-bind="rx.name">' +
      A.addressFields("rx", rx) +
      '<span class="lbl">Cidade do atendimento</span><input class="inp" style="margin-bottom:' + (needsWeight() ? 12 : 0) + 'px" placeholder="Cidade onde o atendimento está sendo realizado" value="' + esc(S.settings.attendCity) + '" data-bind="settings.attendCity" data-hook="saveSettings">' +
      (needsWeight() ? '<span class="lbl">Peso do paciente (kg)</span><input class="inp" style="margin-bottom:0" type="text" inputmode="decimal" placeholder="Necessário para a dose por kg" value="' + esc(rx.weight) + '" data-bind="rx.weight" data-r="1">' : "") + "</div>";

    rx.sel.forEach(function (key) {
      var f = find(key), d = f.drug, p = getP(key), form = formOf(d, p), color = COLOR[f.gid];
      var item = L.buildItem(d, f.gid, p, A.num(rx.weight), ANALGESIC);
      var ws = warnsFor(d.name);
      h += '<div class="card tint" style="' + tint(color, 0.07, 0.25) + '"><div class="glint"></div>' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:12px"><div><div class="name">' + esc(d.name) + '</div><div style="font-size:11px;color:' + color + ';font-weight:600;margin-top:2px">' + esc(f.group.title) + (isExt(d) ? " · uso externo" : "") + '</div></div>' +
        '<button class="btn gho" style="padding:5px 11px;font-size:12px" data-act="rxRemove" data-val="' + esc(key) + '">Remover</button></div>';
      if (d.posology.forms.length > 1) h += '<div class="chips-sec"><span class="lbl">Apresentação</span>' + d.posology.forms.map(function (x) { return chip(x.label, color, p.formId === x.id, 'data-act="rxForm" data-val="' + esc(key) + '" data-val2="' + x.id + '"'); }).join("") + "</div>";
      else h += '<div class="note" style="margin-bottom:10px"><b>Apresentação:</b> ' + esc(form.label) + "</div>";
      if (form.doseOptions.length > 1) h += '<div class="chips-sec"><span class="lbl">Dose por tomada</span>' + form.doseOptions.map(function (x) { return chip(x, color, p.dose === x, 'data-act="rxPos" data-val="' + esc(key) + '" data-val2="dose|' + esc(x) + '"'); }).join("") + "</div>";
      if (form.intervals.length > 1) h += '<div class="chips-sec"><span class="lbl">Intervalo</span>' + form.intervals.map(function (x) { return chip(L.intervalLabel(x), color, p.interval === x, 'data-act="rxPos" data-val="' + esc(key) + '" data-val2="interval|' + esc(x) + '"'); }).join("") + "</div>";
      if (!form.isSingleDose && form.durations.length > 1) h += '<div class="chips-sec"><span class="lbl">Duração</span>' + form.durations.map(function (x) { return chip(x + (x === 1 ? " dia" : " dias"), color, String(p.days) === String(x), 'data-act="rxPos" data-val="' + esc(key) + '" data-val2="days|' + x + '"'); }).join("") + "</div>";
      h += '<div class="rx-prev"><b>' + esc(item.name) + "</b> — " + esc(item.qtyText) + "<br>" + esc(item.instruction) + "</div>";
      if (form.weightBased && !(A.num(rx.weight) > 0)) h += '<div class="note" style="color:var(--warn);margin:8px 0 0">⚠ Informe o peso do paciente acima para calcular a dose.</div>';
      if (ws.length) h += '<div class="banner amber" style="margin:10px 0 0"><b class="t">Alertas do prontuário</b>' + ws.map(function (w) { return "<p><b>" + esc(w.src) + ":</b> " + esc(w.text) + "</p>"; }).join("") + "</div>";
      h += "</div>";
    });

    if (rx.sel.some(function (k) { return CONTROLLED.indexOf(find(k).gid) >= 0; }))
      h += '<div class="banner red"><b class="t">Receita de controle especial</b><p>Este receituário inclui medicamento sujeito a controle especial (RDC Anvisa 222/2023). Use o talonário/receituário apropriado.</p></div>';

    var plan = pagePlan(rx.sel);
    var crowded = plan.some(function (cl) { return rx.sel.filter(function (k) { return cl.indexOf(L.classKey(find(k).gid)) >= 0; }).length > 10; });
    if (crowded) h += '<div class="banner amber"><b class="t">Muitos medicamentos em uma página</b><p>Cabem até 10 medicamentos por página. Com mais que isso a receita ganhará uma página extra. Remova itens se quiser manter uma única página.</p></div>';
    if (plan.length > 1) h += '<div class="banner blue"><b class="t">Receita em ' + plan.length + ' páginas</b><p>Cada página comporta até 3 classes de medicamentos (antibióticos e antissépticos contam como uma só). Todas repetem o nome do paciente, endereço, cidade, data e assinatura.</p>' +
      plan.map(function (cl, i) { return "<p><b>Página " + (i + 1) + ":</b> " + esc(cl.map(classLabel).join(" · ")) + "</p>"; }).join("") + "</div>";
    h += '<button class="btn pri block" style="margin-top:6px" data-act="rxGen"' + (rx.busy ? " disabled" : "") + ">" + (rx.busy ? "Gerando..." : "Gerar receita em PDF") + "</button>";

    if (rx.pdf) {
      h += '<div class="card tint" id="rxResult" style="margin-top:14px;' + tint("#30d158", 0.09, 0.3) + '"><div class="glint"></div><span class="lbl" style="color:var(--ok)">Receita gerada · ' + rx.pdf.pages + (rx.pdf.pages === 1 ? " página" : " páginas") + '</span>' +
        '<div class="note">O PDF não contém endereço do site, número de página, data nem horário do navegador.</div>' +
        '<div style="display:grid;gap:8px"><a class="btn pri block" style="text-decoration:none" href="' + rx.pdf.url + '" target="_blank" rel="noopener">Abrir / imprimir PDF</a>' +
        '<a class="btn def block" style="text-decoration:none" href="' + rx.pdf.url + '" download="' + esc(rx.pdf.fileName) + '">Baixar PDF</a>' +
        (navigator.canShare ? '<button class="btn def block" data-act="rxShare">Compartilhar</button>' : "") + "</div></div>";
    }
    return h;
  }

  A.SCREENS.prescription = function () { return S.rx.step === 0 ? reference() : S.rx.step === 1 ? select() : posology(); };

  /* ── ações ── */
  var AC = A.ACTIONS, H = A.HOOKS;
  H.saveSettings = function () { A.saveSettings(); };
  AC.rxOpen = function (id) { S.rx.open[id] = !S.rx.open[id]; render(); };
  AC.rxStart = function () { S.rx.step = 1; render(); window.scrollTo(0, 0); };
  AC.rxBack0 = function () { S.rx.step = 0; render(); window.scrollTo(0, 0); };
  AC.rxBack1 = function () { S.rx.step = 1; render(); window.scrollTo(0, 0); };
  AC.rxPatient = function (id) {
    var p = id ? S.patients.find(function (x) { return x.id === +id; }) : null, rx = S.rx;
    rx.patientId = p ? p.id : null;
    if (p) { rx.name = p.name; rx.street = p.street || ""; rx.number = p.number || ""; rx.city = p.city || ""; rx.uf = p.uf || ""; rx.legacyAddress = p.address || ""; }
    render();
  };
  A.rxStartForPatient = function (id) { S.rx.step = 1; S.rx.sel = []; S.rx.pos = {}; S.rx.pdf = null; A.go("prescription"); AC.rxPatient(id); window.scrollTo(0, 0); };
  AC.rxToggle = function (key) {
    var rx = S.rx, i = rx.sel.indexOf(key);
    if (i >= 0) { rx.sel.splice(i, 1); delete rx.pos[key]; }
    else rx.sel = rx.sel.concat([key]);
    render();
  };
  AC.rxNext = function () {
    if (!S.rx.sel.length) { A.toast("Selecione ao menos um medicamento."); return; }
    var w = patientWarns();
    if (w.length) {
      A.openSheet("Alertas do prontuário", '<div style="padding:6px 8px">' + w.map(function (x) { return '<div class="banner amber"><b class="t">' + esc(x.drug) + " · " + esc(x.src) + "</b><p>" + esc(x.text) + "</p></div>"; }).join("") +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px"><button class="btn gho" data-act="sheetClose">Revisar</button><button class="btn pri" data-act="rxGo2">Continuar mesmo assim</button></div></div>');
      return;
    }
    AC.rxGo2();
  };
  AC.rxGo2 = function () { A.closeSheet(); S.rx.step = 2; S.rx.sel.forEach(getP); render(); window.scrollTo(0, 0); };
  AC.rxRemove = function (key) {
    var rx = S.rx; stale(); rx.sel = rx.sel.filter(function (k) { return k !== key; }); delete rx.pos[key];
    if (!rx.sel.length) rx.step = 1; render();
  };
  AC.rxForm = function (key, formId) { stale(); S.rx.pos[key] = defaults(find(key).drug, formId); render(); };
  AC.rxPos = function (key, kv) {
    stale(); var i = kv.indexOf("|"); getP(key)[kv.slice(0, i)] = kv.slice(i + 1); render();
  };

  /* qualquer mudança nos dados invalida o PDF já gerado (evita entregar uma receita desatualizada) */
  function stale() { if (S.rx.pdf) { URL.revokeObjectURL(S.rx.pdf.url); S.rx.pdf = null; pdfBlob = null; return true; } return false; }
  A.onAnyInput = function (path) { if ((path.indexOf("rx.") === 0 || path === "settings.attendCity") && stale()) render(); };

  AC.rxGen = function () {
    var rx = S.rx;
    if (!rx.name.trim()) { A.toast("Informe o nome do paciente."); return; }
    if (needsWeight() && !(A.num(rx.weight) > 0)) { A.toast("Informe o peso do paciente para calcular a dose por kg."); return; }
    rx.busy = true; render();
    var w = A.num(rx.weight);
    var items = rx.sel.map(function (k) {
      var f = find(k), it = L.buildItem(f.drug, f.gid, getP(k), w, ANALGESIC);
      it.cls = L.classKey(f.gid); it.controlled = CONTROLLED.indexOf(f.gid) >= 0; return it;
    });
    var addr = A.fmtAddress({ street: rx.street, number: rx.number, city: rx.city, uf: rx.uf, address: rx.legacyAddress && !rx.street && !rx.city ? rx.legacyAddress : "" });
    var dateText = new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
    window.RxPdf.build({ patientName: rx.name, address: addr, attendCity: S.settings.attendCity, dateText: dateText, items: items })
      .then(function (res) {
        pdfBlob = new Blob([res.bytes], { type: "application/pdf" });
        if (rx.pdf) URL.revokeObjectURL(rx.pdf.url);
        var fname = "Receita - " + rx.name.trim().replace(/[\\/:*?"<>|]+/g, " ") + ".pdf";
        rx.pdf = { url: URL.createObjectURL(pdfBlob), fileName: fname, pages: res.pages };
        rx.busy = false; render();
        var r = document.getElementById("rxResult"); if (r) r.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch(function (err) { rx.busy = false; render(); A.toast("Não foi possível gerar o PDF: " + (err && err.message ? err.message : err)); });
  };
  AC.rxShare = function () {
    if (!pdfBlob) return;
    var file = new File([pdfBlob], S.rx.pdf.fileName, { type: "application/pdf" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) navigator.share({ files: [file], title: "Receita" }).catch(function () { /* cancelado */ });
    else A.toast("Seu navegador não permite compartilhar arquivos. Use \"Baixar PDF\".");
  };
})();
