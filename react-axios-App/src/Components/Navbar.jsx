import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container w-100 border  fw-bolder   d-flex justify-content-between">
        <h1 className="p-4">Hello NavBar</h1>

        <ul className="nav m-2 gap-3" >
            <div></div>
          <Link className="text-decoration-none p-4" to="/">Products</Link>

          <Link className="text-decoration-none p-4" to="/AddProducts">AddProducts</Link>

          <Link className="text-decoration-none p-4" to="/UpdateProducts">UpdateProduct</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;