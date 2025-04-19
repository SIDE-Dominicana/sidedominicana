import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// Data import
import data from '../data/team.json';

// Assets import
import brand1 from '../assets/img/brand-1.jpg';
import brand2 from '../assets/img/brand-2.jpg';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function Landing() {
  const form = useRef();
  const [member] = useState(data);
  const { t } = useTranslation("global");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xy36k88', 'template_xg60pj8', form.current, 'HnS0nlwaPZ6CnGpiY')
      .then(
        () => {
          Swal.fire({
            title: t('success'),
            text: t('success-message'),
            icon: 'success',
            confirmButtonText: 'OK'
          });
        },
        (error) => {
          Swal.fire({
            title: t('error'),
            text: error.text || t('generic-error'),
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative pt-24 pb-28 flex content-center items-center justify-center min-h-[75vh]">
          <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
            <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
          </div>
          <div className="container relative z-10 mt-24">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-white font-bold text-3xl sm:text-4xl">
                  Transforma tu negocio con nuestros servicios
                </h2>
                <p className="mt-4 text-lg text-blueGray-200">
                  Soluciones personalizadas para tu negocio. Descubre cómo podemos ayudarte a crecer.
                </p>
                <div className="mt-6 mb-10">
                  <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition">
                    Solicita una consulta gratis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">¿Por qué elegirnos?</h2>
            <p className="mt-2 text-gray-600">
              Descubre cómo marcamos la diferencia con nuestras soluciones.
            </p>
          </div>

          <div className="flex flex-wrap w-full -m-4 justify-center">
            {[
              {
                title: "Innovación Constante",
                description:
                  "Mantenemos nuestro enfoque actualizado con las últimas tendencias tecnológicas para ofrecer soluciones modernas.",
                iconColor: "bg-indigo-500",
                iconClass: "fas fa-lightbulb",
              },
              {
                title: "Soporte Dedicado",
                description:
                  "Nuestro equipo está siempre disponible para ayudarte en cada paso del camino.",
                iconColor: "bg-green-500",
                iconClass: "fas fa-headset",
              },
              {
                title: "Seguridad Garantizada",
                description:
                  "Priorizamos la protección de tus datos con estándares de seguridad de nivel empresarial.",
                iconColor: "bg-red-500",
                iconClass: "fas fa-shield-alt",
              },
            ].map((card, idx) => (
              <div className="p-4 md:w-1/3 w-full" key={idx}>
                <div className="h-full bg-white border border-gray-200 rounded-md p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center mb-5">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-md text-white text-lg ${card.iconColor}`}
                    >
                      <i className={card.iconClass}></i>
                    </div>
                    <h2 className="ml-4 text-gray-900 text-lg font-semibold">{card.title}</h2>
                  </div>
                  <p className="text-gray-700 text-base mb-5">{card.description}</p>
                  <button className="w-full inline-block bg-blueGray-800 hover:bg-blueGray-900 text-white font-medium py-2 px-4 rounded-md transition">
                    Aprender más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blueGray-100 py-20">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Explora Nuestro Contenido en Video</h2>
              <p className="mt-2 text-gray-600">
                Conoce nuestros servicios y descubre cómo ayudamos a empresas a transformar su tecnología.
              </p>
            </div>

            <div className="flex flex-wrap justify-center">
              {[1, 2, 3].map((_, idx) => (
                <a
                  key={idx}
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 sm:w-[300px] md:w-[360px] mr-10 block group"
                >
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition cursor-pointer">
                    <div className="flex items-center justify-center bg-blueGray-300 relative" style={{ height: "15rem" }}>
                      <i className="fas fa-play text-white bg-blueGray-800 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform"></i>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">Título del Video</h3>
                      <p className="text-base text-gray-600 mt-3">Descripción rápida sobre el tema del video.</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>



        <section className="bg-blueGray-200 py-20">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Últimos Artículos</h2>
              <p className="mt-2 text-gray-600">
                Descubre nuestras ideas más recientes sobre tecnología, innovación y negocios.
              </p>
            </div>

            <div className="flex flex-wrap -m-4 justify-center">
              {[1, 2, 3].map((_, idx) => (
                <div className="p-4 md:w-1/3" key={idx}>
                  <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <img
                      src="https://source.unsplash.com/600x400/?tech,blog"
                      alt="Artículo"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Título del Artículo</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Breve descripción que engancha al lector para saber más sobre el tema tratado en el artículo.
                    </p>
                    <button className="mt-auto inline-block text-white bg-blueGray-800 hover:bg-blueGray-900 py-2 px-4 rounded">
                      Leer más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-20 bg-blueGray-300 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">{t('landing.title-team')}</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  {t('landing.team')}
                </p>
              </div>
            </div>
            <Carousel
              ssr={true}
              infinite={true}
              autoPlay={true}
              itemClass="w-full md:w-6/12 lg:w-3/12 lg:mb-0"
              responsive={responsive}
            >
              {
                member
                  .filter((m) => m.active === true)
                  .map((member, index) => (
                    <div key={index}>
                      <div className="px-6">
                        <img
                          alt="..."
                          src={require('../assets/team/' + member.image)}
                          className="shadow-lg rounded mx-auto max-w-120-px"
                        />
                        <div className="pt-6 text-center">
                          <h5 className="text-xl font-bold">{member.name} {member.lastname}</h5>
                          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                            {member.position}
                          </p>
                          <div className="inline-flex mt-6">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(member.linkedin, '_blank').focus();
                              }}
                              className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                            >
                              <i className="fab fa-linkedin"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              }
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
