import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
  return (
    <div
      style={{ fontFamily: "Playfair Display , serif" }}
      className="bg-white"
    >
      <Nav></Nav>
      <Outlet />
    </div>
  );
};

export default Root;
