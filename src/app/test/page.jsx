import Link from "next/link";
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
    <div style={{marginBottom:'-14rem'}} className="bg-[#fee2e2] py-24 mx-auto max-w-2xl px-4  py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h1 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 text-black py-2"> Gallery </h1>
    <p className="text-1xl mb-9 tracking-tight  text-center text-gray-900"> A Plus Studio has completed some project. you can see in our gallery section. thank you from A Plus Studio. </p>
  </div>
    <div style={{marginBottom:'-6rem'}} className="py-24 w-screen bg-[#fee2e2] flex items-center justify-center flex-wrap">
      {products && products.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between  items-start"
        >
          <div>
            <img className="h-96 w-full rounded-xl bg-white p-10 shadow-md " src={t.mediaUrl} alt='' />
          </div>


        </div>
      ))}
    </div>
    </>
  );
};

