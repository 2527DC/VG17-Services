import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target) && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const NavLink = ({ to, children }) => (

    <div className="div">
    <Link
      to={to}
      className="hover:text-blue-600 transition-colors duration-200"
      onClick={() => setSidebarOpen(false)}
    >
      {children}
    </Link>
    </div>
  );

  const DropdownItem = ({ to, children }) => (
    <li>
      <Link
        to={to}
        className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
        onClick={() => setSidebarOpen(false)}
      >
        {children}
      </Link>
    </li>
  );

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <header className="bg-white shadow-md fixed w-full top-0 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img src="./public/assets/images/logo.png" alt="Logo" className="h-12" />
              </Link>
              <span className="text-2xl font-bold text-blue-700">VG17 Services</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about-us">About Us</NavLink>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                >
                  <span>Our Services</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "services" && (
                  <ul className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    <DropdownItem to="/ProspectList">Prospect Lists</DropdownItem>
                    <DropdownItem to="/cleansing-data">Cleansing Data</DropdownItem>
                    <DropdownItem to="/marketing-via-email">Marketing Via Email</DropdownItem>
                    <DropdownItem to="/verification-of-data">Verification Of Data</DropdownItem>
                  </ul>
                )}
              </div>

              {/* B2B Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("b2b")}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                >
                  <span>B2B Email List</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "b2b" && (
                  <ul className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    <DropdownItem to="/c-level-list">C Level List</DropdownItem>
                    <DropdownItem to="/healthcare-list">Healthcare List</DropdownItem>
                    <DropdownItem to="/technology-list">Technology List</DropdownItem>
                  </ul>
                )}
              </div>

              <NavLink to="/industries">Industries</NavLink>
              <NavLink to="/reseller">Reseller</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <div
  id="sidebar"
  className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
    isSidebarOpen ? "translate-x-0" : "translate-x-full"
  } lg:hidden`}
>
  <div className="flex flex-col h-full">
    {/* Sidebar Header */}
    <div className="p-4 border-b flex justify-between items-center">
      <span className="text-xl font-semibold text-blue-700">Menu</span>
      <button
        onClick={() => setSidebarOpen(false)}
        className="p-2 hover:bg-gray-100 rounded-md"
      >
        <X size={24} />
      </button>
    </div>

    {/* Sidebar Content */}
    <div className="flex-1 overflow-y-auto">
      <nav className="p-4 space-y-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        
        

        {/* Services Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("services")}
            className="flex items-center justify-between w-full py-2 hover:text-blue-600 transition-colors duration-200"
          >
            <span>Our Services</span>
            <ChevronRight
              size={16}
              className={`transform transition-transform duration-200 ${
                activeDropdown === "services" ? "rotate-90" : ""
              }`}
            />
          </button>
          {activeDropdown === "services" && (
            <ul className="pl-4 mt-2 space-y-2">
              <DropdownItem to="/ProspectList">Prospect Lists</DropdownItem>
              <DropdownItem to="/cleansing-data">Cleansing Data</DropdownItem>
              <DropdownItem to="/marketing-via-email">Marketing Via Email</DropdownItem>
              <DropdownItem to="/verification-of-data">Verification Of Data</DropdownItem>
            </ul>
          )}
        </div>

        {/* B2B Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("b2b")}
            className="flex items-center justify-between w-full py-2 hover:text-blue-600 transition-colors duration-200"
          >
            <span>B2B Email List</span>
            <ChevronRight
              size={16}
              className={`transform transition-transform duration-200 ${
                activeDropdown === "b2b" ? "rotate-90" : ""
              }`}
            />
          </button>
          {activeDropdown === "b2b" && (
            <ul className="pl-4 mt-2 space-y-2">
              <DropdownItem to="/c-level-list">C Level List</DropdownItem>
              <DropdownItem to="/healthcare-list">Healthcare List</DropdownItem>
              <DropdownItem to="/technology-list">Technology List</DropdownItem>
            </ul>
          )}
        </div>

        <NavLink to="/industries">Industries</NavLink>
        <NavLink to="/reseller">Reseller</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </nav>
    </div>
  </div>
</div>

    </>
  );
};

export default Navbar;
