import axios from "axios";
import { useEffect, useState } from "react";
import DeleteProduct from "./DeleteProduct";
// import UpdateProduct from "./UpdateProduct";

const Products = () => {

  const url = "http://localhost:3000/Products";
  const [products, setProducts] = useState([]);

  // Function to get api url
  const getProducts = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setProducts(response.data);
    } catch (err) {
      console.log("Products Api Failed!!!!!");
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();   //handling the getproducts function rendering.
  }, []);


  useEffect(() => {
    console.log("Updated Products Data", products);
  }, [products]);


  // FUNCTION TO HANDLE DELETE OPERATIONS

  const handleDelete=(id)=>{
    setProducts(products.filter((item)=>item.id !==id));
  };

  return (
    <>
      {/* <h1>Products</h1> */}
      <div className="container mt-4 d-flex flex-column justify-content-center align-items-center" >
        <h2 className=" text-center text-decoration-underline text-primary border border-primary rounded-3 px-5 py-4">Products</h2>

        {/* <UpdateProduct/> */}
        <div className="row p-4">
        {products.map((item) => (
          <div className="col-lg-4 col-md-4 mb-4 p-md-4" key={item.id}>
            <div className="card shadow-sm border-3">
              <div className="card-body text-center">
                <h5 className="card-title text-secondary">
                  Title:{item.title}
                </h5>

                <p className="card-text">
                  <strong>Category:{item.Category}</strong>
                </p>

                <p className="card-text">
                  <strong>Price:{item.Price}</strong>
                </p>

                <p className="card-text">
                  <strong>Stock:{item.Stock}</strong>
                </p>

                <button className="btn btn-sm btn-outline-success m-2">
                  View product
                </button>

                {/* DELETE PRODUCTS COMPONENT */}
                <DeleteProduct productId={item.id} onDelete={handleDelete}/>
              </div>
                
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Products;
