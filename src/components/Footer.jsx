import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  mt-40 text-white py-10">
      <div className=" w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Exclusive Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white outline-none px-4 py-2 flex-grow"
            />
            <button className="bg-white text-black px-4 py-2">
              &#10140;
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p className="text-gray-400">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-gray-400">exclusive@gmail.com</p>
          <p className="text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white">My Account</li>
            <li className="text-gray-400 hover:text-white">Login / Register</li>
            <li className="text-gray-400 hover:text-white">Cart</li>
            <li className="text-gray-400 hover:text-white">Wishlist</li>
            <li className="text-gray-400 hover:text-white">Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white">Privacy Policy</li>
            <li className="text-gray-400 hover:text-white">Terms Of Use</li>
            <li className="text-gray-400 hover:text-white">FAQ</li>
            <li className="text-gray-400 hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Download_on_the_App_Store_Badge_US-UK_blk.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-400">
          &copy; Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
