import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AppButtons from "./AppButtons";
const Sidebar = () => {
  return (
    <section className="bg-dark basis-[10rem] md:basis-[36rem] p-4 md:p-10">
      <Link to="/" className="flex justify-center mb-4 md:mb-10">
        <img src={logo} alt="" className="h-14" />
      </Link>
      <AppButtons />
      <Outlet />
    </section>
  );
};

export default Sidebar;
