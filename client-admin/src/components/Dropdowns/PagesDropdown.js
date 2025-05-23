import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { useTranslation } from "react-i18next";

import { useState, useRef } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";

const PagesDropdown = () => {
  // dropdown prop
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(dropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
  };
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  const [translations] = useTranslation("global");

  return (
    <>
      <div
        ref={dropdownRef}
        onMouseOver={() => {
          openDropdownPopover();
          setMenuDropDownOpen(true);
        }} //use mouseover event to show dropdown
      >
        <a
          href="#pablo"
          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          {translations("navbar.menu")}
        </a>

        <div
          ref={popoverDropdownRef}
          className={
            (isMenuDropDownOpen ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
          }
        >
          <Link
            to="/"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {translations("navbar.home")}
          </Link>

          <Link
            to="/about"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {translations("navbar.about-us")}
          </Link>

          <Link
            to="/package"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {translations("navbar.packages")}
          </Link>

          <Link
            to="/service"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {translations("navbar.services")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PagesDropdown;
