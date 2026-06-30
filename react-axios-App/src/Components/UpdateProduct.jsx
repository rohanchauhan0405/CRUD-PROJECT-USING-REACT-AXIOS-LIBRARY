import { useState } from "react";
import axios from "axios";

const UpdateProduct = ({ onUpdate }) => {
  const [productId, setProductId] = useState("");

  const [products, setProducts] = useState({    // initally form state is empty
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

  // Load product
  const getProduct = async () => {
    if (!productId) {
      alert("Please enter Product ID");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/Products/${productId}`
      );

      setProducts({
        title: response.data.title,
        Category: response.data.Category,
        Price: response.data.Price,
        Stock: response.data.Stock,
      });
    } catch (err) {
      console.log(err);
      alert("Product not found!!");
    }
  };

  // Update product
  const updateProduct = async (e) => {
    e.preventDefault();

    if (!productId) {
      alert("Please enter Product ID");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/Products/${productId}`,
        products
      );

      if (response.status === 200 && response.data) {
        console.log("Updated", response.data);

        alert("Product Updated Successfully!!");

        // update UI instantly
        if (onUpdate) {
          onUpdate(response.data);
        }

        setProductId("");

        setProducts({
          title: "",
          Category: "",
          Price: "",
          Stock: "",
        });
      } else {
        alert("Update failed!");
      }
    } catch (err) {
      console.log(err);
      alert("Update Failed!!");
    }
  };

  return (
    <div className="container w-25">
      <h2 className="text-center mb-4">Update Product</h2>

      <form
        onSubmit={updateProduct}
        className="form-control text-center bg-dark p-4"
      >
        {/* Product ID */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Product ID"
            className="form-control"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>

        {/* Load Button */}
        <button
          type="button"
          onClick={getProduct}
          className="btn btn-primary mb-3"
        >
          Load Product
        </button>

        {/* Title */}
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="form-control"
            value={products.title}
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <input
            type="text"
            name="Category"
            placeholder="Enter category"
            className="form-control"
            value={products.Category}
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <input
            type="text"
            name="Price"
            placeholder="Enter price"
            className="form-control"
            value={products.Price}
            onChange={handleChange}
          />
        </div>

        {/* Stock */}
        <div className="mb-3">
          <input
            type="text"
            name="Stock"
            placeholder="Enter stock"
            className="form-control"
            value={products.Stock}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-warning">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;