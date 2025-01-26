import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (value <= 0) {
      setQuantity(1);
    }
  };

  return (
    <div className="p-5 sm:p-10 lg:p-20">

      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 items-center px-5 sm:px-10 rounded-sm shadow-sm p-3 bg-gray-100">
        <h3 className="text-left text-sm sm:text-base font-medium">Product</h3>
        <h3 className="text-center text-sm sm:text-base font-medium">Price</h3>
        <h3 className="hidden lg:block text-center text-sm sm:text-base font-medium">
          Quantity
        </h3>
        <h3 className="hidden lg:block text-right text-sm sm:text-base font-medium">
          Subtotal
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 px-5 sm:px-10 rounded-sm shadow-sm p-3 mt-8 bg-gray-50">
        {/* Product Info */}
        <div className="flex items-center gap-3 col-span-1 sm:col-span-1">
          <img
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
            src="https://imgs.search.brave.com/bqvDenhbi5g6PfQzTg8xs-Fsdq7EejMZ4Ll3f4__0gk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2FtZXBhZC9z/bWFsbC9nYW1lcGFk/X1BORzk3LnBuZw"
            alt="Controller"
          />
          <p className="text-sm sm:text-base font-medium">Controller</p>
        </div>

        {/* Price */}
        <p className="text-right sm:text-center text-sm sm:text-base font-medium">
          $650
        </p>

        {/* Quantity (Hidden on Mobile) */}
        <div className="hidden lg:block text-center">
          <input
            type="number"
            value={quantity}
            onChange={handleChange}
            className="w-16 text-center border border-gray-300 rounded-md"
          />
        </div>

        {/* Subtotal (Hidden on Mobile) */}
        <p className="hidden lg:block text-right text-sm sm:text-base font-medium">
          ${650 * quantity}
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          to={"/error"}
          className="border px-4 py-2 sm:px-5 sm:py-3 border-gray-400 rounded-md text-sm sm:text-base"
        >
          Return To Shop
        </Link>
        <button className="px-4 py-2 sm:px-5 sm:py-3 border-gray-400 rounded-md border text-sm sm:text-base">
          Update Cart
        </button>
      </div>

      <div className="mt-8 border-2 rounded border-black w-full sm:w-2/3 lg:w-1/3">
        <div className="p-4">
          <h2 className="font-semibold text-lg">Cart Total</h2>
          <div className="flex justify-between items-center pt-3">
            <p>Subtotal:</p>
            <p>$1800</p>
          </div>
          <div className="pt-2 border-b-2 border-gray-300"></div>
          <div className="flex justify-between items-center pt-3">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="pt-2 border-b-2 border-gray-300"></div>
          <div className="flex justify-between items-center pt-3 pb-3">
            <p>Total:</p>
            <p>$1300</p>
          </div>
          <span className="flex justify-center items-center">
            <Link
              to={"/billing"}
              className="bg-[#DB4444] text-white px-4 py-2 rounded-md text-sm sm:text-base"
            >
              Proceed to checkout
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
