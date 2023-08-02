import fs from "fs";
import path, { join } from "path";
export default function getMilkProducts() {
  const filePath = join(process.cwd(), "categories.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}
