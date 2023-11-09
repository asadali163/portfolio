import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../../data";
import NavLink from "./NavLink";
import HireMe from "../General/HireMe";
import myImage from "../../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-mn-secondary">
      <div className="align-element flex py-6 justify-between items-center navbar">
        <img src={myImage} alt="logo" className="w-24" />

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.id}
              {...nav}
              active={active}
              setActive={setActive}
              mobile={false}
            />
          ))}
          <HireMe />
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <AiOutlineClose className="w-7 h-7 text-mn-primary" />
            ) : (
              <AiOutlineMenu className="w-7 h-7 text-mn-primary" />
            )}
          </button>

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-blue-gray-200 `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav) => (
                <NavLink
                  key={nav.id}
                  {...nav}
                  active={active}
                  setActive={setActive}
                  mobile={true}
                />
              ))}
              {/* <HireMe /> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
