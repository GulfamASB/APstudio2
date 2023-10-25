import dbConn from "@/utils/dbConn";
import Product from "../../models/products";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newMediaUrl: mediaUrl } = await request.json();
  await dbConn();
  await Product.findByIdAndUpdate(id, { name, mediaUrl });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConn();
  const topic = await Product.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
