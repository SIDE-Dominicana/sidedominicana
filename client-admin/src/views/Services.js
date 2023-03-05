import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import Pricing2 from "components/Sections/ECommerce/Pricing/Pricing2.js";

import pricing2 from "_texts/e-commerce/pricing/pricing2.js";

// components
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";

// data package information
import data from '../data/packages.json';

export default function Services() {
  const [ translations ] = useTranslation("global");
  const [ packages ] = React.useState(data);

  return (
    <>
      <IndexNavbar fixed />
      <section className="h-screen item-center relative">
          <div className="justify-center text-center flex flex-wrap mt-24">
              <div className="w-full md:w-6/12 px-12 md:px-4">
                <h2 className="font-semibold text-4xl">{ translations('package-service.title-package') }</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                  { translations('package-service.content-package') }
                </p>
              </div>
              <Pricing2 {...pricing2} />
              {/* <PricingTable highlightColor="#0d3f5c">
                {
                  packages.map((item, index) => (
                    <PricingSlot  buttonText="Solicitar" title={item.title} priceText={"$" + item.price}>
                      {
                        item.services.map((service) => (
                          <PricingDetail>{service.name}</PricingDetail>
                        ))                      
                      }
                    </PricingSlot>
                  ))
                }                
              </PricingTable>    */}
          </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div className="mt-48 md:mt-40 justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 mt-10 md:px-4">
            <h2 className="font-semibold text-4xl">{ translations('package-service.title-service') }</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              { translations('package-service.content-service') }
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    { translations('package-service.service-marketing') }
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
                    { translations('package-service.service-technology') }
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
                    { translations('package-service.service-training-recruitment') }
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
                    { translations('package-service.service-finance') }
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-laptop text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                { translations('package-service.title-formalize') }
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                { translations('package-service.content-formalize-1') }
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                { translations('package-service.content-formalize-2') }
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fas fa-building text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}