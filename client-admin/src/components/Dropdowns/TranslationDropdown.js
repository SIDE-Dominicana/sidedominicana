import React from "react";
import { createPopper } from "@popperjs/core";
import { useTranslation } from 'react-i18next';

const TranslationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const [ translations, i18n ] = useTranslation("global");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (    
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-globe-americas text-lg leading-lg " />
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button 
            onClick={() => changeLanguage('es')}
            className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" }
        >
            { translations("navbar.spanish")}
        </button>
        <button 
            onClick={() => changeLanguage('en')}
            className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" }
        >
          { translations("navbar.english") }
        </button>
      </div>
    </>
  );
};

export default TranslationDropdown;
