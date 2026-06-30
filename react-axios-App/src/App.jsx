import "./App.css";
import Products from "./Components/Products";
import AddProducts from "./Components/AddProducts";
import UpdateProduct from "./Components/UpdateProduct";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Products/>}/>
        <Route path="AddProducts" element={<AddProducts/>}/>
        <Route path="UpdateProducts" element={<UpdateProduct/>}/>
    
        </Route>
      </Routes>
      
      
    </>
  );
}

export default App;
