import Link from "next/link";

import baseUrl from '@/utils/baseUrl'
async function getServerSideProps()  {

    const res = await fetch(`${baseUrl}/api/showproduct`,{
      cache: "no-store",
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
    <h1>Products list page</h1>
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
         
           
          </div>
        </div>
      ))}
    </>
  );
};
