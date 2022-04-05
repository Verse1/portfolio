import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-cyan-200 text-2xl p-7 ">
      <div className="flex gap-10 justify-between">
        <a href="/" className="hover:text-gray-600 font-semibold text-2xl">
          Nawaf
        </a>
        <div className="gap-12 flex text-purple-500">
          <a href="/contact" className="hover:text-violet-400">
            Contact
          </a>
          <a href="/login" className="hover:text-violet-400">
            Login
          </a>
          <a href="/register" className="hover:text-violet-400">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
