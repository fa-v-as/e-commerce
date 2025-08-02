import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

import { ShopContext } from '../Context/ShopContext';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="flex items-center justify-between py-5 px-6 font-sans bg-[#111827] text-white shadow-md relative z-50">

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-8 text-sm font-medium">
        {['/', '/collections', '/about', '/contact'].map((route, i) => (
          <NavLink
            key={route}
            to={route}
            className={({ isActive }) =>
              `hover:text-[#ff4c29] transition ${isActive ? "text-[#ff4c29] font-semibold" : ""}`
            }
          >
            {['Home', 'Collections', 'About', 'Contact'][i]}
          </NavLink>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative">
          <IoSearchOutline
            onClick={() => setShowSearch(!showSearch)}
            className="text-xl cursor-pointer hover:text-[#ff4c29]"
          />
          {showSearch && (
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search..."
              className="absolute top-10 right-0 w-48 py-2 px-4 rounded-full bg-[#1f2937] border border-gray-600 text-white placeholder-gray-400 shadow-lg focus:outline-none"
            />
          )}
        </div>

        {/* Profile */}
        <div className="group relative">
          <CgProfile
            onClick={() => token ? null : navigate("/login")}
            className="text-xl cursor-pointer hover:text-[#ff4c29]"
          />
          {token && (
            <div className="absolute right-0 mt-4 hidden group-hover:block bg-[#1f2937] text-white border border-gray-700 rounded-lg shadow-lg w-40 p-3 z-50">
              <p className="py-1 px-2 hover:bg-[#272e3a] rounded cursor-pointer">My Profile</p>
              <p onClick={() => navigate("/orders")} className="py-1 px-2 hover:bg-[#272e3a] rounded cursor-pointer">Orders</p>
              <p onClick={logOut} className="py-1 px-2 hover:bg-[#272e3a] rounded cursor-pointer">Logout</p>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <FiShoppingCart className="text-xl hover:text-[#ff4c29]" />
          <span className="absolute -top-2 -right-2 bg-[#ff4c29] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <RiMenu3Line
          onClick={() => setVisible(!visible)}
          className="text-xl sm:hidden cursor-pointer hover:text-[#ff4c29]"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-[#111827] text-white transition-all duration-300 ease-in-out z-40 shadow-xl ${visible ? 'w-3/4' : 'w-0 overflow-hidden'}`}>
        <div className="flex flex-col h-full pt-6 px-6">
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 mb-6 cursor-pointer">
            <IoIosArrowBack className="text-xl" />
            <p className="text-lg font-medium">Back</p>
          </div>
          {['/', '/collections', '/about', '/contact'].map((route, i) => (
            <NavLink
              key={route}
              to={route}
              onClick={() => setVisible(false)}
              className="py-3 text-white hover:text-[#ff4c29] font-medium border-b border-gray-700"
            >
              {['Home', 'Collections', 'About', 'Contact'][i]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
