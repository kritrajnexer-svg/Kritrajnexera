const { transform } = require("lightningcss");
const { readFileSync, writeFileSync, readdirSync, statSync } = require("fs");
const { join, extname } = require("path");

const dir = join(__dirname, "_site");

function walk(d) {
  const entries = readdirSync(d);
  for (const name of entries) {
    const p = join(d, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (extname(name) === ".css") minifyCSS(p);
    else if (extname(name) === ".html") minifyHTML(p);
  }
}

function minifyCSS(p) {
  const code = readFileSync(p);
  const result = transform({ code, minify: true });
  writeFileSync(p, result.code);
  console.log("  css ", p.replace(dir, ""));
}

function minifyHTML(p) {
  let html = readFileSync(p, "utf8");
  html = html.replace(/\s{2,}/g, " ").replace(/>\s+</g, "><").replace(/\s+\/?>/g, ">");
  writeFileSync(p, html);
  console.log("  html", p.replace(dir, ""));
}

walk(dir);
console.log("Done.");
