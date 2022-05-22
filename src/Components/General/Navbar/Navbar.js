import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useScrollTracker } from "react-scroll-tracker";
import { toast } from "react-hot-toast";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { scrollY: scrollYT } = useScrollTracker();

  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    setScrollY(window.scrollY);
  }, [scrollYT]);

  const logout = () => {
    signOut(auth);
    toast.success(`Thank you, ${user.displayName} to stay with us!`, {
      autoClose: 5000,
    });
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/portfolio"
        >
          Our Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/team"
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-primary text-white rounded" : "rounded lg:mx-2"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user?.email ? (
          <button
            className="btn btn-ghost bg-primary font-bold text-white rounded hover:bg-primary lg:ml-2"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-primary text-white rounded lg:px-8"
                : "rounded lg:mx-2 lg:px-8"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    
    </>
  );
  return (
    <section className="flex justify-center mb-8">
      <div className="fixed top-0 w-full z-50">
        <input type="checkbox" className="drawer-toggle" />
        <div
          className={`drawer-content flex flex-col py-[8px] lg:py-[10px] backdrop-blur-[18px] bg-base-200  ${
            scrollY < 300 && "lg:bg-transparent"
          }`}
        >
          <div className="w-full navbar container mx-auto">
            <div className="navbar-start w-20">
              <label
                tabIndex="1"
                htmlFor="dashboard-sidebar"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="flex-1 px-0 mx-3">
              <p className="font-bold ml-0 md:ml-0 lg:ml-0 lg:w-auto w-full text-2xl ">
                <NavLink to="/">
                  <img src="" alt="" className="w-24" />
                </NavLink>
              </p>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-bold">{navItems}</ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-ghost"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <CgMenuLeft className="text-3xl font-bold"></CgMenuLeft>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`absolute duration-300 ease-linear ${
            menuOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 gap-4 overflow-y-auto w-80 font-bold h-screen backdrop-blur-[18px] bg-base-200">
            {navItems}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;