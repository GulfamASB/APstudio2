export const getProduct = async () => {
    const product = await fetch("http://localhost:3000/api/products", {
      cache: "force-cache",
    });
    const data = await product.json();
    return data.products;
  };


const AdminPage = async () =>{
  const products = await getProduct();
  return(
    <div>
      <h1>Product List Page</h1>
      {products.map((products)=>(
        <div key={products.id}>
          <h1>{products.name}</h1>
        </div>
      ))}
      </div>
  );
};

//export const getServerSideProps = async () =>{
//  const data = await fetch("http://localhost:300/api/products")
 // const product = await data.json();
  //const  products = product.products;
  //return {props:{products}};
//};

export default AdminPage;