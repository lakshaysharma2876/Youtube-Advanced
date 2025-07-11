import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isOpen = useSelector((store) => store.sidebar.isopen);

    //early return if sidebar is closed
    if(!isOpen) return null;

    return (
    <div className= "shadow-lg w-56">
      <ul className="font-bold text-xl p-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <hr className="w-auto"></hr>

      <h1 className= "font-bold text-3xl p-2">You</h1>
      <ul className="font-normal text-xl p-4">
        <li>History</li>
        <li>Your Videos</li>
        <li>Playlists</li>
        <li>Your Courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>

      <hr className="w-auto"></hr>

      <h1 className= "font-bold text-3xl p-2">Subscriptions</h1>
      <ul className="font-normal text-xl p-4">
        <li>TenZ</li>
        <li>Sidemen Reacts</li>
        <li>MrBeast</li>
        <li>Mark Rober</li>
        <li>CodeWithHarry</li>
        <li>CodeWithMosh</li>
      </ul>
    </div>
  );
};

export default Sidebar;
