import React from "react";
import { FaTruckFast, FaHeadphones } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";

const AboutBar = () => {
  return (
    <div className="flex flex-wrap mt-28 items-center justify-around gap-5">
      <div className="border-gray-400 h-48 rounded-md flex flex-col justify-center items-center w-full sm:w-[30%]">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#C1C0C1]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-[#C1C0C1]">
            <FaTruckFast className="text-2xl" />
          </div>
        </div>
        <h3 className="font-semibold text-xl text-black">
          FREE AND FAST DELIVERY
        </h3>
        <p className="tracking-tighter text-black">
          Free delivery for all orders over $140
        </p>
      </div>

      <div className="border-gray-400 h-48 rounded-md flex flex-col justify-center items-center w-full sm:w-[30%]">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#C1C0C1]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-[#C1C0C1]">
            <FaHeadphones className="text-2xl" />
          </div>
        </div>
        <h3 className="font-semibold text-xl text-black">
          24/7 CUSTOMER SERVICE
        </h3>
        <p className="tracking-tighter text-black">
          Friendly 24/7 customer support
        </p>
      </div>

      <div className="border-gray-400 h-48 rounded-md flex flex-col justify-center items-center w-full sm:w-[30%]">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#C1C0C1]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-[#C1C0C1]">
            <MdOutlineVerifiedUser className="text-2xl" />
          </div>
        </div>
        <h3 className="font-semibold text-xl text-black">
          MONEY BACK GUARANTEE
        </h3>
        <p className="tracking-tighter text-black">
          We return money within 30days
        </p>
      </div>
    </div>
  );
};

export default AboutBar;
