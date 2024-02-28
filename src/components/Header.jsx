import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  cart,
  close,
  help,
  menu,
  myprojects,
  navlogo,
  search,
  signin,
} from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // const [filteredProducts, setFilteredProducts] = useState(Products);
  // const searchHandler = (e) => {
  //   const filteredArray = Products.filter((product) =>
  //     product.title.toLocaleLowerCase().includes(e.target.value)
  //   );
  //   if (filteredArray.length != 0) {
  //     setFilteredProducts(filteredArray);
  //   }
  // };
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <nav className="w-full container mx-auto relative">
        <div className="sticky top-0 z-10">
          <div className="header hidden xl:flex justify-between items-center space-x-3 md:flex-nowrap flex-wrap p-4 bg-white">
            <NavLink to="/" className="w-full max-w-[150px]">
              <img src={navlogo} alt="" />
            </NavLink>
            <div className="search flex px-3 py-2 ml-20 border hover:border-[#1A7E91] transition-colors rounded-lg w-full md:max-w-[750px] max-w-[420px]">
              <button>
                <img src={search} className="w-4 h-4" alt="search" />
              </button>
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-transparent outline-0 px-3 w-full font-extralight"
              />
            </div>
            <div className="flex justify-between items-center md:mt-0 mt-5 w-full max-w-[400px] md:pl-5 pl-0">
              <div className="flex items-center space-x-3">
                <img src={help} alt="help" />
                <NavLink
                  to="/help"
                  className="text-[14px] hover:underline hover:text-[#002C34] transition-colors font-normal inter"
                >
                  Help
                </NavLink>
              </div>
              <div className="flex items-center space-x-2">
                <img src={myprojects} alt="myprojects" />
                <NavLink
                  to="/projects"
                  className="text-[14px] hover:text-[#002C34] transition-colors hover:underline font-normal inter"
                >
                  My Projects
                </NavLink>
              </div>
              <div className="flex items-center space-x-2">
                <img src={signin} alt="signin" />
                <NavLink
                  to="signin"
                  className="text-[14px] hover:underline transition-colors hover:text-[#002C34]  font-normal inter"
                >
                  Signin
                </NavLink>
              </div>
              <div className="flex items-center space-x-2">
                <img src={cart} alt="cart" />
                <NavLink
                  to="/cart"
                  className="text-[14px] hover:underline transition-colors hover:text-[#002C34]  font-normal inter"
                >
                  Cart
                </NavLink>
              </div>
            </div>
          </div>
          <div className="categories bg-white text-[13px] w-full hidden xl:flex justify-between md:shadow-sm md:border-b-2 space-x-2 px-2 py-5">
            {navLinks.map((nav, index) => (
              <NavLink
                key={index}
                to={`${nav.id}`}
                className={`hover:underline ${
                  activeTab === index
                    ? "text-[#002C34]"
                    : "hover:text-[#002C34] cursor-pointer transition-colors"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <p
                  className={`${
                    activeTab === index ? "font-semibold" : "font-normal"
                  } inter`}
                >
                  {nav.title}
                </p>
              </NavLink>
            ))}
          </div>

          {/* Hamburger */}
          <div className="xl:hidden flex flex-1 justify-between items-center pt-2 pr-2">
            <NavLink to="/" className="w-full max-w-[150px]">
              <img src={navlogo} alt="" />
            </NavLink>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer invert"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } py-4 px-2 bg-white border absolute top-14 right-0 w-full rounded-2xl sidebar`}
            >
              <ul className="list-none flex flex-col items-start flex-1">
                <div className="search flex px-3 py-2 mb-3 border hover:border-[#1A7E91] transition-colors rounded-lg w-full">
                  <button>
                    <img src={search} className="w-4 h-4" alt="search" />
                  </button>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="bg-transparent outline-0 px-3 w-full font-extralight"
                  />
                </div>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-normal inter pl-3 py-2 w-full cursor-pointer transition-colors hover:bg-gray-200 rounded-lg text-[14px]
        ${
          index === navLinks.length - 1 ? "mb-0" : "mb-2"
        } text-black hover:text-[#002C34] hover:underline transition-colors`}
                  >
                    <NavLink to={`${nav.id}`}>{nav.title}</NavLink>
                  </li>
                ))}
                <div className="flex flex-row items-center pb-3 justify-center space-x-6 mt-5 w-full max-w-[400px]">
                  <div className="flex items-center space-x-3">
                    <img src={help} alt="help" />
                    <NavLink
                      to="/help"
                      className="text-[12px] hover:underline font-normal inter hover:text-[#002C34] cursor-pointer transition-colors"
                    >
                      Help
                    </NavLink>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={myprojects} alt="my projects" />
                    <NavLink
                      to="/projects"
                      className="text-[12px] hover:underline font-normal inter hover:text-[#002C34] cursor-pointer transition-colors"
                    >
                      My Projects
                    </NavLink>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={signin} alt="Signin" />
                    <NavLink
                      to="/signin"
                      className="text-[12px] hover:underline font-normal inter hover:text-[#002C34] cursor-pointer transition-colors"
                    >
                      Signin
                    </NavLink>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={cart} alt="cart" />
                    <NavLink
                      to="/cart"
                      className="text-[12px] hover:underline font-normal inter hover:text-[#002C34] cursor-pointer transition-colors"
                    >
                      Cart
                    </NavLink>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
