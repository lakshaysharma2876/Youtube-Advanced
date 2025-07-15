import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSideMenu, toggleSidebarBtn } from "../utils/sidebarSlice";

const Header = () => {

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleSidebarBtn());
  }

  useEffect(() => {
    dispatch(openSideMenu());
  },[])
  
  return (
    <div className="flex flex-wrap shadow-lg bg-white p-2 justify-between">
      <div className="flex items-center">
        <img onClick={() => toggleSidebar()}
        className="w-10 h-10 mr-2"
        src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        alt="Menu"
      />
      <a href="/">
      <img
        alt="Youtube"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        className="w-20 h-15 mr-2"
      /></a>

      </div>
      <div>
        <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-l-2xl p-[6.5px] w-96"
      />
      <button className="cursor-pointer bg-gray-200 p-[7px] rounded-r-2xl ">🔍</button>
      </div>
      <img
        alt="user-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        className="w-10 h-10 col-span-1"
      />
    </div>
  );
};

export default Header;
