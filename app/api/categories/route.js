import React from "react";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
function getCategories() {
  const filePath = path.join(process.cwd(), "categories.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function GET(request) {
  const categories = await getCategories();
  return NextResponse.json(categories);
}
