import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [translations] = useTranslation("global");
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">{translations('footer.keep-touch')}</h4>
              <h6 className="text-lg mt-0 mb-2 text-blueGray-600">
                <small>{translations('footer.keep-touch-description')}</small>
              </h6>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://twitter.com/sidedominicana';
                  }}
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://www.facebook.com/profile.php?id=100069438498408';
                  }}
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://www.instagram.com/sidedominicana/';
                  }}
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://www.linkedin.com/in/servicios-integrados-de-desarrollo-empresarial-side-5b63941b8/';
                  }}
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} by{" "}
                <a
                  href="https://www.linkedin.com/in/servicios-integrados-de-desarrollo-empresarial-side-5b63941b8/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  <small>{translations('navbar.name')}</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
