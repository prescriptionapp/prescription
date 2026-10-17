/* Prontuário — mesmo fluxo do Prescription, com comorbidades/medicações unificadas e endereço em 4 campos. */
(function () {
  "use strict";
  var A = window.APP, D = A.D, S = A.S, esc = A.esc, tag = A.tag, tint = A.tint, render = A.render;
  var KEY = "prescription:patients_v2";
  var UFS = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

  S.patients = A.store.get(KEY, []);
  S.pat = { sel: null, form: false, edit: false, draft: null, newProc: "", qc: "", qm: "", open: {} };
  function save() { A.store.set(KEY, S.patients); }

  A.ufOptions = function (sel) {
    return '<option value="">UF</option>' + UFS.map(function (u) { return '<option value="' + u + '"' + (u === sel ? " selected" : "") + ">" + u + "</option>"; }).join("");
  };
  /** "Rua X, 120, Cidade - UF" (usa o campo antigo "address" se o cadastro não tiver os 4 campos) */
  A.fmtAddress = function (o) {
    var street = (o.street || "").trim(), number = (o.number || "").trim(), city = (o.city || "").trim(), uf = (o.uf || "").trim();
    var parts = [];
    if (street) parts.push(street);
    if (number) parts.push(number);
    var cu = city && uf ? city + " - " + uf : city || uf;
    if (cu) parts.push(cu);
    return parts.length ? parts.join(", ") : (o.address || "").trim();
  };
  A.addressFields = function (prefix, o) {
    return '<span class="lbl">Endereço</span>' +
      '<div class="grid-addr"><input class="inp" placeholder="Rua" autocomplete="street-address" value="' + esc(o.street) + '" data-bind="' + prefix + '.street">' +
      '<input class="inp" placeholder="Número" value="' + esc(o.number) + '" data-bind="' + prefix + '.number"></div>' +
      '<div class="grid-addr2"><input class="inp" placeholder="Cidade" value="' + esc(o.city) + '" data-bind="' + prefix + '.city">' +
      '<select class="inp" data-bind="' + prefix + '.uf">' + A.ufOptions(o.uf) + "</select></div>";
  };

  function blank() {
    return { id: null, name: "", dob: "", phone: "", street: "", number: "", city: "", uf: "", address: "", complaint: "", medTreatment: false, medDoctor: "", medDuration: "",
      comorb: [], meds: [], habits: { tabaco: false, alcool: false, drogas: false, onicofagia: false, parafuncoes: [] }, procedures: [], notes: "" };
  }

  /* seletor de chips por categoria, recolhível e com busca */
  function chipPicker(kind, selected, qKey) {
    var list = kind === "c" ? D.COMORB : D.MEDS, act = kind === "c" ? "condToggle" : "medToggle";
    var q = A.norm(S.pat[qKey]);
    var groups = A.byCat(list).map(function (g) {
      var items = q ? g.items.filter(function (x) { return A.norm(x.label + " " + (x.brands || []).join(" ")).indexOf(q) >= 0; }) : g.items;
      return { cat: g.cat, items: items };
    }).filter(function (g) { return g.items.length; });
    var html = '<input class="inp" placeholder="' + (kind === "c" ? "Buscar comorbidade..." : "Buscar medicação ou nome comercial...") + '" value="' + esc(S.pat[qKey]) + '" data-bind="pat.' + qKey + '" data-r="1">';
    if (!groups.length) return html + '<div class="empty" style="padding:14px">Nada encontrado.</div>';
    groups.forEach(function (g) {
      var color = A.catColor(g.cat), key = kind + ":" + g.cat, open = q || S.pat.open[key];
      var n = g.items.filter(function (x) { return selected.indexOf(x.id) >= 0; }).length;
      html += '<div style="margin-bottom:8px"><div class="cat-h" data-act="patCat" data-val="' + esc(key) + '"><div class="cat-lbl" style="--tcol:' + color + ';margin:0">' + esc(g.cat.toUpperCase()) + '</div>' +
        '<div><span class="cnt">' + (n ? '<b style="color:' + color + '">' + n + " selec.</b> · " : "") + g.items.length + ' </span><span class="arrow' + (open ? " open" : "") + '">⌄</span></div></div>';
      if (open) html += "<div>" + g.items.map(function (x) { return tag(x.label, color, selected.indexOf(x.id) >= 0, 'data-act="' + act + '" data-val="' + x.id + '"'); }).join("") + "</div>";
      html += "</div>";
    });
    return html;
  }
  A.ACTIONS.patCat = function (k) { S.pat.open[k] = !S.pat.open[k]; render(); };

  A.SCREENS.patients = function () {
    if (S.pat.form || S.pat.edit) return form();
    if (S.pat.sel !== null) return detail();
    return '<div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px"><div><h1 style="margin-bottom:2px">Prontuário</h1><div class="sub" style="margin-bottom:0">' +
      S.patients.length + ' paciente(s) · salvos neste aparelho</div></div><button class="btn pri" data-act="patNew">Novo Paciente</button></div>' +
      (S.patients.length ? S.patients.map(function (p) {
        var age = A.getAge(p.dob);
        return '<div class="card click" data-act="patOpen" data-val="' + p.id + '"><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div class="name" style="margin-bottom:6px">' + esc(p.name) + '</div><div class="wrap">' +
          (age !== null ? tag(age + " anos", "#4f8fff", true) : "") + (p.comorb.length ? tag(p.comorb.length + " comorbidade(s)", "#ff9f0a", true) : "") + (p.meds.length ? tag(p.meds.length + " medicação(ões)", "#888", true) : "") +
          '</div><div style="font-size:12px;color:var(--dim);margin-top:8px">' + p.procedures.length + ' procedimento(s)</div></div><div style="color:var(--dim);font-size:20px">›</div></div></div>';
      }).join("") : '<div class="empty">Nenhum paciente cadastrado.<br>Toque em <b>Novo Paciente</b> para criar o primeiro prontuário.</div>');
  };

  function detail() {
    var p = S.patients.find(function (x) { return x.id === S.pat.sel; });
    if (!p) { S.pat.sel = null; return A.SCREENS.patients(); }
    var age = A.getAge(p.dob), addr = A.fmtAddress(p);
    var condTags = p.comorb.map(function (id) { var c = A.comorbById(id); return c ? tag(c.label, A.catColor(c.category), true) : ""; }).join("");
    var medTags = p.meds.map(function (id) { var m = A.medById(id); return m ? tag(m.label, A.catColor(m.category), true) : ""; }).join("");
    var h = p.habits || {};
    var habitTags = [h.tabaco && tag("Tabagismo", "#ff453a", true), h.alcool && tag("Álcool", "#ff9f0a", true), h.drogas && tag("Drogas", "#ff453a", true), h.onicofagia && tag("Onicofagia", "#ff9f0a", true)]
      .concat((h.parafuncoes || []).map(function (pf) { return tag(pf, "#ff9f0a", true); })).filter(Boolean).join("");
    return '<div class="row-btns"><button class="btn gho" data-act="patBack">Voltar</button><div style="flex:1;font-size:17px;font-weight:700;letter-spacing:-.3px">Prontuário</div><button class="btn def" data-act="patEditOpen" data-val="' + p.id + '">Editar</button></div>' +
      '<div class="card"><div style="font-size:22px;font-weight:800;letter-spacing:-.6px;margin-bottom:8px">' + esc(p.name) + '</div><div class="wrap" style="margin-bottom:12px">' + (age !== null ? tag(age + " anos", "#4f8fff", true) : "") + (p.dob ? tag(p.dob.split("-").reverse().join("/"), "#888", true) : "") + "</div>" +
      (p.phone ? '<div style="font-size:13px;color:var(--sub);margin-bottom:3px">' + esc(p.phone) + "</div>" : "") + (addr ? '<div style="font-size:13px;color:var(--sub)">' + esc(addr) + "</div>" : "") + "</div>" +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px"><button class="btn def" data-act="patToParecer" data-val="' + p.id + '">Gerar parecer</button><button class="btn def" data-act="patToRx" data-val="' + p.id + '">Nova receita</button></div>' +
      (p.complaint ? '<div class="card"><span class="lbl">Queixa Principal</span><div style="font-size:14px;line-height:1.6">' + esc(p.complaint) + "</div></div>" : "") +
      (p.medTreatment ? '<div class="card"><span class="lbl">Tratamento Médico</span><div style="font-size:13px;color:var(--sub)">' + esc(p.medDoctor) + " — " + esc(p.medDuration) + "</div></div>" : "") +
      (p.comorb.length ? '<div class="card"><span class="lbl">Comorbidades</span><div>' + condTags + "</div></div>" : "") +
      (p.meds.length ? '<div class="card"><span class="lbl">Medicações em Uso</span><div>' + medTags + "</div></div>" : "") +
      '<div class="card"><span class="lbl">Hábitos</span><div>' + (habitTags || '<span style="font-size:13px;color:var(--dim)">Sem hábitos registrados</span>') + "</div></div>" +
      (p.notes ? '<div class="card"><span class="lbl">Observações</span><div style="font-size:13px;color:var(--sub);line-height:1.65">' + esc(p.notes) + "</div></div>" : "") +
      '<div style="font-size:16px;font-weight:700;letter-spacing:-.3px;margin:20px 0 10px">Procedimentos Realizados</div>' +
      p.procedures.map(function (pr) { return '<div class="card"><div style="font-size:11px;color:var(--dim);margin-bottom:3px">' + esc(pr.date) + '</div><div style="font-size:13px">' + esc(pr.desc) + "</div></div>"; }).join("") +
      '<div class="card"><span class="lbl">Registrar Procedimento</span><div style="display:flex;gap:8px"><input class="inp sm" type="text" placeholder="Descrição do procedimento..." value="' + esc(S.pat.newProc) + '" data-bind="pat.newProc"><button class="btn pri" data-act="procAdd" data-val="' + p.id + '">Adicionar</button></div></div>';
  }

  function form() {
    var d = S.pat.draft, h = d.habits;
    var habitRows = D.HABITS.map(function (hb) {
      return '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span style="font-size:14px;color:var(--sub)">' + hb[1] + '</span><div style="display:flex;gap:6px">' +
        ["Sim", "Não"].map(function (v) { return tag(v, v === "Sim" ? "#ff453a" : "#32d74b", h[hb[0]] === (v === "Sim"), 'data-act="habitSet" data-val="' + hb[0] + '" data-val2="' + v + '"'); }).join("") + "</div></div>";
    }).join("");
    var pf = D.PARAFUNCOES.map(function (x) { return tag(x, "#ff9f0a", (h.parafuncoes || []).indexOf(x) >= 0, 'data-act="pfToggle" data-val="' + x + '"'); }).join("");
    return '<div class="row-btns"><button class="btn gho" data-act="patCancel">Cancelar</button><div style="flex:1;font-size:17px;font-weight:700;letter-spacing:-.3px">' + (S.pat.edit ? "Editar Prontuário" : "Novo Paciente") + '</div><button class="btn pri" data-act="patSave">Salvar</button></div>' +
      '<div class="card"><span class="lbl">Identificação</span><input class="inp" placeholder="Nome completo" autocomplete="off" value="' + esc(d.name) + '" data-bind="pat.draft.name">' +
      '<span class="lbl">Data de Nascimento</span><input class="inp" type="date" value="' + esc(d.dob) + '" data-bind="pat.draft.dob">' +
      '<input class="inp" placeholder="Telefone / Responsável legal" value="' + esc(d.phone) + '" data-bind="pat.draft.phone">' + A.addressFields("pat.draft", d) +
      (d.address && !d.street ? '<div class="note">Endereço antigo: ' + esc(d.address) + "</div>" : "") + "</div>" +
      '<div class="card"><span class="lbl">Queixa Principal</span><textarea class="inp" placeholder="Descreva a queixa inicial do paciente..." data-bind="pat.draft.complaint">' + esc(d.complaint) + "</textarea></div>" +
      '<div class="card"><span class="lbl">Tratamento Médico em Curso</span><div style="display:flex;gap:8px;margin-bottom:12px">' + ["Sim", "Não"].map(function (v) { return tag(v, "#4f8fff", d.medTreatment === (v === "Sim"), 'data-act="medTreatSet" data-val="' + v + '"'); }).join("") + "</div>" +
      (d.medTreatment ? '<input class="inp" placeholder="Nome e especialidade do médico" value="' + esc(d.medDoctor) + '" data-bind="pat.draft.medDoctor"><input class="inp" placeholder="Duração e motivo do tratamento" value="' + esc(d.medDuration) + '" data-bind="pat.draft.medDuration">' : "") + "</div>" +
      '<div class="card"><span class="lbl">Comorbidades Sistêmicas</span>' + chipPicker("c", d.comorb, "qc") + "</div>" +
      '<div class="card"><span class="lbl">Medicações em Uso</span>' + chipPicker("m", d.meds, "qm") + "</div>" +
      '<div class="card"><span class="lbl">Hábitos</span>' + habitRows + '<hr><span class="lbl">Parafunções</span><div>' + pf + "</div></div>" +
      '<div class="card"><span class="lbl">Observações Clínicas</span><textarea class="inp" placeholder="Comportamento, anamnese, alergias, Frankl..." data-bind="pat.draft.notes">' + esc(d.notes) + "</textarea></div>" +
      (S.pat.edit ? '<button class="btn dng block" data-act="patDelete" data-val="' + d.id + '">Excluir paciente</button>' : "");
  }

  var AC = A.ACTIONS;
  AC.patNew = function () { S.pat.draft = blank(); S.pat.form = true; S.pat.edit = false; S.pat.qc = S.pat.qm = ""; S.pat.open = {}; render(); window.scrollTo(0, 0); };
  AC.patOpen = function (id) { S.pat.sel = +id; render(); window.scrollTo(0, 0); };
  AC.patBack = function () { S.pat.sel = null; render(); };
  AC.patEditOpen = function (id) {
    var p = S.patients.find(function (x) { return x.id === +id; });
    S.pat.draft = JSON.parse(JSON.stringify(Object.assign(blank(), p))); S.pat.draft.habits = Object.assign(blank().habits, p.habits || {});
    S.pat.edit = true; S.pat.form = false; S.pat.qc = S.pat.qm = ""; S.pat.open = {}; render(); window.scrollTo(0, 0);
  };
  AC.patCancel = function () { S.pat.form = false; S.pat.edit = false; S.pat.draft = null; render(); };
  AC.patSave = function () {
    var d = S.pat.draft;
    if (!d.name.trim()) { A.toast("Informe o nome do paciente."); return; }
    d.name = d.name.trim();
    if (S.pat.edit) { S.patients = S.patients.map(function (p) { return p.id === d.id ? d : p; }); S.pat.sel = d.id; }
    else { d.id = Date.now(); S.patients.unshift(d); S.pat.sel = d.id; }
    save(); S.pat.form = false; S.pat.edit = false; S.pat.draft = null; render(); window.scrollTo(0, 0);
  };
  AC.patDelete = function (id) {
    if (!window.confirm("Excluir este paciente e todo o prontuário? Esta ação não pode ser desfeita.")) return;
    S.patients = S.patients.filter(function (p) { return p.id !== +id; }); save();
    S.pat.sel = null; S.pat.form = false; S.pat.edit = false; S.pat.draft = null; render(); window.scrollTo(0, 0);
  };
  AC.habitSet = function (k, v) { S.pat.draft.habits[k] = v === "Sim"; render(); };
  AC.pfToggle = function (v) {
    var a = S.pat.draft.habits.parafuncoes || (S.pat.draft.habits.parafuncoes = []), i = a.indexOf(v);
    if (i >= 0) a.splice(i, 1); else a.push(v); render();
  };
  function tog(arr, id) { var i = arr.indexOf(id); if (i >= 0) arr.splice(i, 1); else arr.push(id); }
  AC.condToggle = function (id) { tog(S.pat.draft.comorb, id); render(); };
  AC.medToggle = function (id) { tog(S.pat.draft.meds, id); render(); };
  AC.medTreatSet = function (v) { S.pat.draft.medTreatment = v === "Sim"; render(); };
  AC.procAdd = function (id) {
    var t = S.pat.newProc.trim(); if (!t) return;
    var p = S.patients.find(function (x) { return x.id === +id; });
    p.procedures.unshift({ date: new Date().toLocaleDateString("pt-BR"), desc: t }); S.pat.newProc = ""; save(); render();
  };
  AC.patToParecer = function (id) {
    var p = S.patients.find(function (x) { return x.id === +id; });
    S.par.c = p.comorb.slice(); S.par.m = p.meds.slice(); S.par.from = p.name; S.par.tab = "alerts"; A.go("assessment");
  };
  AC.patToRx = function (id) { A.rxStartForPatient(+id); };
})();
