import React from "react";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import { createPopper } from "@popperjs/core";
import { useTranslation } from "react-i18next";

const TranslationDropdown = () => {
  // dropdown props
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

  const [translations, i18n] = useTranslation("global");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div
        ref={dropdownRef}
        onMouseOver={() => {
          openDropdownPopover();
          setMenuDropDownOpen(true);
        }}
      >
        <a
          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="#pablo"
        >
          <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-globe-americas text-lg leading-lg " />
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (isMenuDropDownOpen ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
          }
        >
          <button
            onClick={() => changeLanguage("es")}
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {translations("navbar.spanish")}
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {translations("navbar.english")}
          </button>
        </div>
      </div>
    </>
  );
};

export default TranslationDropdown;
