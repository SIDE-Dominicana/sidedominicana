import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import translations from "i18n";

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
  // const lng = useContext(LanguageContext)
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
        {/* <span className="lg:hidden inline-block ml-2">Linkedin</span> */}
        {/* {translations[lng]['menu']} */}
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button 
            className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" }
        >
            { translations['español']['spanish'] }
        </button>
        <button 
            className={ "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" }
        >
          { translations['español']['english'] }
        </button>
      </div>
    </>
  );
};

export default TranslationDropdown;
