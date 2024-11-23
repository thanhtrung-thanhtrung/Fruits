import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/products";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setsearch, showsearch, setshowsearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("store")) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }, [location]);
  return showsearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm "
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.icons8_search} alt="" />
      </div>
      <img
        onClick={() => setshowsearch(false)}
        className="inline w-3 cursor-pointer "
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;