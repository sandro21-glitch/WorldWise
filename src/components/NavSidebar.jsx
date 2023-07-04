import { Link } from "react-router-dom";
const NavSidebar = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-[200%]"
      } w-full min-h-[10rem] bg-white absolute left-0 top-10 py-6 rounded-b-xl transition-all ease-in duration-150`}
    >
      <ul className="gap-10 flex flex-col items-center justify-center text-black">
        <li className="text-black font-semibold">
          <Link to="/pricing">PRICING</Link>
        </li>
        <li className="text-black font-semibold">
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link className="px-4 py-2 rounded-lg font-semibold bg-greenBtn uppercase">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSidebar;
