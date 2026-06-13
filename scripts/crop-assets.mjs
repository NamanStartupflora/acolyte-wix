import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src =
  "C:/Users/admin/.cursor/projects/d-acolyte-wix/assets/c__Users_admin_AppData_Roaming_Cursor_User_workspaceStorage_6f0ab6693275f79fe855b21e2bc8fea5_images_wix-page-70bfeff8-8ae9-4907-8878-5d58c1ef297a.png";
const outDir = path.join(root, "public", "images");

await mkdir(outDir, { recursive: true });

const meta = await sharp(src).metadata();
const W = meta.width ?? 501;
const H = meta.height ?? 1024;
console.log("Source dimensions:", W, "x", H);

const crops = [
  { name: "hero-graphic.png", left: 155, top: 95, width: 340, height: 300 },
  { name: "vision-graphic.png", left: 8, top: 355, width: 245, height: 210 },
  { name: "mission-graphic.png", left: 175, top: 565, width: 320, height: 210 },
  { name: "logo.png", left: 18, top: 10, width: 195, height: 48 },
  { name: "projectvala-logo.png", left: 18, top: 798, width: 210, height: 42 },
  { name: "zestur-logo.png", left: 18, top: 868, width: 130, height: 38 },
  { name: "startupflora-logo.png", left: 18, top: 928, width: 220, height: 42 },
  { name: "footer-logo.png", left: 18, top: 978, width: 220, height: 38 },
];

for (const crop of crops) {
  const dest = path.join(outDir, crop.name);
  await sharp(src)
    .extract({
      left: crop.left,
      top: crop.top,
      width: Math.min(crop.width, W - crop.left),
      height: Math.min(crop.height, H - crop.top),
    })
    .png()
    .toFile(dest);
  console.log("Created", crop.name);
}
