import Link from "next/link";
import RemoveBtn from "../components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch products from external API
  const res = await fetch(`http://localhost:3000/api/showproduct`)
  const products = await res.json()
 
  // Pass products to the page via props
  return { props: { products } }
}
const Products = ({ products }) =>{  
  return (
    <>
    <div className="py-24 font-extrabold ">
      <h1>Products List page</h1>
    </div>
      {products && products.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <img className=" font-bold text-2xl h-40 " src={t.mediaUrl} alt='' />
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
export default Products