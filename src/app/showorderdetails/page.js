import Link from "next/link";
import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'
const getProducts = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/formdetails`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch formdetails");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading formdetails: ", error);
  }
};

export default async function ProductsList() {
  const { formdetails } =  await getProducts ()|| {}
  return (
    <>
    <div style={{marginBottom:'-14rem'}} className="bg-gradient-to-r from-violet-100 to-pink-100  py-24 mx-auto    ">
    <h1 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 text-black py-2"> Message Details </h1>
    <p className="text-1xl mb-9 tracking-tight text-center text-gray-900 "> A Plus Studio makes deffrent type of Doors and Wall Cladding. You can see and if you want to order then Order now from A Plus Studio. </p>
  
  </div>
    <div style={{marginBottom:'-6rem'}} className="py-24 w-screen bg-gradient-to-r from-violet-100 to-pink-100  flex items-center justify-center flex-wrap">
      {formdetails && formdetails.map((formdetails) => (
        <div
          key={formdetails._id}
          className="p-4   flex justify-between  items-start"
        >
          <div>
          <Link href={`/formdetails/${formdetails._id}`}>
          <h1 className="mt-1 text-lg font-medium text-gray-900">{formdetails.username}</h1>
            </Link>
              
          <h3 className="mt-1 text-lg font-medium text-gray-900">{formdetails.email}</h3>
        <p className="mt-0 text-sm font-medium text-gray-900">Code: {formdetails.email}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};





