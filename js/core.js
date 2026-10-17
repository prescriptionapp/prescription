/* Núcleo: estado, helpers, roteador, tela inicial e lesões orais. */
(function () {
  "use strict";
  var D = window.DATA;
  var A = (window.APP = { S: {}, SCREENS: {}, ACTIONS: {}, HOOKS: {}, D: D });
  var S = A.S;

  /* ── helpers ── */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function hx(hex, a) {
    var h = hex.replace("#", ""); if (h.length === 3) h = h.replace(/./g, "$&$&");
    return "rgba(" + parseInt(h.slice(0, 2), 16) + "," + parseInt(h.slice(2, 4), 16) + "," + parseInt(h.slice(4, 6), 16) + "," + a + ")";
  }
  function tint(color, a1, a2) {
    a1 = a1 == null ? 0.11 : a1; a2 = a2 == null ? 0.26 : a2;
    return "--tcol:" + color + ";--t1:" + hx(color, a1) + ";--t2a:" + hx(color, a2) + ";--tc1:" + hx(color, 0.15) + ";--tc2:" + hx(color, a2) +
      ";--tc3:" + hx(color, 0.4) + ";--t1a:" + hx(color, 0.16) + ";--t1b:" + hx(color, 0.03) + ";";
  }
  function tag(text, color, active, attrs) {
    return '<span class="tag' + (active ? " on" : "") + '" style="' + (active ? tint(color, 0.13, 0.33) : "") + '" ' + (attrs || "") + ">" + esc(text) + "</span>";
  }
  function badge(text, color) { return '<span class="badge" style="' + tint(color, 0.15, 0.4) + '">' + esc(text) + "</span>"; }
  function stat(val, lbl, color) { return '<div class="stat"><b style="color:' + color + '">' + esc(val) + "</b><small>" + esc(lbl) + "</small></div>"; }
  function glintCard(color, inner) { return '<div class="card tint" style="' + tint(color) + '"><div class="glint"></div>' + inner + "</div>"; }
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function num(s) { var n = parseFloat(String(s == null ? "" : s).replace(",", ".")); return isFinite(n) ? n : 0; }
  function fmtN(n, d) { return Number(n).toFixed(d == null ? 1 : d).replace(".", ","); }
  function floorN(n, d) { var f = Math.pow(10, d == null ? 1 : d); return Math.floor(n * f + 1e-9) / f; }
  function getAge(dob) {
    if (!dob) return null; var b = new Date(dob); if (isNaN(b)) return null; var n = new Date(), a = n.getFullYear() - b.getFullYear(), m = n.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && n.getDate() < b.getDate())) a--; return a >= 0 ? a : null;
  }
  function setPath(obj, path, val) { var p = path.split("."), o = obj; for (var i = 0; i < p.length - 1; i++) o = o[p[i]]; o[p[p.length - 1]] = val; }
  var store = {
    get: function (k, def) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  };
  Object.assign(A, { $: $, esc: esc, hx: hx, tint: tint, tag: tag, badge: badge, stat: stat, glintCard: glintCard, norm: norm, num: num, fmtN: fmtN, floorN: floorN, getAge: getAge, store: store });

  /* cores por categoria (comorbidades e medicações) */
  var CAT = {
    "Alergia": "#ffd60a", "Cardiovascular": "#ff453a", "Endócrino": "#ff9f0a", "Gestação": "#ff6b9d", "Hematológico": "#ff375f", "Hepático": "#c9a227",
    "Neurológico": "#5e5ce6", "Outros": "#5ac8fa", "Renal": "#64d2ff", "Respiratório": "#30d158", "Psiquiátrico": "#bf5af2", "Autoimune / Reumatológico": "#ac8e68",
    "Analgésico / Anti-inflamatório": "#ff9f0a", "Antibiótico": "#30d158", "Antirretroviral": "#5ac8fa", "Gastrointestinal": "#a2845e",
    "Ginecológico / Hormonal": "#ff6b9d", "Imunossupressor / Oncológico": "#bf5af2", "Osteoporose / Metabolismo ósseo": "#8e8cf2",
    "Antifúngico": "#32d74b", "Antiviral": "#ff375f",
  };
  A.catColor = function (c) { return CAT[c] || "#8e8e93"; };
  A.byCat = function (list) {
    var m = {}; list.forEach(function (x) { (m[x.category] = m[x.category] || []).push(x); });
    return Object.keys(m).sort(function (a, b) { return a.localeCompare(b, "pt-BR"); }).map(function (k) {
      return { cat: k, items: m[k].sort(function (a, b) { return a.label.localeCompare(b.label, "pt-BR"); }) };
    });
  };
  A.comorbById = function (id) { return D.COMORB.find(function (c) { return c.id === id; }); };
  A.medById = function (id) { return D.MEDS.find(function (c) { return c.id === id; }); };

  /* ── estado base ── */
  S.tab = "home";
  S.sheet = null;
  S.lesionSel = null;
  S.settings = store.get("prescription:settings_v1", { attendCity: "", attendUF: "" });
  A.saveSettings = function () { store.set("prescription:settings_v1", S.settings); };

  /* ── toast ── */
  var toastTimer;
  A.toast = function (msg, ms) {
    var el = $("#toast"); el.innerHTML = '<div class="toast">' + esc(msg) + "</div>";
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.innerHTML = ""; }, ms || 3800);
  };

  /* ── folha inferior ── */
  A.openSheet = function (title, bodyHtml) { S.sheet = { title: title, body: bodyHtml }; renderSheet(); };
  A.closeSheet = function () { S.sheet = null; renderSheet(); };
  function renderSheet() {
    var el = $("#sheet");
    if (!S.sheet) { el.innerHTML = ""; return; }
    el.innerHTML = '<div class="scrim" data-act="scrim"><div class="sheet"><div class="sheet-h"><b>' + esc(S.sheet.title) + '</b><button class="btn gho" data-act="sheetClose" style="padding:6px 12px">Fechar</button></div><div class="sheet-b">' + S.sheet.body + "</div></div></div>";
  }

  /* ── render / bind ── */
  var TABS = [["home", "Início"], ["patients", "Prontuário"], ["anesthesia", "Anestesia"], ["prescription", "Prescrição"], ["assessment", "Parecer"], ["emergencies", "Urgências"], ["lesions", "Lesões Orais"]];
  A.TABS = TABS;

  function captureFocus() {
    var el = document.activeElement;
    if (el && el.dataset && el.dataset.bind) {
      var r = { bind: el.dataset.bind };
      try { r.s = el.selectionStart; r.e = el.selectionEnd; } catch (e) { /* number inputs */ }
      return r;
    }
    return null;
  }
  function restoreFocus(f) {
    if (!f) return;
    var el = document.querySelector('[data-bind="' + f.bind + '"]');
    if (!el) return;
    el.focus();
    try { if (f.s != null) el.setSelectionRange(f.s, f.e); } catch (e) { /* ignore */ }
  }
  function render() {
    $("#nav").innerHTML = TABS.map(function (t) { return '<button data-tab="' + t[0] + '" class="' + (S.tab === t[0] ? "on" : "") + '">' + t[1] + "</button>"; }).join("");
    var f = captureFocus();
    $("#main").innerHTML = A.SCREENS[S.tab]();
    restoreFocus(f);
    renderSheet();
  }
  A.render = render;
  A.go = function (tab, push) {
    S.tab = tab; S.sheet = null;
    if (A.ENTER && A.ENTER[tab]) A.ENTER[tab]();
    if (push !== false) { try { history.pushState({ tab: tab }, ""); } catch (e) { /* ignore */ } }
    render(); window.scrollTo(0, 0);
  };
  window.addEventListener("popstate", function (e) { S.tab = (e.state && e.state.tab) || "home"; S.sheet = null; render(); window.scrollTo(0, 0); });

  document.addEventListener("click", function (e) {
    var tb = e.target.closest("[data-tab]");
    if (tb && tb.closest("#nav")) { A.go(tb.dataset.tab); return; }
    var t = e.target.closest("[data-act]");
    if (!t) return;
    if (t.dataset.act === "scrim" && e.target !== t) return;
    var fn = A.ACTIONS[t.dataset.act];
    if (fn) fn(t.dataset.val, t.dataset.val2, t, e);
  });
  function onInput(e) {
    var t = e.target.closest("[data-bind]"); if (!t) return;
    setPath(S, t.dataset.bind, t.value);
    if (t.dataset.hook && A.HOOKS[t.dataset.hook]) A.HOOKS[t.dataset.hook](t.value, t);
    if (A.onAnyInput) A.onAnyInput(t.dataset.bind);
    if (t.dataset.r) render();
  }
  document.addEventListener("input", onInput);
  document.addEventListener("change", function (e) { if (e.target.tagName === "SELECT") onInput(e); });

  A.ACTIONS.go = function (v) { A.go(v); };
  A.ACTIONS.sheetClose = A.ACTIONS.scrim = function () { A.closeSheet(); };

  /* ── instalação (PWA) ── */
  var deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferredPrompt = e; if (S.tab === "home") render(); });
  window.addEventListener("appinstalled", function () { deferredPrompt = null; store.set("prescription:installDone", true); if (S.tab === "home") render(); });
  function isStandalone() { return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true; }
  function isIOS() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); }
  A.ACTIONS.installNow = function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(function () { deferredPrompt = null; render(); });
  };
  A.ACTIONS.installHide = function () { store.set("prescription:installHide", true); render(); };
  function installCard() {
    if (isStandalone() || store.get("prescription:installHide", false) || store.get("prescription:installDone", false)) return "";
    var body;
    if (deferredPrompt) {
      body = '<div class="note" style="margin-bottom:12px">Instale no seu aparelho para abrir como um aplicativo, em tela cheia e até sem internet.</div><button class="btn pri" data-act="installNow">Instalar aplicativo</button>';
    } else if (isIOS()) {
      body = '<div class="note" style="margin-bottom:0">No <b>Safari</b>, toque em <b>Compartilhar</b> <span class="sq" style="width:12px;height:12px"></span> e depois em <b>Adicionar à Tela de Início</b>. O app passa a abrir em tela cheia e funciona offline.</div>';
    } else {
      body = '<div class="note" style="margin-bottom:0">No menu do navegador, escolha <b>Instalar aplicativo</b> (ou <b>Adicionar à tela inicial</b>). O app passa a abrir em tela cheia e funciona offline.</div>';
    }
    return '<div class="card"><div class="install"><div style="flex:1"><span class="lbl">Instalar como aplicativo</span>' + body + '</div><button class="x" data-act="installHide" aria-label="Dispensar">×</button></div></div>';
  }

  /* ── Início ── */
  A.SCREENS.home = function () {
    var tiles = [
      ["patients", "Prontuário", "Pacientes", "#4f8fff", 1],
      ["anesthesia", "Anestesia", "Calculadora", "#5e5ce6", 0],
      ["prescription", "Prescrição", "Receita em PDF", "#30d158", 0],
      ["assessment", "Parecer", "Alertas clínicos", "#5ac8fa", 0],
      ["lesions", "Lesões Orais", "Diagnóstico", "#ff6b9d", 0],
      ["emergencies", "Urgências", "Protocolos de emergência", "#ff453a", 1],
    ];
    return '<div class="hero"><span class="dot0"></span><span class="tag0">Apoio Clínico Odontológico</span><h2>Prescription</h2><div class="sub" style="margin-bottom:0">Apoio clínico baseado em evidências de alto impacto</div></div>' +
      '<div class="tiles">' + tiles.map(function (t) {
        return '<div class="tile' + (t[4] ? " full" : "") + '" style="' + tint(t[3]) + 'background:var(--t1);border:1px solid var(--t2a)" data-act="go" data-val="' + t[0] + '">' +
          '<div class="haze"></div><div class="glint" style="--tc3:' + hx(t[3], 0.4) + '"></div><div class="orb-o"></div><div class="orb"></div>' +
          '<div style="position:relative"><em>' + t[2].toUpperCase() + "</em><b>" + t[1] + "</b></div></div>";
      }).join("") + "</div>" + installCard() +
      '<div class="card"><span class="lbl">Referências Científicas</span><div style="font-size:11.5px;color:var(--sub);line-height:1.9">Malamed SF (2020) · Andrade ED · Coté CJ (2018) · Lockhart PB / Circulation 2021 (IF 37.8) · Moore PA / JADA 2021 (IF 9.2) · Perucca / Lancet Neurol 2023 (IF 48.0) · ADA Diabetes Care 2024 (IF 16.2) · GINA 2024 · Neville BW (2022) · Pappas PG / Clin Infect Dis (IF 20.8) · Khan AA / JBMR 2017 · Whelton / Hypertension 2018 (IF 9.9) · DeBaun / Lancet 2021 (IF 79.3)</div></div>' +
      '<div class="note" style="text-align:center;margin-top:14px;font-size:11.5px">Ferramenta de apoio à decisão clínica. Não substitui o julgamento do cirurgião-dentista.<br>Os dados dos pacientes ficam apenas neste aparelho.</div>';
  };

  /* ── Lesões orais (igual ao Prescription) ── */
  A.SCREENS.lesions = function () {
    if (S.lesionSel) {
      var l = D.LESIONS.find(function (x) { return x.id === S.lesionSel; });
      return '<button class="btn gho" style="margin-bottom:20px" data-act="lesionBack">Voltar</button>' +
        glintCard(l.color, tag(l.cat, l.color, true) + '<div style="font-size:22px;font-weight:800;letter-spacing:-.5px;margin:10px 0 12px">' + esc(l.name) + '</div><span class="lbl">Diagnóstico</span><div style="font-size:13px;color:var(--sub);line-height:1.7">' + esc(l.dx) + "</div>") +
        '<div style="font-size:16px;font-weight:700;letter-spacing:-.3px;margin:4px 0 10px">Protocolo de Tratamento</div>' +
        l.tx.map(function (t, i) { return '<div class="card" style="display:flex;gap:12px;align-items:flex-start"><div style="font-size:11px;font-weight:700;width:24px;flex-shrink:0;color:' + l.color + '">' + String(i + 1).padStart(2, "0") + '</div><div style="font-size:13px;color:var(--sub);line-height:1.65">' + esc(t) + "</div></div>"; }).join("") +
        '<div class="ref" style="margin-top:12px">' + esc(l.ref) + "</div>";
    }
    return '<h1>Lesões Orais</h1><div class="sub">Diagnóstico e protocolo de tratamento</div>' +
      D.LESIONS.map(function (l) {
        return '<div class="card click" data-act="lesionOpen" data-val="' + l.id + '"><div style="display:flex;justify-content:space-between;align-items:center"><div><div class="name" style="margin-bottom:6px">' + esc(l.name) + "</div>" + tag(l.cat, l.color, true) + '</div><div style="color:var(--dim);font-size:20px">›</div></div></div>';
      }).join("");
  };
  A.ACTIONS.lesionOpen = function (v) { S.lesionSel = v; render(); window.scrollTo(0, 0); };
  A.ACTIONS.lesionBack = function () { S.lesionSel = null; render(); };
})();
