import { readFileSync, writeFileSync } from "fs";

const files = [
  "app/foundations/page.js",
  "app/project-management/page.js",
  "app/product-management/page.js",
  "app/outsourcing/page.js",
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&mdash;|&ndash;|&amp;|&rsquo;|&rdquo;|&ldquo;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const result = {};

for (const file of files) {
  const src = readFileSync(file, "utf8");
  // Match <h2>\n  <text...> <Tag .../>\n  </h2>  OR  <h2>Plain text</h2>
  const h2Regex = /<h2>\s*([\s\S]*?)<\/h2>/g;
  let match;
  const slugs = [];
  const newSrc = src.replace(h2Regex, (full, inner) => {
    // Extract plain text before any <Tag or JSX expression starts
    let text = inner.split(/<Tag/)[0].split("{")[0];
    text = text.replace(/\s+/g, " ").trim();
    let slug = slugify(text);
    let unique = slug;
    let i = 2;
    while (slugs.includes(unique)) {
      unique = `${slug}-${i++}`;
    }
    slugs.push(unique);
    return `<h2 id="${unique}">${inner}</h2>`;
  });
  writeFileSync(file, newSrc, "utf8");
  result[file] = slugs;
}

console.log(JSON.stringify(result, null, 2));
