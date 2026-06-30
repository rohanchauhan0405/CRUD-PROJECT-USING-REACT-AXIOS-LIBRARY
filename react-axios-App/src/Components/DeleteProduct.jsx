import axios from "axios";
const DeleteProduct = ({ productId, onDelete }) => {
  const url = "http://localhost:3000/Products";

  const deleteProduct = async () => {
    try {
      await axios.delete(`${url}/${productId}`);
      alert("Product Has Been Deleted Successfully !!");
      onDelete(productId);
    } catch (err) {
      console.log("API Failed !!!!");
    }
  };
  return (
    <>
      <button className="btn btn-sm btn-danger" onClick={deleteProduct}>
        Delete Product
      </button>
    </>
  );
};

export default DeleteProduct;
