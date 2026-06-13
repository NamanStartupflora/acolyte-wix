import { readFileSync } from "fs";

const html = readFileSync("scripts/site.html", "utf8");
const matches = [
  ...html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/[^"'\s]+/g),
].map((m) => m[0]);
[...new Set(matches)].forEach((u) => console.log(u));
