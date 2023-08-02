import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
export default function getCategories() {
  const filePath = path.join(process.cwd(), "categories.json");
  const fileContent = fs.readFileSync(filePath, "utf8");

  return JSON.parse(fileContent);
}
