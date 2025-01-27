import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [IsLogin, setIsLogin] = useState(true)
  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-20 py-4 w-full overflow-hidden">
        <div className="logo">
          <h3 className="text-2xl font-bold">Exclusive</h3>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {["Home", "About", "Contact"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-lg hover:text-gray-500 hover:underline"
              >
                {item}
              </li>
            ))}
              {/* if is login is true the show login in nav */}
              {IsLogin ?<li className="cursor-pointer text-lg hover:text-gray-500 hover:underline">signed in</li>: <li className="cursor-pointer text-lg hover:text-gray-500 hover:underline">Signup</li>}
          </ul>
        </div>

        <div className="right-section flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-sm outline-none w-full"
            />
            <CiSearch className="text-xl cursor-pointer" />
          </div>

          <GrFavorite className="text-xl cursor-pointer hover:text-gray-500" />
          <IoCartOutline className="text-xl cursor-pointer hover:text-gray-500" />
        </div>
      </div>
      <div className="w-full px-4 md:px-20 border-b-2 border-gray-600"></div>
    </>
  );
};

export default Navbar;
