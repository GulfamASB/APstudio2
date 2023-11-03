import Link from "next/link";
import RemoveBtn from "../components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { NextResponse } from 'next/server'
const getTopics = async () => {
  try {
    const NextResponse = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch products");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } =  await getTopics ()|| {}
  return (
    <>
      {products.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <img className="font-bold text-2xl h-40 " src={t.mediaUrl} alt='' />
            <div>{t.name}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

