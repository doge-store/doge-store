import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { headerMenu } from "../../data/data";
import useScroll from "../../hooks/useScroll";
import useToggle from "../../hooks/useToggle";
import LinkButton from "../ui/LinkButton";
import MobileMenu from "./MobileMenu";
import logo from "/images/logo.png";

function Header() {
  const { menuToggle, handleToggle } = useToggle();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { scrolled } = useScroll();
  const path = useLocation();

  interface MenuItem {
    id: string;
    name: string;
    isSubmenu: boolean;
    link?: string; // Link is optional for parent menu items
    submenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
  }

  interface SubMenuItem {
    id: string;
    name: string;
    link: string;
  }

  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubmenu && menu.submenu) {
      return menu.submenu.some(
        (submenu: SubMenuItem) => path.pathname === submenu.link
      );
    }
    return path.pathname === menu.link;
  };

  return (
    <header>
      <div
        className={` top-0 left-0 right-0 z-50 ${
          scrolled
            ? "animationOne fixed bg-white shadow-md"
            : "animationTwo absolute"
        }`}
      >
        <div className="flex justify-between items-center container text-s1 py-6">
          <div className="pb-1 flex justify-start items-center gap-3">
            <button
              className="lg:hidden text-3xl"
              onClick={() => setShowMobileMenu(true)}
            >
              <RiMenuFoldFill />
            </button>
            <Link to={"/"}>
              <img src={logo} alt="accupay logo" />
            </Link>
          </div>
          <nav className="max-lg:hidden">
            <ul className="flex justify-center items-center gap-3">
              {headerMenu.map((menu) => (
                <li key={menu.id} className="">
                  {menu.isSubmenu ? (
                    <div
                      className="group cursor-pointer relative"
                      onMouseEnter={() => handleToggle(menu.id)}
                      onMouseLeave={() => handleToggle(menu.id)}
                    >
                      <div
                        className={`flex justify-center items-center gap-1 relative px-2 py-3 rounded-lg hover:header_menu_shadow ${
                          isMenuActive(menu) ? "header_menu_shadow" : ""
                        }`}
                      >
                        {menu.name}
                        <span className="pt-0.5 group-hover:rotate-180 duration-700 ">
                          <GoChevronDown />
                        </span>
                      </div>
                      <ul
                        className={`absolute top-12 left-0 pointer-events-none group-hover:eventunset flex justify-start items-start flex-col w-[200px] py-6 gap-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:z-50 bg-s1 text-white/80  rounded-lg ${
                          menuToggle === menu.id
                            ? "translate-y-0 scale-100"
                            : "translate-y-8 scale-75"
                        } duration-500`}
                      >
                        {menu.submenu?.map(({ id, name, link }) => (
                          <li key={id}>
                            <Link
                              to={link}
                              className={`px-6 hover:ml-2 duration-500 hover:text-s2 ${
                                path.pathname === link ? "text-s2" : ""
                              }`}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={menu.link!}
                      className={`hover:header_menu_shadow duration-700 px-2 py-3 rounded-lg ${
                        path.pathname === menu.link ? "header_menu_shadow" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-end items-center gap-2 sm:gap-6 xl:gap-10 font-medium max-sm:hidden">
            <div className="flex justify-between items-center gap-1 ">
              <span className="bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl">
                <PiPhoneCallBold />
              </span>
              <Link to={"tel:+48889375064"} className="max-xl:hidden">
                + 48 889 375 064
              </Link>
            </div>
            <LinkButton link="https://t.me/dogecoin_chain_bot" text="Get Started" />
          </div>
        </div>
      </div>
      <MobileMenu
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
    </header>
  );
}

export default Header;
