/* Anestesia — seleção do sal em lista + peso + perfil (ASA I-II / ASA III-IV / Pediátrico). */
(function () {
  "use strict";
  var A = window.APP, D = A.D, S = A.S, esc = A.esc, tag = A.tag, tint = A.tint, render = A.render;

  S.an = { mode: "asa12", sel: null, weight: "" };

  var MODES = [["asa12", "ASA I-II"], ["asa34", "ASA III-IV"], ["ped", "Paciente Pediátrico"]];
  var MODE_SUB = {
    asa12: "Paciente saudável ou com doença sistêmica leve e controlada. Epinefrina ≤ 0,2 mg (200 µg) por sessão.",
    asa34: "Doença sistêmica grave / cardiopata. Mesma dose máxima do sal, porém tubetes também limitados pelo vasoconstritor (epinefrina ≤ 0,04 mg; felipressina ≤ " + String(D.FELI_MAX_UI).replace(".", ",") + " UI).",
    ped: "Doses por kg e teto absoluto reduzidos (AAPD / Malamed). A dose pediátrica quase sempre é limitada pelo sal anestésico.",
  };
  var PRILO_WARN = '<div class="banner red"><b class="t">⚠ Contraindicação grave em gestantes</b>' +
    '<p><b>Prilocaína com felipressina é gravemente contraindicada em gestantes e possíveis gestantes.</b> A felipressina tem ação ocitócica (pode estimular contrações uterinas), e a prilocaína pode causar metemoglobinemia, inclusive no feto.</p>' +
    '<p>Antes de usar, pergunte a toda paciente em idade fértil sobre gravidez ou possibilidade de gravidez. Na dúvida, escolha outro anestésico (ex.: lidocaína ou articaína com epinefrina).</p></div>';

  /** Dose máxima: limita pelo sal (mg/kg e teto absoluto) e, se houver, pelo vasoconstritor. Arredonda SEMPRE para baixo. */
  function calc(a, mode, w) {
    var rate = a.rate[mode], abs = a.abs[mode];
    var byKg = rate * w, mgSalt = Math.min(byKg, abs);
    var tubes = mgSalt / a.mgPerCartridge, limitedBy = byKg > abs ? "abs" : "kg";
    var vcap = null;
    if (a.vaso) {
      vcap = mode === "asa34" ? a.vaso.maxCardiac : a.vaso.maxHealthy;
      if (vcap != null) { var tv = vcap / a.vaso.perCartridge; if (tv < tubes) { tubes = tv; limitedBy = "vaso"; } }
    }
    var t = A.floorN(tubes, 1);
    return { rate: rate, abs: abs, byKg: byKg, tubes: t, mg: A.floorN(t * a.mgPerCartridge, 1), ml: A.floorN(t * 1.8, 1), limitedBy: limitedBy, vcap: vcap,
      vasoTotal: a.vaso ? t * a.vaso.perCartridge : 0 };
  }
  A.calcAnest = calc;

  function vasoTxt(v, x) { return v.unit === "UI" ? A.fmtN(x, 2) + " UI" : A.fmtN(x, 0) + " µg"; }
  function vcapTxt(v, x) { return v.unit === "UI" ? A.fmtN(x, 2) + " UI" : A.fmtN(x / 1000, 2) + " mg"; }

  A.SCREENS.anesthesia = function () {
    var an = S.an, mode = an.mode, a = D.ANEST.find(function (x) { return x.id === an.sel; });
    var w = A.num(an.weight), modeLabel = MODES.find(function (m) { return m[0] === mode; })[1];
    var h = '<h1>Anestesia Local</h1><div class="sub">Calculadora de dose máxima por perfil clínico</div>';

    h += '<div class="card"><span class="lbl">Perfil do Paciente</span><div class="wrap" style="margin-bottom:10px">' +
      MODES.map(function (m) { return tag(m[1], "#4f8fff", mode === m[0], 'data-act="anMode" data-val="' + m[0] + '"'); }).join("") +
      '</div><div class="note" style="margin-bottom:0">' + MODE_SUB[mode] + "</div></div>";

    h += '<div class="card"><span class="lbl">Sal Anestésico</span><button class="picker" data-act="anPick">' +
      (a ? '<div><div class="pv">' + esc(a.salt) + '</div><div style="font-size:12px;color:' + a.color + ';font-weight:600;margin-top:2px">' + esc(a.vc) + "</div></div>" : '<span class="ph">Selecionar sal anestésico...</span>') +
      "<i>▾</i></button></div>";

    h += '<div class="card"><span class="lbl">Peso do Paciente (kg)</span><input class="inp" style="margin-bottom:0" type="text" inputmode="decimal" placeholder="Inserir peso..." value="' + esc(an.weight) + '" data-bind="an.weight" data-r="1"></div>';

    if (a && a.isPrilocaine) h += PRILO_WARN;

    if (!a) return h + '<div class="empty">Selecione o sal anestésico na lista e informe o peso para calcular a dose máxima.</div>';

    if (w > 0) {
      var r = calc(a, mode, w);
      h += '<div class="card tint" style="' + tint(a.color, 0.09, 0.3) + '"><div class="glint"></div>' +
        '<div style="font-size:15px;font-weight:700;margin-bottom:2px">' + esc(a.name) + '</div><div style="font-size:11px;color:' + a.color + ';font-weight:600;margin-bottom:14px">' + esc(a.brand) + " · " + modeLabel + "</div>" +
        '<div class="stats">' + A.stat(A.fmtN(r.mg, 1), "mg máx.", a.color) + A.stat(A.fmtN(r.tubes, 1), "tubetes", a.color) + A.stat(A.fmtN(r.ml, 1), "mL", a.color) + "</div>" +
        '<div class="note">Tubete de 1,8 mL = ' + A.fmtN(a.mgPerCartridge, 1) + " mg de sal. Valores arredondados <b>para baixo</b>.</div>";
      if (r.limitedBy === "vaso")
        h += '<div class="note" style="color:var(--danger)">⚠ Dose limitada pelo vasoconstritor (' + esc(a.vaso.name) + ': máx. ' + vcapTxt(a.vaso, r.vcap) + " em " + modeLabel + "), e não pelo sal anestésico.</div>";
      else if (r.limitedBy === "abs")
        h += '<div class="note" style="color:var(--warn)">⚠ Dose limitada pelo teto absoluto de ' + A.fmtN(r.abs, 0) + " mg por sessão (" + A.fmtN(r.rate, 1) + " mg/kg × " + A.fmtN(w, 1) + " kg = " + A.fmtN(r.byKg, 1) + " mg).</div>";
      else
        h += '<div class="note">Cálculo: ' + A.fmtN(r.rate, 1) + " mg/kg × " + A.fmtN(w, 1) + " kg = " + A.fmtN(r.byKg, 1) + " mg (teto absoluto " + A.fmtN(r.abs, 0) + " mg).</div>";
      if (a.vaso) h += '<div class="note" style="margin-bottom:0">Vasoconstritor nessa dose: <b>' + vasoTxt(a.vaso, r.vasoTotal) + "</b> de " + esc(a.vaso.name) + (r.vcap != null ? " (limite " + vcapTxt(a.vaso, r.vcap) + ")." : " (sem limite definido para este perfil).") + "</div>";
      h += "</div>";
      if (w > 200) h += '<div class="banner amber"><b class="t">Confira o peso</b><p>O peso informado (' + A.fmtN(w, 0) + " kg) é muito alto. Verifique se não houve erro de digitação.</p></div>";
    } else if (an.weight.trim()) {
      h += '<div class="banner amber"><b class="t">Peso inválido</b><p>Digite o peso em quilos, apenas números (ex.: 70 ou 18,5).</p></div>';
    } else {
      h += '<div class="note" style="text-align:center;margin:6px 0 12px">Informe o peso do paciente para calcular a dose máxima.</div>';
    }

    h += '<div class="card"><span class="lbl">Sobre este anestésico</span>' +
      '<div class="grid2" style="margin-bottom:10px"><div><div class="lbl" style="margin-bottom:2px">Tipo</div><div style="font-size:13px">' + esc(a.type) + '</div></div><div><div class="lbl" style="margin-bottom:2px">Metabolismo</div><div style="font-size:13px">' + esc(a.metabolism) + "</div></div></div>" +
      '<div class="grid2"><div><div class="lbl" style="margin-bottom:2px">Início</div><div style="font-size:13px">' + esc(a.onset) + '</div></div><div><div class="lbl" style="margin-bottom:2px">Duração</div><div style="font-size:13px">' + esc(a.duration) + "</div></div></div>" +
      "<hr>" + a.notes.map(function (n) { return '<div class="item"><div class="dot" style="--tcol:' + a.color + '"></div><p>' + esc(n) + "</p></div>"; }).join("") +
      (a.ref ? '<div class="ref" style="margin-top:8px">' + esc(a.ref) + "</div>" : "") + "</div>";
    return h;
  };

  var AC = A.ACTIONS;
  AC.anMode = function (v) { S.an.mode = v; render(); };
  AC.anPick = function () {
    A.openSheet("Sal anestésico", D.ANEST.map(function (x) {
      return '<div class="opt' + (S.an.sel === x.id ? " on" : "") + '" data-act="anSel" data-val="' + x.id + '"><div class="rd"></div><div><div class="on-t">' + esc(x.name) + '</div><small>' + esc(x.brand) + "</small></div></div>";
    }).join(""));
  };
  AC.anSel = function (id) { S.an.sel = id; A.closeSheet(); render(); };
})();
