import { useState } from "react";
import { FaBarsStaggered, FaHouse, FaFaceSmileBeam, FaNewspaper } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { cn } from "@/utils/cn";

const NavItem = ({
  to,
  icon: Icon,
  iconSize = "size-4",
  children,
  onClick,
  className,
}: {
  to: string;
  icon: IconType;
  iconSize?: string; 
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <Link to={to}>
    <li
      className={cn(
        "hover: flex items-center justify-center rounded-md border-2 border-transparent px-6 py-2 hover:border-slate-700 hover:bg-slate-950",
        className,
      )}
      onClick={onClick}
    >
      <Icon className={`${iconSize} mr-2`} />
      {children}
    </li>
  </Link>
);

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <header className="fixed top-0 z-50 h-16 w-full bg-slate-900 text-white select-none font-inter">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
          <Link to={"/"} className="font-acme px-4 pt-1 text-3xl" title="Go To Home">
            Shivam
          </Link>
          <div className="cursor-pointer p-4 sm:hidden" onClick={toggleDropdown}>
            {isDropdownOpen ? <IoClose className="size-7" /> : <FaBarsStaggered className="size-6" />}
          </div>
          <nav className="hidden sm:flex">
            <ul className="flex">
              <NavItem to="/" icon={FaHouse}>
                Home
              </NavItem>
              <NavItem to="/about" icon={FaFaceSmileBeam}>
                About
              </NavItem>
              <NavItem to="/blogs" icon={FaNewspaper}>
                Blogs
              </NavItem>
              <NavItem to="/contact" icon={MdLocalPostOffice} iconSize="size-5">
                Contact
              </NavItem>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`fixed top-16 w-full transition-transform ease-in-out z-40 duration-300 md:hidden ${
          isDropdownOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MobileNav onChildClick={toggleDropdown} />
      </div>
    </>
  );
}

function MobileNav({ onChildClick }: { onChildClick: () => void }) {
  return (
    <nav className="bg-slate-900 p-4 text-white">
      <ul className="grid grid-cols-2 items-center gap-4 rounded-md text-lg">
        <NavItem
          onClick={onChildClick}
          to="/"
          icon={FaHouse}
          className="border-2 bg-slate-800 py-3 hover:border-slate-700 hover:bg-slate-950"
        >
          Home
        </NavItem>
        <NavItem
          onClick={onChildClick}
          to="/about"
          icon={FaFaceSmileBeam}
          className="border-2 bg-slate-800 py-3 hover:border-slate-700 hover:bg-slate-950"
        >
          About
        </NavItem>
        <NavItem
          onClick={onChildClick}
          to="/blogs"
          icon={FaNewspaper}
          className="border-2 bg-slate-800 py-3 hover:border-slate-700 hover:bg-slate-950"
        >
          Blogs
        </NavItem>
        <NavItem
          onClick={onChildClick}
          to="/contact"
          icon={MdLocalPostOffice}
          iconSize="size-5"
          className="border-2 bg-slate-800 py-3 hover:border-slate-700 hover:bg-slate-950"
        >
          Contact
        </NavItem>
      </ul>
      <div className="pt-4 text-center text-sm font-normal text-slate-400">Designed and Developed in India</div>
    </nav>
  );
}
