"use client";

import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerData from "./footerData.json"; // Adjust the path as needed
import { motion } from "framer-motion";

const Footer = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(footerData);
  }, []);

  if (!data) return null; // Ensure data is loaded before rendering

  return (
    <footer className="bg-black text-white pt-6 px-6">
      {/* Footer Top Row */}
      <div className="flex flex-col border-b border-gray-600 pb-6 ">
        {/* Logo and Information Section */}
        <div className="flex flex-col md:flex-row  justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center text-center gap-2 p-2">
              <img
                src={data.logo}
                alt="SS Media"
                className="w-10 h-10 md:w-10 md:h-10 object-contain transform transition-transform duration-300 hover:scale-110"
              />
              <span className="text-4xl text-center font-semibold">
                {data.title}
              </span>
            </div>
            <p className="text-sm mt-1">{data.slogan}</p>
            <div className="flex items-center gap-6 mt-4">
              {data.socialLinks.facebook && (
                <a
                  href={data.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              )}
              {data.socialLinks.twitter && (
                <a
                  href={data.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              )}
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              )}
              {data.socialLinks.linkedin && (
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              )}
            </div>
          </div>
          {/* Quick Links */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-base font-semibold">Quick Links</p>
            {data.quickLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.title}`}
                className="block text-sm hover:underline"
              >
                {link.title}
              </a>
            ))}
          </div>
          {/* Contact Information */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-base font-semibold">Contact Us</p>
            <p className="text-sm">{data.address}</p>
            <p className="text-sm">
              <a href={`mailto:${data.email}`} className="hover:underline">
                {data.email}
              </a>
            </p>
            <p className="text-sm">
              <a href={`tel:${data.phone}`} className="hover:underline">
                {data.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-2">
        <div className="flex items-center space-x-4"></div>
        {/* Copyright Information */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SS MEDIA. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="flex items-center mb-6 md:mb-0">
          <motion.a
            href="#"
            className="bg-[#e7b8fa] hover:bg-[#d6a9e6] text-[#525153] p-4 rounded-full transition-colors duration-300 flex items-center justify-center"
            aria-label="Back to Top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 18.75l7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
