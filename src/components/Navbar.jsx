import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const { setshowsearch } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-10" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px bg-gray-700" />
        </NavLink>
        <NavLink to="/store" className="flex flex-col items-center gap-1">
          <p>STORE</p>
          <hr className="w-2/4 border-none h-[1.5px bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <Link to="/store">
        <img
          onClick={() => setshowsearch(true)}
          src={assets.icons8_search}
          className="w-5 cursor-pointer"
          alt=""
        />
        </Link>

        <div className="group relative">
          <img className="w-5 cursor-pointer" src={assets.icons8_user} alt="" />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.icons8_buy} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            10
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <p>BACK</p>
          </div>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border hover:bg-black hover:text-white"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border hover:bg-black hover:text-white "
            to="/store"
          >
            STORE
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border hover:bg-black hover:text-white"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border hover:bg-black hover:text-white"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
