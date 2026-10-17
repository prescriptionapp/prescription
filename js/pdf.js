/* Gerador do PDF da receita (A5) com pdf-lib.
   O PDF é desenhado diretamente — não passa pela janela de impressão do navegador —,
   por isso não existe cabeçalho/rodapé com URL do site, número de página, data ou hora. */
(function (g) {
  "use strict";
  var MM = 72 / 25.4;

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

  /** Quebra um texto simples em linhas que cabem em maxW */
  function wrap(text, font, size, maxW) {
    var words = text.split(/\s+/).filter(Boolean), lines = [], cur = "";
    words.forEach(function (w) {
      var t = cur ? cur + " " + w : w;
      if (font.widthOfTextAtSize(t, size) <= maxW || !cur) cur = t; else { lines.push(cur); cur = w; }
    });
    if (cur) lines.push(cur);
    return lines.length ? lines : [""];
  }

  /** Quebra "runs" (trechos com fontes diferentes) em linhas */
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
        while (line.length && line[line.length - 1].sp) line.pop();
        lines.push([tk]); width = tk.w;
      } else { line.push(tk); width += tk.w; }
    });
    return lines.map(function (l) { while (l.length && l[l.length - 1].sp) l.pop(); return l; });
  }
  function lineWidth(l) { return l.reduce(function (a, t) { return a + t.w; }, 0); }

  /**
   * opts: { patientName, address, attendCity, dateText, items:[{use,name,qtyText,instruction}], controlled }
   * Retorna Promise<Uint8Array>
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

    var page = doc.addPage([W, H]);
    var y = H - MT;
    function newPage() { page = doc.addPage([W, H]); y = H - MT; }
    function ensure(h) { if (y - h < MB) newPage(); }
    function txt(s, x, yy, font, size, color) { page.drawText(safe(font, s), { x: x, y: yy, font: font, size: size, color: color || black }); }

    function drawRuns(line, x, yy) {
      var cx = x;
      line.forEach(function (tk) { txt(tk.t, cx, yy, tk.f, tk.size); cx += tk.w; });
    }
    function centered(runs, lh) {
      var rr = runs.map(function (r) { return { t: safe(r.f, r.t), f: r.f, size: r.size }; });
      wrapRuns(rr, CW).forEach(function (l) {
        ensure(lh); y -= lh;
        drawRuns(l, ML + (CW - lineWidth(l)) / 2, y);
      });
    }
    function dotted(x1, x2, yy) {
      if (x2 - x1 < 4) return;
      page.drawLine({ start: { x: x1, y: yy }, end: { x: x2, y: yy }, thickness: 1, color: grey, dashArray: [0.1, 2.5], lineCap: PL.LineCapStyle.Round });
    }

    // ── Espaço de timbre (28 mm) com filete, como no modelo original ──
    y -= 28 * MM;
    page.drawLine({ start: { x: ML, y: y }, end: { x: W - MR, y: y }, thickness: 1.5, color: black });
    y -= 9 * MM;

    // ── 1ª linha: "Para o paciente [nome]" (centralizado) ──
    var name = (opts.patientName || "").trim();
    centered([{ t: "Para o paciente ", f: reg, size: 12 }, { t: name, f: bold, size: 12 }], 16);
    // ── 2ª linha: "Residente em [endereço]" (centralizado) ──
    var addr = (opts.address || "").trim();
    centered([{ t: "Residente em ", f: reg, size: 12 }, { t: addr || "________________________________", f: reg, size: 12 }], 16);
    y -= 6 * MM;

    // ── Itens ──
    var useBlocks = [["interno", "USO INTERNO"], ["externo", "USO EXTERNO"]];
    var first = true;
    useBlocks.forEach(function (ub) {
      var list = opts.items.filter(function (i) { return i.use === ub[0]; });
      if (!list.length) return;
      if (!first) y -= 4 * MM;
      first = false;
      ensure(14 + 40);
      y -= 14;
      // título alinhado à esquerda, negrito, sublinhado, com espaçamento entre letras
      var x = ML, sp = 1.2;
      for (var ch of ub[1]) { txt(ch, x, y, bold, 11); x += bold.widthOfTextAtSize(ch, 11) + sp; }
      page.drawLine({ start: { x: ML, y: y - 1.8 }, end: { x: x - sp, y: y - 1.8 }, thickness: 0.8, color: black });
      y -= 8;

      list.forEach(function (it) {
        var starW = bold.widthOfTextAtSize("*", 12), nameX = ML + starW + 5;
        var qtyT = safe(bold, it.qtyText), qtyW = bold.widthOfTextAtSize(qtyT, 12);
        var availName = (W - MR) - qtyW - 18 - nameX;                   // reserva ≥ 18 pt para a linha pontilhada
        var nameLines = wrap(safe(bold, it.name), bold, 12, Math.max(availName, 60));
        var instrLines = wrap(safe(reg, it.instruction), reg, 11, (W - MR) - nameX);
        var h = nameLines.length * 15 + instrLines.length * 13.5 + 14 + 4;
        ensure(h);
        nameLines.forEach(function (nl, i) {
          y -= 15;
          if (i === 0) txt("*", ML, y, bold, 12);
          txt(nl, nameX, y, bold, 12);
          if (i === nameLines.length - 1) {
            var qx = W - MR - qtyW;
            // linha pontilhada preenche o espaço entre o nome e a quantidade, sem empurrá-la para a linha de baixo
            dotted(nameX + bold.widthOfTextAtSize(nl, 12) + 4, qx - 4, y + 2.2);
            txt(qtyT, qx, y, bold, 12);
          }
        });
        y -= 2;
        instrLines.forEach(function (il) { y -= 13.5; txt(il, nameX, y, reg, 11); });
        y -= 14;
      });
    });

    // ── Aviso de receita de controle especial ──
    if (opts.controlled) {
      var msg = "Sujeito a controle especial — Receita de Controle Especial obrigatória (RDC Anvisa 222/2023)";
      var ml = wrap(safe(reg, msg), reg, 9, CW - 16);
      var bh = ml.length * 11 + 10;
      ensure(bh + 6); y -= 4;
      page.drawRectangle({ x: ML, y: y - bh, width: CW, height: bh, borderColor: red, borderWidth: 1 });
      ml.forEach(function (l, i) {
        var w = reg.widthOfTextAtSize(l, 9);
        txt(l, ML + (CW - w) / 2, y - 11 - i * 11 + 1, reg, 9, red);
      });
      y -= bh + 6;
    }

    // ── Cidade do atendimento (à direita) e data logo abaixo ──
    ensure(14 + 15 + 15 + 60);
    y -= 14;
    var city = (opts.attendCity || "").trim();
    if (city) {
      var cl = safe(reg, city), cw = reg.widthOfTextAtSize(cl, 12);
      y -= 15; txt(cl, W - MR - cw, y, reg, 12);
    }
    var dl = safe(reg, opts.dateText), dw = reg.widthOfTextAtSize(dl, 12);
    y -= 15; txt(dl, W - MR - dw, y, reg, 12);

    // ── Linha de assinatura ──
    y -= 16 * MM;
    var sw = 65 * MM;
    page.drawLine({ start: { x: (W - sw) / 2, y: y }, end: { x: (W + sw) / 2, y: y }, thickness: 1, color: black });

    doc.setTitle("Receita" + (name ? " - " + safe(reg, name) : ""), { showInWindowTitleBar: true });
    return doc.save();
  }

  g.RxPdf = { build: build };
})(typeof window !== "undefined" ? window : globalThis);
