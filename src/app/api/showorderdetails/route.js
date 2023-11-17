import dbConn from "@/utils/dbConn";
import Formdetails from "@/models/formdetails";
import { NextResponse } from "next/server"; 


export async function GET() {
  await dbConn();
  const Formdetail = await Formdetails.find();
  return NextResponse.json({ Formdetail });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConn();
  await Formdetails.findByIdAndDelete(id);
  return NextResponse.json({ message: "Formdetails deleted" }, { status: 200 });
}
