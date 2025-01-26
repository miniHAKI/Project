import React from "react";

const BillingDetails = () => {
  return (
    <div className="p-5 md:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
      <div className="left w-full lg:w-2/5">
        <h1 className="text-black text-2xl md:text-4xl font-medium mb-6">Billing Details</h1>
        <div className="space-y-4">
          <div>
            <h3>First Name</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="text"
              required
              placeholder="Your Name"
            />
          </div>
          <div>
            <h3>Company Name</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div>
            <h3>Street Address</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="text"
              required
              placeholder="Street Address"
            />
          </div>
          <div>
            <h3>Apartment, floor, etc. (optional)</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="text"
              placeholder="Apartment, floor, etc."
            />
          </div>
          <div>
            <h3>Town/City</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="text"
              required
              placeholder="Town/City"
            />
          </div>
          <div>
            <h3>Phone Number</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="number"
              required
              placeholder="Phone Number"
            />
          </div>
          <div>
            <h3>Email Address</h3>
            <input
              className="bg-[#F5F5F5] py-2 px-3 rounded-sm w-full mt-2"
              type="email"
              required
              placeholder="Email Address"
            />
          </div>
        </div>
      </div>

      <div className="right w-full lg:w-3/5 bg-gray-50 p-6 md:p-10 rounded-md shadow-md space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 object-cover"
                src="https://imgs.search.brave.com/bqvDenhbi5g6PfQzTg8xs-Fsdq7EejMZ4Ll3f4__0gk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2FtZXBhZC9z/bWFsbC9nYW1lcGFk/X1BORzk3LnBuZw"
                alt="Controller PS5"
              />
              <h4 className="text-sm md:text-base">Controller PS5</h4>
            </div>
            <h4 className="text-sm md:text-base">$300</h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                width={60}
                className="w-16 h-16 object-cover"
                src="https://imgs.search.brave.com/bqvDenhbi5g6PfQzTg8xs-Fsdq7EejMZ4Ll3f4__0gk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2FtZXBhZC9z/bWFsbC9nYW1lcGFk/X1BORzk3LnBuZw"
                alt="Controller PS5"
              />
              <h4 className="text-sm md:text-base">Controller PS5</h4>
            </div>
            <h4 className="text-sm md:text-base">$300</h4>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm md:text-base">
            <p>Subtotal:</p>
            <p>$600</p>
          </div>
          <div className="border-b-2"></div>
          <div className="flex items-center justify-between text-sm md:text-base">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="border-b-2"></div>
          <div className="flex items-center justify-between text-sm md:text-base">
            <p>Total:</p>
            <p>$600</p>
          </div>
        </div>

        <div className="flex flex-start sm:flex-row gap-4 items-center justify-around">
          <div className="flex items-center gap-2">
            <input className="accent-black" type="radio" name="payment" />
            <span>Bank</span>
          </div>
          <div className="flex items-center gap-2">
            <input className="accent-black" type="radio" name="payment" />
            <span>Cash on Delivery</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 rounded-md bg-transparent placeholder:text-gray-500 text-black border-2 border-gray-300 px-3 py-2"
          />
          <button className="bg-[#DB4444] text-white px-4 py-2 rounded-md">
            Apply Coupon
          </button>
        </div>
        <button className="cursor-pointer bg-[#DB4444] text-white w-full md:w-auto mt-4 px-6 py-2 rounded-md">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillingDetails;
