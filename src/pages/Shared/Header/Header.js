import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
  return (
    <header className="bg-blue-500 text-gray-200 body-font lg:sticky lg:top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <img className="h-10" src={logo} alt="" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 hover:text-gray-900"
            to={{ pathname: '/home', hash: '#services' }}
          >
            Services
          </Link>

          <Link
            className="mr-5 hover:text-gray-900"
            to={{ pathname: '/home', hash: '#experts' }}
          >
            Experts
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/about">
            About
          </Link>
        </nav>
        <Link
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-blue-500"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="ml-2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-blue-500"
          to="/login"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
