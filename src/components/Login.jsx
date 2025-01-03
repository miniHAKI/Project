import React from "react";
import cover from "../assets/cover.avif";

const Signup = () => {
  return (
    <div className="w-full text-white">
      <div className="w-full pt-16 flex justify-between">
        <div className="cover w-[60%]">
          <img src={cover} width={800} alt="" />
        </div>
        <div className="signup w-[40%] flex flex-col items-start justify-center">
          <h2 className="">Log in to Exclusive</h2>
          <h4 className="pt-4">Enter your details below</h4>
          <div className="flex flex-col mt-10 gap-10">
            <input
              className="w-96 bg-transparent border-b-2 border-gray-500"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />
            <input
              className="w-96 bg-transparent border-b-2 border-gray-500"
              type="password"
              placeholder="Password"
              name=""
              id=""
            />

            <div className="flex items-center justify-around text-center gap-4">
              <button type="submit" className="bg-[#DB4444] px-8 rounded-md py-3">
                <span>Log In</span>
              </button>
              <p className="text-[#DB4444]"><a href="">Forget Passowrd?</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
