import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div
      style={{ fontFamily: "Playfair Display , serif" }}
      className="bg-white"
    >
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
