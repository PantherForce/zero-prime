import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { id: 1, title: "Privacy Policy", link: "/privacy-policy" },
    { id: 2, title: "Terms of Service", link: "/terms" },
    { id: 3, title: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="px-10 border-t border-gray-800">
      <div className="container py-10 pb-4 mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-4 md:items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer gap-2.5">
            <div className="h-10 w-10 group bg-[#ff7700] rounded grid place-items-center text-white">
              <span className="text-[18px] font-bold font-Sync">ZP</span>
            </div>
            <div className="flex flex-col items-start h-full text-black translate-y-1">
              <p className="text-xl font-medium group-hover:opacity-90 font-Sync">
                Zero Prime
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col items-start gap-3 md:items-center md:flex-row">
            {footerLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.link}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          {/* Copyright */}
          <p className="pt-10 text-base font-medium text-center text-gray-400 sm:py-0">
            © 2025 Zero Prime. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
