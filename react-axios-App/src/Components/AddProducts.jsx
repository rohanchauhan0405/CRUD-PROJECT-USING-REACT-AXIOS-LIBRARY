import axios from "axios";
import { useState } from "react";

const AddProducts = () => {
  const url = "http://localhost:3000/Products";

  //initially the form data is empty
  const [products, setProducts] = useState({
    title: "",
    Category: "",
    Price: "",
    Stock: "",
  });

  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const addnewProducts = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, products); //post is used to add new products  data into products_db.json
      console.log("products", response.data);

      alert("Products Added Successfully !!");
      setProducts({                    // form data is empty after submission
        title: "",
        Category: "",
        Price: "",
        Stock: "",
      });
    } 
    catch (err) {
      console.log("Api Failed");
      console.log(err);
    }
  };

  return (
    <>
      <div className="container w-25">
        <h2 className="text-center mb-4">Add Product</h2>

        <form
          action=""
          onSubmit={addnewProducts}
          className="form-control text-center bg-dark p-4"
        >
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              value={products.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Category"
              name="Category"
              value={products.Category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Enter Price"
              name="Price"
              value={products.Price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Enter Stock"
              name="Stock"
              value={products.Stock}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success d-flex mx-auto mb-2">
            Add Products
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
