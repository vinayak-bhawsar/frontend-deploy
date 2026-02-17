import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Navbar() {
  const [authUser] = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Dynamic Nav Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const navItems = navLinks.map((link) => (
    <li key={link.name}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "shadow-md bg-base-200 dark:bg-slate-700 duration-300 transition-all"
          : ""
      }`}
    >
      <div className="navbar">
        {/* Left Side */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <Link to="/" className="text-2xl font-bold">
            bookStore
          </Link>
        </div>

        {/* Center (Desktop Nav) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="btn btn-sm"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {authUser ? (
            <Logout />
          ) : (
            <>
              <button
                className="bg-black text-white px-3 py-2 rounded-md"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;