import { NavLink } from "react-router";

const Navbar = () => {
  const navLink = (
    <>
      {["Home", "Service", "Contact", "Blog"].map((item, index) => (
        <li key={index}>
          <NavLink
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `px-4 py-2 text-lg font-medium transition duration-300 ${
                isActive ? "text-[#F4B400]" : "text-[#333333]"
              } hover:text-[#4CAF93]`
            }
          >
            {item}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-white shadow-md sticky">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#333333]"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 space-y-2 rounded-lg bg-white p-3 shadow-lg"
          >
            {navLink}
          </ul>
        </div>
        {/* Logo */}
        <a className="text-2xl font-bold text-[#4CAF93]">Ridnix</a>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">{navLink}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn bg-[#4CAF93] text-white hover:bg-[#3A8D75] px-5 py-2 rounded-md shadow-md transition">
          Message
        </a>
      </div>
    </div>
  );
};

export default Navbar;
