import fs from "fs";
import path, { join } from "path";
export default function getProducts() {
  const filePath = path.join(process.cwd(), "products.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}
