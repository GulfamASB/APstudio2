 const getList = async () => {
    const product = await fetch("http://localhost:3000/api/showproduct", {
      cache: "force-cache",
    });
    const data = await product.json();
    return data.products;
  };


const AdminPage = async () =>{
  const products = await getList();
  return(
    <div>
    {products.map((products) => (
        <div
          key={products._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <img className="font-bold text-2xl h-40 " src={products.mediaUrl} alt='' />
            <div>{products.name}</div>
          </div>

         
        </div>
      ))}
       
      </div>
  );
};export default AdminPage;

