import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Services() {
  const [translations] = useTranslation("global");

  const cards = [
    {
      title: translations('package-service.service-marketing'),
      image: require("assets/services/mercadeo-3.jpg"),
      path: "/service/marketing",
    },
    {
      title: translations('package-service.service-technology'),
      image: require("assets/services/tecnologia.jpg"),
      path: "/service/technology",
    },
    {
      title: translations('package-service.service-training-recruitment'),
      image: require("assets/services/capacitacion_reclutamiento.jpg"),
      path: "/service/training-recruitment",
    },
    {
      title: translations('package-service.service-finance'),
      image: require("assets/services/finanzas.jpg"),
      path: "/service/finance",
    }
  ];

  return (
    <>
      <Navbar transparent />
      <main>
        {/* BANNER SECTION */}
        <section className="relative pt-24 pb-28 flex flex-col content-center items-center justify-center min-h-[60vh]">
          <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
            <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
          </div>
          <div className="container relative z-10 mt-10 space-y-8 text-center text-white">
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="pt-20 bg-blueGray-300 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {cards.map((card, idx) => (
                <div key={idx} className="w-full sm:w-6/12 lg:w-3/12 px-4 mb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">{card.title}</h5>
                  <Link to={card.path}>
                    <div className="hover:-mt-4 relative flex flex-col bg-white w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt={card.title}
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={card.image}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
