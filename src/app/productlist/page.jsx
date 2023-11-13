import Link from "next/link";
import RemoveBtn from "../components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { NextResponse } from 'next/server'
import baseUrl from '@/utils/baseUrl'
const getTopics = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/products`,{
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
      {products && products.map((t) => (
        
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <img className=" w-48 font-bold text-2xl h-40 " src={t.mediaUrl} alt='' />
            <h1 className="font-bold">{t.name}</h1>
            <h1 className="text-lime-600">{t.code}</h1>
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

