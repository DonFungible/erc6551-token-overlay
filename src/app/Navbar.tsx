'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { FaAmazon } from 'react-icons/fa';

const Navbar = () => {
  const title = 'My App';

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      <div className="w-1/3">
        <FaAmazon />
      </div>

      <h1 className="text-2xl font-bold w-1/3 text-center">{title}</h1>

      <div className="flex flex-row space-x-4 w-1/3 justify-end">
        <a href="#" className="text-lg">
          Home
        </a>
        <a href="#" className="text-lg">
          About
        </a>
        <a href="#" className="text-lg">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
