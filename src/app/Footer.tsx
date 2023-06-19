import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold text-lg mb-2">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Products</h2>
          <ul className="space-y-2">
            <li>
              <a href="#">Our Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-400" />

      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
