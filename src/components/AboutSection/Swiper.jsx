import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Only import Pagination
import "swiper/css";
import "swiper/css/pagination";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const CardSwiper = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "UI/UX Designer",
      image: "https://imgs.search.brave.com/VPavFP4b2jxF-hcKMBnpBJPRRSJpw8WqL6I-ccMv2nE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzgwNDU3OC9waG90/by9vbmUtYnVzaW5l/c3N3b21hbi1oZWFk/c2hvdC1zbWlsaW5n/LWF0LXRoZS1jYW1l/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVxUjJMZmZw/NHRrSVl6cHFZaDhh/WUlQUnItZ21abGlS/SFJ4Y1FDNXl5bFk9",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Bob Smith",
      role: "Frontend Developer",
      image: "https://imgs.search.brave.com/VPavFP4b2jxF-hcKMBnpBJPRRSJpw8WqL6I-ccMv2nE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzgwNDU3OC9waG90/by9vbmUtYnVzaW5l/c3N3b21hbi1oZWFk/c2hvdC1zbWlsaW5n/LWF0LXRoZS1jYW1l/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVxUjJMZmZw/NHRrSVl6cHFZaDhh/WUlQUnItZ21abGlS/SFJ4Y1FDNXl5bFk9",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Catherine Lee",
      role: "Backend Developer",
      image: "https://imgs.search.brave.com/VPavFP4b2jxF-hcKMBnpBJPRRSJpw8WqL6I-ccMv2nE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzgwNDU3OC9waG90/by9vbmUtYnVzaW5l/c3N3b21hbi1oZWFk/c2hvdC1zbWlsaW5n/LWF0LXRoZS1jYW1l/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVxUjJMZmZw/NHRrSVl6cHFZaDhh/WUlQUnItZ21abGlS/SFJ4Y1FDNXl5bFk9",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "David Miller",
      role: "Project Manager",
      image: "https://imgs.search.brave.com/VPavFP4b2jxF-hcKMBnpBJPRRSJpw8WqL6I-ccMv2nE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzgwNDU3OC9waG90/by9vbmUtYnVzaW5l/c3N3b21hbi1oZWFk/c2hvdC1zbWlsaW5n/LWF0LXRoZS1jYW1l/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVxUjJMZmZw/NHRrSVl6cHFZaDhh/WUlQUnItZ21abGlS/SFJ4Y1FDNXl5bFk9",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-32 relative">
      <Swiper
        slidesPerView={3} // Show 3 cards at a time
        spaceBetween={30} // Spacing between cards
        pagination={{ clickable: true }} // Enable pagination dots
        loop={true}
        modules={[Pagination]} // Use only Pagination module
        className="mySwiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg text-black font-bold">{member.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{member.role}</p>
                <div className="flex justify-center mt-3 gap-4 text-gray-600">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl hover:text-pink-500" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-xl hover:text-blue-500" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl hover:text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Move pagination dots outside Swiper */}
      <div className="swiper-pagination absolute bottom-[-40px] left-1/2 mt-4 transform -translate-x-1/2 z-10" />
    </div>
  );
};

export default CardSwiper;
