import { useState, useEffect } from "react";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import signOut function

const navLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/rules",
    label: "Rules",
  },
  {
    to: "/user-flow",
    label: "User Flow",
  },

];

import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [user, setUser] = useState(null); // To store the user info
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Track the user's authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup the subscription when the component is unmounted
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Update the state to reflect the logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-5 mx-auto bg-white border-b">
      <nav className="container flex items-center justify-between px-4 mx-auto md:px-10">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center cursor-pointer gap-2.5">
            <div className="h-10 w-10 group bg-[#ff7700] rounded grid place-items-center text-white">
              <span className="text-[18px] font-bold font-Sync">ZP</span>
            </div>
            <div className="flex flex-col items-start h-full text-black translate-y-1">
              <p className="text-xl font-medium group-hover:opacity-90 font-Sync">
                Zero Prime
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="items-center hidden gap-3 md:flex">
          {navLinks.map((link, index) => (
            <div key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "px-2 py-1 rounded text-black"
                    : "text-base hover:text-gray-200 transition duration-300 px-2 py-1 font-light text-black"
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="items-center hidden gap-3 md:flex">
          {user ? (
            <button onClick={handleLogout} className="nav-btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="nav-btn">Login</button>
            </Link>
          )}
        </div>

        <button
          onClick={toggleNav}
          className="flex items-center justify-center w-12 h-12 text-lg text-white rounded-lg ring-inset ring ring-gray-800/10 active:ring-0 active:bg-gray-800/70 active:scale-95 bg-gray-800/50 md:hidden"
        >
          {isNavOpen ? <RiCloseLine size={24} /> : <RiMenuFill size={20} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-50 bg-gray-800 shadow-lg w-80 md:hidden"
            >
              <div className="flex flex-col h-full px-6 py-16 pt-20">
                {/* Navigation Links */}
                <ul className="flex flex-col items-start gap-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gradient-to-tr from-gray-400/10 to-transparent px-2 py-1 rounded text-gray-300 block w-full"
                            : "text-base hover:text-gray-200 transition duration-300 px-2 py-1 font-medium text-gray-400 block w-full"
                        }
                        onClick={toggleNav}
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </ul>
                <hr className="h-px my-8 bg-gray-600 border-none" />
                {/* CTA Buttons */}
                <div className="flex flex-col items-start gap-3">
                  {user ? (
                    <button onClick={handleLogout} className="w-full border shadow-none border-gray-700/50 nav-btn hover:bg-gray-700/20">
                      Logout
                    </button>
                  ) : (
                    <>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-full border shadow-none border-gray-700/50 nav-btn hover:bg-gray-700/20"
                      >
                        Login
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-full shadow-none nav-btn primary "
                      >
                        Sign Up
                      </motion.button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
