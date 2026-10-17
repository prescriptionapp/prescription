/* Lógica de texto da receita (números por extenso, quantidades, posologia).
   Funções puras — sem acesso ao DOM — para poderem ser testadas em Node. */
(function (g) {
  "use strict";

  var U = ["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"];
  var UF = U.slice(); UF[1] = "uma"; UF[2] = "duas";
  var T = ["","","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"];
  var C = ["","cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"];
  var CF = ["","cento","duzentas","trezentas","quatrocentas","quinhentas","seiscentas","setecentas","oitocentas","novecentas"];

  /** Número por extenso (0–999). fem = true → "uma", "duas", "vinte e uma"... */
  function ext(n, fem) {
    var u = fem ? UF : U, c = fem ? CF : C;
    if (n < 20) return u[n];
    if (n < 100) { var t = Math.floor(n / 10), r = n % 10; return r ? T[t] + " e " + u[r] : T[t]; }
    if (n === 100) return "cem";
    if (n < 1000) { var h = Math.floor(n / 100), r2 = n % 100; return r2 ? c[h] + " e " + ext(r2, fem) : c[h]; }
    return String(n);
  }
  /** "05 (cinco)" */
  function fmt(n, fem) { return n >= 1000 ? String(n) : String(n).padStart(2, "0") + " (" + ext(n, fem) + ")"; }
  /** Número decimal em pt-BR: 7.5 → "7,5" */
  function dec(x) { return String(Math.round(x * 10) / 10).replace(".", ","); }

  /** Unidades femininas (cápsula, ampola, bisnaga...) pedem "uma/duas" */
  function isFem(unit) { return /^(cápsula|ampola|bisnaga|pastilha)/i.test(unit || ""); }

  /** Intervalo: "8h" → 3 doses/dia, "a cada 8 (oito) horas"; "5x" → "5 (cinco) vezes ao dia" */
  function parseInterval(s) {
    s = s || "";
    var m = s.match(/^(\d+)h$/);
    if (m) { var h = parseInt(m[1], 10); return { perDay: Math.ceil(24 / h), text: "a cada " + h + " (" + ext(h, true) + ") horas" }; }
    m = s.match(/^(\d+)x$/);
    if (m) { var x = parseInt(m[1], 10); return { perDay: x, text: x + " (" + ext(x) + ") vezes ao dia" }; }
    return { perDay: null, text: s };
  }
  /** Rótulo curto para os botões de intervalo */
  function intervalLabel(s) {
    var m = (s || "").match(/^(\d+)x$/);
    return m ? m[1] + "×/dia" : s;
  }

  function leadNum(str) { var m = (str || "").match(/^(\d+(?:[.,]\d+)?)/); return m ? parseFloat(m[1].replace(",", ".")) : null; }
  /** Dose única: soma os números antes de "(" — "1 (um) ... e 1 (um) ..." = 2 */
  function singleDoseQty(doseStr) {
    var sum = 0, re = /(\d+)\s*\(/g, m;
    while ((m = re.exec(doseStr || "")) !== null) sum += parseInt(m[1], 10);
    return sum > 0 ? sum : 1;
  }

  /** Quantidade total a dispensar */
  function calcQty(form, doseStr, interval, days) {
    if (form.isContainer) {
      // Frascos de volume conhecido (clorexidina, nistatina): calcula quantos frascos o tratamento consome
      if (form.contentMl && form.doseMl && form.doseMl[doseStr] != null) {
        var iv = parseInterval(interval);
        if (!iv.perDay || !days) return 1;
        return Math.max(1, Math.ceil(form.doseMl[doseStr] * iv.perDay * days / form.contentMl));
      }
      return 1;
    }
    if (form.isSingleDose) return singleDoseQty(doseStr);
    if (!days || days <= 0) return null;
    var lead = leadNum(doseStr);
    var perDose = lead != null ? lead : 1;
    var ivl = parseInterval(interval);
    if (!ivl.perDay) return null;
    return Math.ceil(perDose * ivl.perDay * days);
  }

  var VERBS = { oral: "Tomar", sublingual: "Tomar", intramuscular: "Aplicar", "tópica": "Aplicar", bochecho: "Bochechar", intranasal: "Administrar" };

  /** Insere a unidade na dose: "4 (quatro)" → "4 (quatro) cápsulas"; "1 (um) em jejum" → "1 (um) comprimido em jejum" */
  function doseWithUnit(doseStr, form) {
    if (form.doseHasUnit || form.weightBased) return doseStr;
    var m = doseStr.match(/^(\d+)\s*\(([^)]*)\)(.*)$/);
    if (!m) return doseStr;
    var rest = m[3];
    if (/^\s*gota/i.test(rest)) return doseStr;               // "20 (vinte) gotas" já tem unidade
    var n = parseInt(m[1], 10);
    return m[1] + " (" + m[2] + ") " + (n === 1 ? form.unit : form.unitPlural) + rest;
  }

  /** Texto "modo de usar" */
  function buildInstruction(drug, groupId, form, p, weight, analgesicGroups) {
    var route = form.route || "oral";
    var verb = form.verb || VERBS[route] || "Usar";
    var doseStr = p.dose || (form.doseOptions && form.doseOptions[0]) || "1 (um)";
    var interval = p.interval != null ? p.interval : ((form.intervals && form.intervals[0]) || "");
    var days = p.days ? parseInt(p.days, 10) : ((form.durations && form.durations[0]) || 1);

    var dose = doseWithUnit(doseStr, form);
    if (form.weightBased) {
      var rate = leadNum(doseStr);
      if (rate && weight > 0) {
        var mg = rate * weight; if (form.maxMg) mg = Math.min(mg, form.maxMg);
        dose = doseStr + " (= " + dec(mg) + " mg para " + dec(weight) + " kg)";
      }
    }
    var showRoute = (route === "oral" && !form.doseHasUnit && (verb === "Tomar" || verb === "Administrar")) || route === "sublingual" || route === "intramuscular" || route === "intranasal";
    var routeTxt = showRoute ? " por via " + route : "";

    var s;
    if (form.isSingleDose) {
      s = verb + " " + dose + routeTxt + (interval ? ", " + interval : "") + ".";
    } else {
      var iv = parseInterval(interval);
      s = verb + " " + dose + routeTxt + ", " + iv.text + ", por " + fmt(days) + " " + (days === 1 ? "dia" : "dias");
      if (form.painSuffix && analgesicGroups.indexOf(groupId) >= 0) s += ", enquanto houver dor";
      s += ".";
    }
    if (form.extra) s += " " + form.extra;
    return s;
  }

  /** Monta o item da receita a partir da escolha do usuário */
  function buildItem(drug, groupId, p, weight, analgesicGroups) {
    var forms = (drug.posology && drug.posology.forms) || [];
    var form = forms.find(function (f) { return f.id === p.formId; }) || forms[0];
    if (!form) return null;
    var doseStr = p.dose || (form.doseOptions && form.doseOptions[0]) || "1 (um)";
    var interval = p.interval != null ? p.interval : ((form.intervals && form.intervals[0]) || "");
    var days = p.days ? parseInt(p.days, 10) : ((form.durations && form.durations[0]) || 1);
    var qty = calcQty(form, doseStr, interval, days);
    var fem = isFem(form.unit);
    var mgLabel = form.mgLabel || (form.mg != null ? dec(form.mg) + " mg" : "");
    return {
      use: drug.use === "externo" ? "externo" : "interno",
      name: drug.name + (mgLabel ? " " + mgLabel : ""),
      qty: qty,
      qtyText: qty != null ? fmt(qty, fem) + " " + (qty === 1 ? form.unit : form.unitPlural) : "_____ " + form.unitPlural,
      instruction: buildInstruction(drug, groupId, form, p, weight, analgesicGroups),
    };
  }

  /** Classe terapêutica para fins de paginação: antibióticos e antissépticos contam como UMA só classe. */
  function classKey(groupId) { return groupId === "antissepticos" ? "antibioticos" : groupId; }

  /** Divide os itens em páginas de, no máximo, maxClasses classes (ordem de 1ª aparição). Cada item precisa de .cls */
  function paginate(items, maxClasses) {
    maxClasses = maxClasses || 3;
    var order = [];
    items.forEach(function (it) { if (order.indexOf(it.cls) < 0) order.push(it.cls); });
    var pages = [];
    for (var i = 0; i < order.length; i += maxClasses) {
      var set = order.slice(i, i + maxClasses);
      pages.push(items.filter(function (it) { return set.indexOf(it.cls) >= 0; }));
    }
    return pages.length ? pages : [[]];
  }

  g.RxLogic = { classKey: classKey, paginate: paginate, ext: ext, fmt: fmt, dec: dec, isFem: isFem, parseInterval: parseInterval, intervalLabel: intervalLabel,
    leadNum: leadNum, calcQty: calcQty, buildInstruction: buildInstruction, buildItem: buildItem };
  if (typeof module !== "undefined" && module.exports) module.exports = g.RxLogic;
})(typeof window !== "undefined" ? window : globalThis);
