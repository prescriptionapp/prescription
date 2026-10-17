/* Gerador do PDF da receita (A5) com pdf-lib.
   O PDF é desenhado diretamente — não passa pela janela de impressão do navegador —,
   por isso não existe cabeçalho/rodapé com URL do site, número de página, data ou hora.

   Regras de paginação:
   • cada receita cabe em UMA página (o conteúdo é reduzido automaticamente até caber);
   • com mais de 3 classes de medicamentos, as classes excedentes vão para novas páginas,
     e cada página repete paciente, endereço, cidade, data e assinatura. */
(function (g) {
  "use strict";
  var MM = 72 / 25.4;
  var SCALES = [1, 0.94, 0.88, 0.82, 0.77, 0.72];   // do tamanho normal até o menor aceitável

  var FALLBACK = { "₂": "2", "≥": ">=", "≤": "<=", "→": "->", "≈": "~", "‑": "-", "\u00a0": " ", "′": "'", "″": '"' };
  function safe(font, s) {
    var out = "";
    for (var ch of String(s == null ? "" : s)) {
      var ok = true;
      try { font.encodeText(ch); } catch (e) { ok = false; }
      out += ok ? ch : (FALLBACK[ch] !== undefined ? FALLBACK[ch] : "?");
    }
    return out;
  }

  function wrap(text, font, size, maxW) {
    var words = text.split(/\s+/).filter(Boolean), lines = [], cur = "";
    words.forEach(function (w) {
      var t = cur ? cur + " " + w : w;
      if (font.widthOfTextAtSize(t, size) <= maxW || !cur) cur = t; else { lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);
    return lines.length ? lines : [""];
  }

  function wrapRuns(runs, maxW) {
    var tokens = [];
    runs.forEach(function (r) {
      r.t.split(/(\s+)/).forEach(function (piece) {
        if (piece === "") return;
        tokens.push({ t: piece, f: r.f, size: r.size, w: r.f.widthOfTextAtSize(piece, r.size), sp: /^\s+$/.test(piece) });
      });
    });
    var lines = [[]], width = 0;
    tokens.forEach(function (tk) {
      var line = lines[lines.length - 1];
      if (tk.sp) { if (line.length) { line.push(tk); width += tk.w; } return; }
      if (width + tk.w > maxW && line.length) {
        while (line.length && line[line.length - 1].sp) { width -= line.pop().w; }
        lines.push([tk]); width = tk.w;
      } else { line.push(tk); width += tk.w; }
    });
    return lines.map(function (l) { while (l.length && l[l.length - 1].sp) l.pop(); return l; });
  }
  function lineWidth(l) { return l.reduce(function (a, t) { return a + t.w; }, 0); }

  /**
   * opts: { patientName, address, attendCity, dateText, items:[{use,name,qtyText,instruction,cls,controlled}] }
   * Retorna Promise<{bytes:Uint8Array, pages:number}>
   */
  async function build(opts) {
    var PL = g.PDFLib;
    var doc = await PL.PDFDocument.create({ updateMetadata: false });
    var reg = await doc.embedFont(PL.StandardFonts.TimesRoman);
    var bold = await doc.embedFont(PL.StandardFonts.TimesRomanBold);
    var black = PL.rgb(0, 0, 0), grey = PL.rgb(0.2, 0.2, 0.2), red = PL.rgb(0.75, 0.22, 0.17);
    var W = 148 * MM, H = 210 * MM;                         // A5 retrato
    var ML = 16 * MM, MR = 16 * MM, MT = 14 * MM, MB = 14 * MM;
    var CW = W - ML - MR;
    var name = (opts.patientName || "").trim();
    var addr = (opts.address || "").trim();

    /** Desenha UMA página com os itens dados, no fator de escala s. Retorna { overflow } */
    function drawPage(items, s) {
      var page = doc.addPage([W, H]);
      var y = H - MT;
      function txt(str, x, yy, font, size, color) { page.drawText(safe(font, str), { x: x, y: yy, font: font, size: size, color: color || black }); }
      function drawRuns(line, x, yy) { var cx = x; line.forEach(function (tk) { txt(tk.t, cx, yy, tk.f, tk.size); cx += tk.w; }); }
      function centered(runs, lh) {
        var rr = runs.map(function (r) { return { t: safe(r.f, r.t), f: r.f, size: r.size }; });
        wrapRuns(rr, CW).forEach(function (l) { y -= lh; drawRuns(l, ML + (CW - lineWidth(l)) / 2, y); });
      }
      function dotted(x1, x2, yy) {
        if (x2 - x1 < 4) return;
        page.drawLine({ start: { x: x1, y: yy }, end: { x: x2, y: yy }, thickness: 1, color: grey, dashArray: [0.1, 2.5], lineCap: PL.LineCapStyle.Round });
      }
      var F12 = 12 * s, F11 = 11 * s;

      // Espaço de timbre (28 mm, fixo) com filete
      y -= 28 * MM;
      page.drawLine({ start: { x: ML, y: y }, end: { x: W - MR, y: y }, thickness: 1.5, color: black });
      y -= 9 * MM * s;

      // "Para o paciente [nome]" e "Residente em [endereço]" — centralizados (repetem em toda página)
      centered([{ t: "Para o paciente ", f: reg, size: F12 }, { t: name, f: bold, size: F12 }], 16 * s);
      centered([{ t: "Residente em ", f: reg, size: F12 }, { t: addr || "________________________________", f: reg, size: F12 }], 16 * s);
      y -= 6 * MM * s;

      var first = true;
      [["interno", "USO INTERNO"], ["externo", "USO EXTERNO"]].forEach(function (ub) {
        var list = items.filter(function (i) { return i.use === ub[0]; });
        if (!list.length) return;
        if (!first) y -= 4 * MM * s;
        first = false;
        y -= 14 * s;
        var x = ML, sp = 1.2;
        for (var ch of ub[1]) { txt(ch, x, y, bold, F11); x += bold.widthOfTextAtSize(ch, F11) + sp; }
        page.drawLine({ start: { x: ML, y: y - 1.8 * s }, end: { x: x - sp, y: y - 1.8 * s }, thickness: 0.8, color: black });
        y -= 8 * s;

        list.forEach(function (it) {
          var starW = bold.widthOfTextAtSize("*", F12), nameX = ML + starW + 5;
          var qtyT = safe(bold, it.qtyText), qtyW = bold.widthOfTextAtSize(qtyT, F12);
          var availName = (W - MR) - qtyW - 18 - nameX;                  // reserva ≥ 18 pt para a linha pontilhada
          var nameLines = wrap(safe(bold, it.name), bold, F12, Math.max(availName, 60));
          var instrLines = wrap(safe(reg, it.instruction), reg, F11, (W - MR) - nameX);
          nameLines.forEach(function (nl, i) {
            y -= 15 * s;
            if (i === 0) txt("*", ML, y, bold, F12);
            txt(nl, nameX, y, bold, F12);
            if (i === nameLines.length - 1) {
              var qx = W - MR - qtyW;
              dotted(nameX + bold.widthOfTextAtSize(nl, F12) + 4, qx - 4, y + 2.2 * s);
              txt(qtyT, qx, y, bold, F12);
            }
          });
          y -= 2 * s;
          instrLines.forEach(function (il) { y -= 13.5 * s; txt(il, nameX, y, reg, F11); });
          y -= 14 * s;
        });
      });

      // Aviso de controle especial (somente nas páginas que têm medicamento controlado)
      if (items.some(function (i) { return i.controlled; })) {
        var msg = "Sujeito a controle especial — Receita de Controle Especial obrigatória (RDC Anvisa 222/2023)";
        var F9 = 9 * s, ml = wrap(safe(reg, msg), reg, F9, CW - 16), bh = ml.length * 11 * s + 10 * s;
        y -= 4 * s;
        page.drawRectangle({ x: ML, y: y - bh, width: CW, height: bh, borderColor: red, borderWidth: 1 });
        ml.forEach(function (l, i) {
          var w = reg.widthOfTextAtSize(l, F9);
          txt(l, ML + (CW - w) / 2, y - 11 * s - i * 11 * s + 1, reg, F9, red);
        });
        y -= bh + 6 * s;
      }

      // Data (à direita) e, acima dela, a cidade CENTRALIZADA em relação à data
      y -= 14 * s;
      var dl = safe(reg, opts.dateText), dw = reg.widthOfTextAtSize(dl, F12), dx = W - MR - dw;
      var city = (opts.attendCity || "").trim();
      if (city) {
        var cl = safe(reg, city), cw = reg.widthOfTextAtSize(cl, F12);
        var cx = Math.min(dx + (dw - cw) / 2, W - MR - cw);            // centro da data; nunca passa da margem direita
        y -= 15 * s; txt(cl, cx, y, reg, F12);
      }
      y -= 15 * s; txt(dl, dx, y, reg, F12);

      // Linha de assinatura
      y -= 16 * MM * s;
      var sw = 65 * MM;
      page.drawLine({ start: { x: (W - sw) / 2, y: y }, end: { x: (W + sw) / 2, y: y }, thickness: 1, color: black });

      return { overflow: y < MB - 0.5 };
    }

    /** Garante UMA página: reduz o conteúdo; só se nem no menor tamanho couber, divide os itens em páginas extras. */
    function renderSet(items) {
      for (var i = 0; i < SCALES.length; i++) {
        var r = drawPage(items, SCALES[i]);
        if (!r.overflow) return;
        doc.removePage(doc.getPageCount() - 1);
      }
      if (items.length > 1) {
        var mid = Math.ceil(items.length / 2);
        renderSet(items.slice(0, mid)); renderSet(items.slice(mid));
      } else {
        drawPage(items, SCALES[SCALES.length - 1]);
      }
    }

    // Mais de 3 classes → uma página para cada grupo de até 3 classes
    g.RxLogic.paginate(opts.items, 3).forEach(renderSet);

    doc.setTitle("Receita" + (name ? " - " + safe(reg, name) : ""), { showInWindowTitleBar: true });
    var bytes = await doc.save();
    return { bytes: bytes, pages: doc.getPageCount() };
  }

  g.RxPdf = { build: build };
})(typeof window !== "undefined" ? window : globalThis);
