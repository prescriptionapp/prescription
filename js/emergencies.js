/* Urgências — protocolos de emergências médicas no consultório (Malamed, 7.ª ed.). */
(function () {
  "use strict";
  var A = window.APP, D = A.D, S = A.S, esc = A.esc, tint = A.tint, render = A.render;

  var SEV = {
    critica: { label: "Crítica", color: "#ff453a", order: 0 },
    grave: { label: "Grave", color: "#ff7a45", order: 1 },
    moderada: { label: "Moderada", color: "#ff9f0a", order: 2 },
    leve: { label: "Leve", color: "#30d158", order: 3 },
  };
  S.em = { q: "", sel: null };

  function sevBadge(sv) { return A.badge(SEV[sv].label, SEV[sv].color); }

  function list() {
    var q = A.norm(S.em.q);
    var items = D.EMERG.filter(function (e) { return !q || A.norm(e.title + " " + e.category + " " + e.trigger).indexOf(q) >= 0; });
    var cats = {}; items.forEach(function (e) { (cats[e.category] = cats[e.category] || []).push(e); });
    var h = '<h1>Urgências</h1><div class="sub">Emergências médicas no consultório odontológico</div>' +
      '<div class="banner red" style="display:flex;justify-content:space-between;align-items:center;gap:12px"><div><b class="t" style="margin-bottom:2px">Emergência grave</b><p style="margin:0">Em caso de risco de vida, acione o SAMU imediatamente.</p></div>' +
      '<a class="btn pri" style="text-decoration:none;background:linear-gradient(180deg,#ff5a50,#d62f26);white-space:nowrap" href="tel:192">Ligar 192</a></div>' +
      '<input class="inp" placeholder="Buscar emergência..." value="' + esc(S.em.q) + '" data-bind="em.q" data-r="1">';
    var keys = Object.keys(cats).sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
    if (!keys.length) return h + '<div class="empty">Nenhuma emergência encontrada.</div>';
    keys.forEach(function (c) {
      cats[c].sort(function (a, b) { return SEV[a.severity].order - SEV[b.severity].order || a.title.localeCompare(b.title, "pt-BR"); });
      h += '<span class="lbl" style="margin-top:14px">' + esc(c) + "</span>" + cats[c].map(function (e) {
        var sv = SEV[e.severity];
        return '<div class="card click tint" style="' + tint(sv.color, 0.07, 0.24) + '" data-act="emOpen" data-val="' + e.id + '"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div style="min-width:0"><div class="name" style="margin-bottom:4px">' + esc(e.title) +
          '</div><div style="font-size:12px;color:var(--dim);line-height:1.4">' + esc(e.trigger) + '</div></div><div style="display:flex;align-items:center;gap:8px;flex-shrink:0">' + sevBadge(e.severity) + '<span style="color:var(--dim);font-size:20px">›</span></div></div></div>';
      }).join("");
    });
    return h + '<div class="note" style="text-align:center;margin-top:16px;font-size:11.5px">Condutas baseadas em Malamed SF — Medical Emergencies in the Dental Office, 7.ª ed. (2015). Esta ferramenta não substitui o treinamento em suporte básico de vida.</div>';
  }

  function detail() {
    var e = D.EMERG.find(function (x) { return x.id === S.em.sel; });
    if (!e) { S.em.sel = null; return list(); }
    var sv = SEV[e.severity], c = sv.color;
    var h = '<button class="btn gho" style="margin-bottom:16px" data-act="emBack">Voltar</button>' +
      '<div class="card tint" style="' + tint(c, 0.1, 0.32) + '"><div class="glint"></div><div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">' + sevBadge(e.severity) + '<span class="cat-lbl" style="--tcol:' + c + ';margin:0">' + esc(e.category.toUpperCase()) + "</span></div>" +
      '<div style="font-size:22px;font-weight:800;letter-spacing:-.5px;line-height:1.2">' + esc(e.title) + "</div>" +
      (e.trigger ? '<div style="margin-top:12px"><span class="lbl" style="margin-bottom:4px">Gatilhos / causas</span><div style="font-size:13px;color:var(--sub);line-height:1.6">' + esc(e.trigger) + "</div></div>" : "") + "</div>" +
      '<div class="card"><span class="lbl">Sinais e sintomas</span>' + e.signs.map(function (s) { return '<div class="item"><div class="dot" style="--tcol:' + c + '"></div><p>' + esc(s) + "</p></div>"; }).join("") + "</div>" +
      '<div style="font-size:16px;font-weight:700;letter-spacing:-.3px;margin:18px 0 10px">Conduta — passo a passo</div>' +
      e.steps.map(function (st) {
        return '<div class="card" style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px"><div style="width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff;background:' + c + '">' + st.n + '</div><div style="font-size:13.5px;line-height:1.6;color:var(--tx)">' + esc(st.text) + "</div></div>";
      }).join("");
    if (e.drugs && e.drugs.length) h += '<div class="card tint" style="' + tint("#ff9f0a", 0.07, 0.26) + '"><div class="glint"></div><span class="lbl" style="color:var(--warn)">Fármacos de emergência</span>' +
      e.drugs.map(function (d) { return '<div class="item"><div class="dot" style="--tcol:#ff9f0a"></div><p style="color:var(--tx);font-weight:600">' + esc(d) + "</p></div>"; }).join("") + "</div>";
    if (e.notes) h += '<div class="banner amber"><b class="t">Observações</b><p>' + esc(e.notes) + "</p></div>";
    return h + '<div class="ref" style="margin-top:12px">Malamed SF. Medical Emergencies in the Dental Office. 7.ª ed. Elsevier, 2015.</div>';
  }

  A.ENTER = A.ENTER || {}; A.ENTER.emergencies = function () { S.em.sel = null; S.em.q = ""; };
  A.SCREENS.emergencies = function () { return S.em.sel ? detail() : list(); };
  A.ACTIONS.emOpen = function (id) { S.em.sel = id; render(); window.scrollTo(0, 0); };
  A.ACTIONS.emBack = function () { S.em.sel = null; render(); window.scrollTo(0, 0); };
})();
