import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

 const ProductsList = async() => {
  const { products } =  await getProducts();

  return (
    <>
      {products && products.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <img className="font-bold text-2xl h-40 " src={t.mediaUrl}  />
            <div>{t.name}</div>
          </div>

          <div className="flex gap-2">

            <Link href={`/`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProductsList