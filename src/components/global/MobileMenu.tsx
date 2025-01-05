import { SetStateAction } from "react";
import AnimateHeight from "react-animate-height";
import { GoChevronRight } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { headerMenu } from "../../data/data";
import useToggle from "../../hooks/useToggle";
import StaggerEffect from "../animation/StaggerEffectOne";
import logo from "/images/logo.png";
function MobileMenu({
  showMobileMenu,
  setShowMobileMenu,
}: {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { menuToggle, handleToggle } = useToggle();

  const path = useLocation();

  interface MenuItem {
    id: string;
    name: string;
    isSubmenu: boolean;
    link?: string;
    submenu?: SubMenuItem[];
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
    <nav>
      <div
        className={`fixed top-0 left-0 bg-s1/80 h-full w-full lg:hidden  ${
          showMobileMenu
            ? "translate-y-0  opacity-30 "
            : " translate-y-[-100%] delay-500 opacity-0 "
        } duration-700 z-[998]`}
        onClick={() => setShowMobileMenu(false)}
      ></div>

      <div
        className={`flex justify-start flex-col items-start gap-8 pb-10 lg:gap-20 fixed lg:hidden top-0 left-0 w-3/4 min-[500px]:w-1/2 h-full bg-s2 overflow-y-auto ${
          showMobileMenu
            ? "translate-y-0 delay-500 opacity-100  visible"
            : " translate-y-[100%] opacity-50 invisible"
        } duration-700 z-[999]`}
      >
        <div className="flex justify-between items-center w-full p-4 sm:p-8">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <i
            className="ri-close-line !text-3xl cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          >
            <MdClose />
          </i>
        </div>

        <ul className="text-lg sm:text-xl flex gap-6 lg:gap-10 items-start flex-col pl-8">
          {headerMenu.map((menu, idx) => (
            <li key={idx}>
              <StaggerEffect id={idx}>
                {menu.isSubmenu ? (
                  <div className="flex flex-col justify-start items-start">
                    <div
                      className={`flex justify-start items-center cursor-pointer ${
                        isMenuActive(menu) ? "underline" : ""
                      }`}
                      onClick={() => handleToggle(menu.id)}
                    >
                      <span>{menu.name}</span>
                      <i
                        className={`!text-xl pl-1 pt-1 duration-500 ${
                          menuToggle === menu.id ? "rotate-[90deg]" : ""
                        }`}
                      >
                        <GoChevronRight />
                      </i>
                    </div>
                    <div className="">
                      <AnimateHeight
                        duration={500}
                        height={menuToggle === menu.id ? "auto" : 0}
                      >
                        <ul
                          className={`pl-4 flex justify-start items-start flex-col gap-2 pt-2`}
                        >
                          {menu.submenu?.map((subItem, j) => (
                            <li key={j} className={``}>
                              <Link
                                to={subItem.link}
                                onClick={() => setShowMobileMenu(false)}
                                className={`text-base ${
                                  path.pathname === subItem.link
                                    ? "underline"
                                    : ""
                                } `}
                              >
                                <span className={``}>-</span> {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={menu.link!}
                    onClick={() => setShowMobileMenu(false)}
                    className={`menu-hover hover:after:border-p1 ${
                      path.pathname === menu.link ? "underline" : ""
                    } `}
                  >
                    {menu.name}
                  </Link>
                )}
              </StaggerEffect>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
