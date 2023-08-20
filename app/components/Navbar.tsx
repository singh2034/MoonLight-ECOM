"use client";

// react and next comps for import
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store/useCartStore";
// Icons of React
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";
// Logo Of MoonLamp
import logo from "@/public/moonlamplogo.png";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const cartStore = useCartStore();

  // toggle mobile view
  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`py-4 w-full ${
          isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"
        } `}
      >
        <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
          <Image src={logo} width={200} height={200} alt="moonlamp-logo" />
          <ul
            className={`md:flex items-center font-medium gap-8 md:static absolute text-gray-600 ${
              openMobileMenu
                ? "top-12 py-10 w-full bg-background  left-0 text-center space-y-10 text-dark font-bold drop-shadow-lg z-20"
                : "hidden"
            }`}
          >
            <li>
              <Link onClick={() => setOpenMobileMenu(false)} href={"#features"}>
                Features
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpenMobileMenu(false)} href={"#shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpenMobileMenu(false)} href={"#faqs"}>
                FAQ
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpenMobileMenu(false)} href={"#contact"}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 items-center text-dark ml-auto md:ml-0 ">
            {/* classLess Div */}
            <div
              className="cursor-pointer relative"
              onClick={() => cartStore.toggleCart()}
            >
              <BsCart4 size={25} />
              {cartStore.cart.length > 0 && (
                <span className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute left-2 bottom-3 flex items-center justify-center">
                  {cartStore.cart.length}
                </span>
              )}
            </div>
            <div className="cursor-pointer">
              <BsFillBagHeartFill size={25} />
            </div>
          </div>
          <div className="md:hidden ml-4" onClick={mobileMenuHandler}>
            {openMobileMenu ? <MdClose size={25} /> : <FiMenu size={25} />}
          </div>
        </div>
        {!cartStore.isOpen && <Cart />}
      </nav>
    </>
  );
};

export default Navbar;
