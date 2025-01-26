import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaBagShopping, FaSackDollar } from "react-icons/fa6";

const Cards = () => {
  const cards = [
    {
      icon: <IoStorefrontOutline className="text-2xl" />,
      title: "10.5k",
      description: "Sellers active on our site",
    },
    {
      icon: <TbCurrencyDollar className="text-2xl" />,
      title: "33k",
      description: "Monthly product sales",
    },
    {
      icon: <FaBagShopping className="text-2xl" />,
      title: "45.5k",
      description: "Customers active on our site",
    },
    {
      icon: <FaSackDollar className="text-2xl" />,
      title: "25k",
      description: "Annual gross sales on our site",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-28 px-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group w-full sm:w-[48%] lg:w-[23%] border-2 border-gray-400 rounded-md flex flex-col justify-center items-center hover:bg-red-600 cursor-pointer shadow-lg p-4"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C1C0C1] group-hover:bg-[#C1C0C1] mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-[#C1C0C1] group-hover:bg-white group-hover:text-black">
              {card.icon}
            </div>
          </div>
          <h3 className="font-semibold text-xl text-black group-hover:text-white">
            {card.title}
          </h3>
          <p className="tracking-tighter text-black group-hover:text-white">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
