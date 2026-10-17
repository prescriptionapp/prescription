/* Parecer — seleciona comorbidades e medicações em uso e gera os alertas para o cirurgião-dentista. */
(function () {
  "use strict";
  var A = window.APP, D = A.D, S = A.S, esc = A.esc, tag = A.tag, tint = A.tint, render = A.render;

  S.par = { tab: "comorb", c: [], m: [], qc: "", qm: "", open: {}, from: null, loadId: "" };

  /* ── interações documentadas (Prescription): cada par tem um gatilho sobre o que foi selecionado ── */
  var AINES = ["ibuprofeno", "diclofenaco", "nimesulida"];
  var TCA = ["amitriptilina", "nortriptilina", "imipramina", "clomipramina"];
  var IECA_BRA = ["enalapril", "captopril", "lisinopril", "ramipril", "losartana", "valsartana", "irbesartana", "telmisartana", "olmesartana"];
  var ANTICOAG = ["varfarina", "apixabana", "rivaroxabana", "dabigatrana", "aas_baixa_dose", "clopidogrel"];
  var TRIGGERS = [
    function (c, m) { return m(TCA); },                                              // 0 epinefrina + tricíclicos
    function (c, m) { return m(["propranolol"]); },                                  // 1 epinefrina + propranolol
    function (c, m) { return m(["fluconazol", "itraconazol"]); },                    // 2 midazolam + inibidores CYP3A4
    function (c, m) { return m(["metotrexato"]) && m(AINES); },                      // 3 metotrexato + AINEs
    function (c, m) { return c(["bifosfonatos"]) || m(["alendronato", "acido_zoledronico", "risedronato"]); }, // 4 bisfosfonatos
    function (c, m) { return m(["metronidazol"]) && m(["varfarina"]); },             // 5 metronidazol + varfarina
    function (c, m) { return m(["valproato"]); },                                    // 6 valproato
    function (c, m) { return m(AINES) && m(IECA_BRA); },                             // 7 AINEs + IECA/BRA
    function (c, m) { return m(["paracetamol"]) && c(["insuf_hepatica", "hepatite_viral"]); }, // 8 paracetamol + hepatopatia
    function (c, m) { return m(["dipirona"]) && (m(["ciclosporina"]) || c(["transplantado"])); }, // 9 dipirona + ciclosporina
    function (c, m) { return m(["carbamazepina"]) && m(["fluconazol", "dexametasona_cronica"]); }, // 10 carbamazepina
    function (c, m) { return m(["fluoxetina", "sertralina"]) && (m(AINES) || m(ANTICOAG)); },     // 11 ISRS
  ];
  function interactions() {
    var hc = function (ids) { return ids.some(function (i) { return S.par.c.indexOf(i) >= 0; }); };
    var hm = function (ids) { return ids.some(function (i) { return S.par.m.indexOf(i) >= 0; }); };
    return D.INTERACTIONS.filter(function (x, i) { return TRIGGERS[i] && TRIGGERS[i](hc, hm); });
  }
  A.parInteractions = interactions;

  /* ── resumo para anestesia local ── */
  function labelsOf(listC, listM) {
    var out = [];
    S.par.c.forEach(function (id) { if (listC.indexOf(id) >= 0) out.push(A.comorbById(id).label); });
    S.par.m.forEach(function (id) { if (listM.indexOf(id) >= 0) out.push(A.medById(id).label); });
    return out;
  }
  function anestSummary() {
    var F = D.FLAGS, h = "";
    var avoidEpi = labelsOf(F.comorb.avoidEpi, F.meds.avoidEpi), limitEpi = labelsOf(F.comorb.limitEpi, F.meds.limitEpi), avoidPrilo = labelsOf(F.comorb.avoidPrilo, F.meds.avoidPrilo);
    if (S.par.c.indexOf("gestacao") >= 0) h += '<div class="banner red"><b class="t">Prilocaína com felipressina — CONTRAINDICADA</b><p>Gestantes e possíveis gestantes: a felipressina tem ação ocitócica e a prilocaína pode causar metemoglobinemia.</p></div>';
    else if (avoidPrilo.length) h += '<div class="banner red"><b class="t">Evitar prilocaína com felipressina</b><p>Motivo: ' + esc(avoidPrilo.join(", ")) + ".</p></div>";
    if (avoidEpi.length) h += '<div class="banner red"><b class="t">Evitar vasoconstritor adrenérgico</b><p>Motivo: ' + esc(avoidEpi.join(", ")) + '.</p><p>Alternativa citada nas fontes: mepivacaína 3% sem vasoconstritor' + (avoidPrilo.length || S.par.c.indexOf("gestacao") >= 0 ? "." : " (ou prilocaína com felipressina, exceto em gestantes).") + "</p></div>";
    if (limitEpi.length) h += '<div class="banner amber"><b class="t">Limitar epinefrina a 0,04 mg por sessão</b><p>Isso equivale a 40 µg — cerca de 2 tubetes a 1:100.000 ou 4 tubetes a 1:200.000, sempre com aspiração e injeção lenta.</p><p>Motivo: ' + esc(limitEpi.join(", ")) + '.</p><p>Na calculadora de Anestesia, use o perfil <b>ASA III-IV</b>.</p></div>';
    if (h) h = '<span class="lbl" style="margin-top:4px">Resumo para anestesia local</span>' + h;
    return h;
  }

  /* ── checklist ── */
  function checklist(kind) {
    var isC = kind === "c", list = isC ? D.COMORB : D.MEDS, sel = isC ? S.par.c : S.par.m, qk = isC ? "qc" : "qm";
    var q = A.norm(S.par[qk]);
    var h = "";
    if (S.patients.length && isC) {
      h += '<select class="inp" data-bind="par.loadId" data-hook="parLoad"><option value="">Carregar dados de um paciente do prontuário...</option>' +
        S.patients.map(function (p) { return '<option value="' + p.id + '"' + (String(S.par.loadId) === String(p.id) ? " selected" : "") + ">" + esc(p.name) + "</option>"; }).join("") + "</select>";
    }
    h += '<input class="inp" placeholder="' + (isC ? "Buscar comorbidade..." : "Buscar medicação ou nome comercial...") + '" value="' + esc(S.par[qk]) + '" data-bind="par.' + qk + '" data-r="1">';
    var groups = A.byCat(list).map(function (g) {
      return { cat: g.cat, items: q ? g.items.filter(function (x) { return A.norm(x.label + " " + (x.brands || []).join(" ")).indexOf(q) >= 0; }) : g.items };
    }).filter(function (g) { return g.items.length; });
    if (!groups.length) return h + '<div class="empty">Nada encontrado.</div>';
    groups.forEach(function (g) {
      var color = A.catColor(g.cat), key = kind + ":" + g.cat, open = q || S.par.open[key];
      var n = g.items.filter(function (x) { return sel.indexOf(x.id) >= 0; }).length;
      h += '<div class="card" style="padding:12px 16px"><div class="cat-h" data-act="parCat" data-val="' + esc(key) + '"><div class="cat-lbl" style="--tcol:' + color + ';margin:0">' + esc(g.cat.toUpperCase()) + '</div><div><span class="cnt">' + (n ? '<b style="color:' + color + '">' + n + " selec.</b> · " : "") + g.items.length + ' </span><span class="arrow' + (open ? " open" : "") + '">⌄</span></div></div>';
      if (open) h += '<div style="margin-top:6px">' + g.items.map(function (x) {
        var on = sel.indexOf(x.id) >= 0;
        return '<div class="chk' + (on ? " on" : "") + '"><div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0" data-act="parToggle" data-val="' + kind + '" data-val2="' + x.id + '"><div class="cb">✓</div><div class="lt"><b>' + esc(x.label) + "</b>" + (x.brands && x.brands.length ? "<small>" + esc(x.brands.join(", ")) + "</small>" : "") + '</div></div><button class="info-btn" data-act="parInfo" data-val="' + kind + '" data-val2="' + x.id + '" aria-label="Detalhes">i</button></div>';
      }).join("") + "</div>";
      h += "</div>";
    });
    return h;
  }

  /* ── alertas ── */
  function alertsView() {
    var cs = S.par.c.map(A.comorbById).filter(Boolean), ms = S.par.m.map(A.medById).filter(Boolean);
    var sortL = function (a, b) { return a.label.localeCompare(b.label, "pt-BR"); };
    cs.sort(sortL); ms.sort(sortL);
    var h = '<div style="display:flex;justify-content:space-between;align-items:center;margin:2px 0 12px"><div style="font-size:18px;font-weight:700;letter-spacing:-.4px">Parecer clínico' + (S.par.from ? '<div style="font-size:12px;font-weight:500;color:var(--sub);margin-top:2px">' + esc(S.par.from) + "</div>" : "") + '</div><button class="btn gho" data-act="parClear" style="padding:7px 12px;font-size:12px">Limpar</button></div>';
    if (!cs.length && !ms.length) return h + '<div class="empty">Selecione comorbidades e medicações em uso nas abas acima para gerar os alertas.</div>';

    h += anestSummary();
    var inter = interactions();
    if (inter.length) {
      h += '<div class="card tint" style="' + tint("#ff453a", 0.08, 0.28) + '"><div class="glint" style="--tc3:' + A.hx("#ff453a", 0.45) + '"></div><span class="lbl" style="color:#ff453a">Interações medicamentosas identificadas</span>' +
        inter.map(function (w, i) {
          var sc = w.sev === "Alta" ? "#ff453a" : "#ff9f0a";
          return '<div style="' + (i < inter.length - 1 ? "margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--bd)" : "") + '"><div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px">' + A.badge(w.sev, sc) + '<div style="font-size:12.5px;font-weight:600;line-height:1.4">' + esc(w.d1) + ' <span style="color:var(--dim)">+</span> ' + esc(w.d2) + '</div></div><div class="note">' + esc(w.effect) + '</div><div class="ref">' + esc(w.ref) + "</div></div>";
        }).join("") + "</div>";
    }
    var block = function (list, title) {
      if (!list.length) return "";
      return '<span class="lbl" style="margin-top:14px">' + title + "</span>" + list.map(function (x) {
        var color = A.catColor(x.category);
        return '<div class="card tint" style="' + tint(color, 0.06, 0.22) + '"><div class="glint"></div><div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:10px"><div class="name">' + esc(x.label) + '</div><span class="cat-lbl" style="--tcol:' + color + ';margin:3px 0 0;text-align:right">' + esc(x.category) + "</span></div>" +
          x.alerts.map(function (a) { return '<div class="item"><div class="dot" style="--tcol:' + color + '"></div><p>' + esc(a) + "</p></div>"; }).join("") + (x.ref ? '<div class="ref" style="margin-top:6px">' + esc(x.ref) + "</div>" : "") + "</div>";
      }).join("");
    };
    h += block(cs, "Alertas das comorbidades") + block(ms, "Alertas das medicações");
    h += '<div class="note" style="text-align:center;margin-top:16px;font-size:11.5px">Fontes: Andrade ED (Terapêutica Medicamentosa em Odontologia, 3.ª ed.) · Malamed SF · AHA 2021 (endocardite) · demais referências indicadas em cada item. Apoio à decisão — não substitui o julgamento clínico.</div>';
    return h;
  }

  A.SCREENS.assessment = function () {
    var par = S.par, nC = par.c.length, nM = par.m.length, nA = nC + nM;
    var h = '<h1>Parecer</h1><div class="sub">Marque as comorbidades e as medicações em uso para gerar os alertas</div>' +
      '<div class="subtabs">' +
      '<button class="' + (par.tab === "comorb" ? "on" : "") + '" data-act="parTab" data-val="comorb">Comorbidades' + (nC ? '<span class="n">' + nC + "</span>" : "") + "</button>" +
      '<button class="' + (par.tab === "meds" ? "on" : "") + '" data-act="parTab" data-val="meds">Medicações' + (nM ? '<span class="n">' + nM + "</span>" : "") + "</button>" +
      '<button class="' + (par.tab === "alerts" ? "on" : "") + '" data-act="parTab" data-val="alerts">⚠ Alertas' + (nA ? '<span class="n red">' + nA + "</span>" : "") + "</button></div>";
    if (par.tab === "alerts") return h + alertsView();
    h += checklist(par.tab === "comorb" ? "c" : "m");
    if (nA) h += '<div class="sticky-bar"><div class="sb-t">' + nC + " comorbidade(s) · " + nM + ' medicação(ões)</div><button class="btn pri block" data-act="parTab" data-val="alerts">Ver alertas do parecer</button></div>';
    return h;
  };

  var AC = A.ACTIONS;
  AC.parTab = function (v) { S.par.tab = v; render(); window.scrollTo(0, 0); };
  AC.parCat = function (k) { S.par.open[k] = !S.par.open[k]; render(); };
  AC.parToggle = function (kind, id) {
    var arr = kind === "c" ? S.par.c : S.par.m, i = arr.indexOf(id);
    if (i >= 0) arr.splice(i, 1); else arr.push(id);
    S.par.from = null; render();
  };
  AC.parClear = function () { S.par.c = []; S.par.m = []; S.par.from = null; S.par.loadId = ""; S.par.tab = "comorb"; render(); };
  AC.parInfo = function (kind, id) {
    var x = kind === "c" ? A.comorbById(id) : A.medById(id), color = A.catColor(x.category);
    A.openSheet(x.label, '<div style="padding:6px 8px"><div class="cat-lbl" style="--tcol:' + color + '">' + esc(x.category.toUpperCase()) + "</div>" +
      (x.mechanism ? '<div class="note" style="margin-bottom:10px"><b>Mecanismo:</b> ' + esc(x.mechanism) + "</div>" : "") +
      (x.brands && x.brands.length ? '<div class="note" style="margin-bottom:12px"><b>Nomes comerciais:</b> ' + esc(x.brands.join(", ")) + "</div>" : "") +
      x.alerts.map(function (a) { return '<div class="item"><div class="dot" style="--tcol:' + color + '"></div><p>' + esc(a) + "</p></div>"; }).join("") + (x.ref ? '<div class="ref" style="margin-top:8px">' + esc(x.ref) + "</div>" : "") + "</div>");
  };
  A.HOOKS.parLoad = function (v) {
    var p = S.patients.find(function (x) { return String(x.id) === String(v); });
    if (!p) return;
    S.par.c = p.comorb.slice(); S.par.m = p.meds.slice(); S.par.from = p.name; S.par.tab = "alerts"; render(); window.scrollTo(0, 0);
  };
})();
