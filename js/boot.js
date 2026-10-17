/* Inicialização + service worker (funcionamento offline e instalação como app). */
(function () {
  "use strict";
  var A = window.APP;
  try { history.replaceState({ tab: "home" }, ""); } catch (e) { /* ignore */ }
  A.render();
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () { /* offline desativado, o app segue funcionando */ });
    });
  }
})();
