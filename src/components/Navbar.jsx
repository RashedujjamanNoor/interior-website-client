import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 lg:grid lg:grid-cols-3 md:px-10 mt-3 text-wrap">
        <img src="logo-hive-final.png" alt="" className="w-24 md:w-36" />
        <div className="hidden lg:flex lg:justify-between col-span-2">
          <ul className="flex justify-center items-center gap-5 font-medium text-gray-600 ">
            <NavLink to="/">
              <li>Home</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/about">
              <li>About us</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/services">
              <li>Services</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/design">
              <li>Design News</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/contact">
              <li>Contact us</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
          </ul>
          <button className="bg-primary px-8 py-2 rounded-full font-medium text-sm ">
            Call us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
