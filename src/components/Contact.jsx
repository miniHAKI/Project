import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full mt-48 flex md:flex-row  flex-col  justify-center items-center gap-20 px-4">
      <div className="left-section">
        <div className="flex gap-4 items-center">
          <div className="rounded-full w-10 h-10 bg-[#DB4444] flex items-center justify-center">
            <HiOutlinePhone className="size-5" />
          </div>
          <h4>Call To Us</h4>
        </div>
        <div className="flex flex-col pt-4">
          <p>We are available 24/7, 7 days a week.</p>
          <p className="pt-3">Phone: +784734178559</p>
        </div>

        <div className="divider w-[300px] mt-6 mb-6 border-b-2 border-gray-600"></div>

        <div className="flex gap-4 items-center">
          <div className="rounded-full w-10 h-10 bg-[#DB4444] flex items-center justify-center">
            <MdMailOutline className="size-5" />
          </div>
          <h4>Write To Us</h4>
        </div>
        <div className="flex flex-col pt-4">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className="pt-3">Emails:customer@exclusive.com</p>
          <p className="pt-3">Emails:support@exclusive.com</p>
        </div>
      </div>

      <div className="right-section w-full md:w-1/2">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="pl-4 rounded-sm outline-none w-full"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="pl-4 rounded-sm outline-none w-full"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            type="number"
            className="pl-4 rounded-sm outline-none w-full"
            name="phone"
            placeholder="Your Phone"
            required
          />
        </div>
        <div className="pt-5">
          <textarea
            className="pl-4 rounded-sm outline-none text-black resize-none w-full"
            cols={10}
            rows={10}
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex md:justify-end justify-center">
          <button className="bg-[#DB4444] py-3 mt-4 px-6 rounded-md" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
