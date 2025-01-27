import React from "react";
import { CiLogout, CiSearch, CiStar } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuWalletCards } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [IsLogin, setIsLogin] = useState(false)
  const [isdropdown, setisdropdown] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-20 py-4 w-full overflow-hidden">
        <div className="logo">
          <h3 className="text-2xl font-bold">Exclusive</h3>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {["Home ", "About", "Contact"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-lg hover:text-gray-500 hover:underline"
              >
               <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
            {/* if is login is true the show login in nav */}
            {IsLogin ? <li className="cursor-pointer text-lg hover:text-gray-500 hover:underline">Wel Come User</li> : <li className="cursor-pointer text-lg hover:text-gray-500 hover:underline"><Link to={"/signup"}> Signup</Link></li>}
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
          <CgProfile onClick={()=>{setisdropdown(!isdropdown)}} className="  text-xl cursor-pointer hover:text-gray-500" />
          {isdropdown && <div className=" absolute top-12 right-20 bg-slate-600 bg-opacity-75  text-white z-20 p-4">
            <ul>
              <li className="  px-4 py-1 "> <CgProfile className=" inline" /> Manage My Account</li>
              <li className="  px-4 py-1 "><LuWalletCards className=" inline" /> My Order </li>
              <li className="  px-4 py-1 "> <RxCrossCircled className=" inline" />   My copmetencies</li>
              <li className="  px-4 py-1 "><CiStar className=" inline" />   My Reviews </li>
              <li className="  px-4 py-1 "><CiLogout className=" inline" />        Logout </li>
            </ul>
          </div>
          }
          
        </div>
      </div>
      <div className="w-full px-4 md:px-20 border-b-2 border-gray-600"></div>
    </>
  );
};

export default Navbar;
