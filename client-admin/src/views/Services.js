import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import Pricing2 from "components/Sections/ECommerce/Pricing/Pricing2.js";
import Navbar from "components/Navbars/AuthNavbar.js";

import pricing2 from "_texts/e-commerce/pricing/pricing2.js";

// components
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";

// data package information
import data from '../data/packages.json';

export default function Services() {
  const [translations] = useTranslation("global");
  const [packages] = React.useState(data);

  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-16 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-blue-side"
            ></span>
          </div>
        </div>


        <section className="pt-20 bg-blueGray-300 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {translations('package-service.service-marketing')}
                </h5>
                <Link to="/">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/services/mercadeo-3.jpg")}
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-3/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {translations('package-service.service-technology')}
                </h5>
                <Link to="/">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/services/tecnologia.jpg")}
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-3/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {translations('package-service.service-training-recruitment')}
                </h5>
                <Link to="/">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/services/capacitacion_reclutamiento.jpg")}
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-3/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {translations('package-service.service-finance')}
                </h5>
                <Link to="/">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={require("assets/services/finanzas.jpg")}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="block relative z-1 bg-blueGray-600">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12">
            
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}