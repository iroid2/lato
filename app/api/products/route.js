import React from "react";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
function getProducts() {
  const filePath = path.join(process.cwd(), "products.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function GET(request) {
  const products = await getProducts();
  return NextResponse.json(products);
}
