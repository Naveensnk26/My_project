import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

function NavBar() {
  return (
    <div>
      <div className="flex justify-between px-6 sm:px-24 items-center pt-14 shadow-lg opacity-80 ">
        <div>
          <h1 className="text-white font-semibold text-lg hover:underline hover:text-orange-600 transition-all">logo</h1>
        </div>
        <div className="hidden sm:flex gap-20">
          <p className="text-white font-semibold text-lg hover:underline hover:text-orange-600 transition-all">Home</p>
          <p className="text-white font-semibold text-lg hover:underline hover:text-orange-600 transition-all">About</p>
          <p className="text-white font-semibold text-lg hover:underline hover:text-orange-600 transition-all">Services</p>
          <p className="text-white font-semibold text-lg hover:underline hover:text-orange-600 transition-all">Data</p>
          <p className="text-white font-semibold text-lg hover:underline hover:text-orange-600 transition-all">Clients</p>
        </div>

        <div className="flex gap-5 text-white font-semibold text-lg">
          <CiSearch />
          <IoIosMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
