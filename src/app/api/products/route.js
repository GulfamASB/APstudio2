import dbConn from "@/utils/dbConn";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { mediaUrl, name } = await request.json();
  await dbConn();
  await Product.create({ mediaUrl, name });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await dbConn();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConn();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
