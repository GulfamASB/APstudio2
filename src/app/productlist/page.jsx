import Link from "next/link";
import RemoveBtn from "../components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import baseUrl from '@/utils/baseUrl'
async function getServerSideProps()  {

    const res = await fetch(`${baseUrl}/api/showproduct`,{
     
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json();
    
  } 

  export default async function Page() {
    const {products} = await getServerSideProps()
    
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
