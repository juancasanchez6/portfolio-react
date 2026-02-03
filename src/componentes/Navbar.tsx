import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/JC.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-brand-dark/90 backdrop-blur-sm text-brand-text z-50 shadow-sm border-b border-brand-card">
      {/* <div>
        <img src={Logo} alt="Logo foto" style={{ width: "60px" }} className="cursor-pointer hover:scale-105 duration-200" />
      </div>
 */}
      {/* menu */}
      <ul className="hidden md:flex font-medium">
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className="hover:text-brand-accent duration-300 capitalize">
            <Link to={item} smooth={true} duration={500} offset={-80}>
              {item === 'home' ? 'Inicio' :
                item === 'about' ? 'Sobre mí' :
                  item === 'skills' ? 'Habilidades' :
                    item === 'work' ? 'Proyectos' : 'Contacto'}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer hover:text-brand-accent transition-colors">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Movil menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-brand-dark flex flex-col justify-center items-center transition-all duration-300"
        }
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className="py-6 text-4xl hover:text-brand-accent">
            <Link onClick={handleClick} to={item} smooth={true} duration={500} offset={-80}>
              {item === 'home' ? 'Inicio' :
                item === 'about' ? 'Sobre mí' :
                  item === 'skills' ? 'Habilidades' :
                    item === 'work' ? 'Proyectos' : 'Contacto'}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[100%] left-0">
        <ul>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">

            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/juancasanchez6"
              target='blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link className="flex justify-between items-center w-full text-gray-300 cursor-pointer" to="contact" smooth={true} duration={500}>
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fff]">

            <a
              className="flex justify-between items-center w-full text-blue-300"
              href="https://www.linkedin.com/in/juan-carlos-sanchez-rodriguez-60031230b/"
              target='blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;