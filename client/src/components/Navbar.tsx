import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-cyan-200 text-2xl p-7 ">
      <div className="flex gap-10 justify-between">
        <Link to="/" className="hover:text-gray-600 font-semibold text-2xl">
          Nawaf
        </Link>
        <div className="gap-12 flex text-purple-500">
          <Link to="/contact" className="hover:text-violet-400">
            Contact
          </Link>
          <Link to="/login" className="hover:text-violet-400">
            Login
          </Link>
          <Link to="/register" className="hover:text-violet-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
