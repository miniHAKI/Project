import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
    <div className="text-white pt-10 flex justify-around items-center">
      <div className="Logo">
        <h3 className="">Exclusive</h3>
      </div>
      <div className="NavBar flex">
        <ul className="flex gap-10">
          {["Home", "About", "Contact"].map((item, index) => {
            return <li className="">{item}</li>;
          })}
        </ul>
      </div>
      <div className="SearchBar flex items-center gap-5 bg-[#F5F5F5] text-black px-5 py-1">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-transparent leading-3 tracking-tight outline-none"
          />
        <CiSearch className="size-5" />
      </div>
      
    </div>
      <div className="w-full px-20 border-b-[2px] border-gray-600 pb-4"></div>
      </>
  );
};

export default Navbar;
