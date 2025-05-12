import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import Swal from 'sweetalert2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// Data import
import team from '../data/team.json';
import blogData from "../data/blog.json";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function Landing() {
  const [members] = useState(team);

  const openModal = (member) => {
    Swal.fire({
      title: `${member.name} ${member.lastname}`,
      html: `
        <div class="p-4 text-center">
          <div class="flex justify-center mb-4">
            <img
              src="${require(`../assets/team/${member.image}`)}"
              alt="${member.name}"
              class="w-26 h-26 rounded shadow-lg mx-auto max-w-120-px"
            />
          </div>
          <h4 class="text-center font-semibold mb-2">${member.position}</h4>
          <h4 class="text-gray-700 font-semibold mb-2">Biografía:</h4>
          ${member.bio
          .split('\n')
          .map(p => `<p class="text-gray-600 mb-2">${p.trim()}</p>`)
          .join('')}
        </div>
      `,
      width: 800,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Ver perfil',
      cancelButtonText: 'Cerrar',
      reverseButtons: true,
      customClass: {
        popup: 'swal2-rounded swal2-shadow',
      }
    }).then((result) => {
      if (result.isConfirmed && member.linkedin) {
        window.open(member.linkedin, '_blank');
      }
    });
  };

  const { t } = useTranslation("global");

  const videosAvailable = false;
  const aboutUs = [
    {
      title: "Misión",
      description:
        "Acompañar a nuestros clientes en el desarrollo de sus actividades operativas, brindándoles las herramientas que le permitan cumplir con los objetivos de la entidad, ofreciendo un servicio profesional de calidad.",
      iconColor: "bg-red-400",
      iconClass: "fas fa-bullseye",
    },
    {
      title: "Visión",
      description:
        "Ser parte de cada etapa y proceso de nuestros clientes, en el camino hacia su desarrollo, comprometidos con su evolución y crecimiento.",
      iconColor: "bg-emerald-400",
      iconClass: "fas fa-eye",
    },
    {
      title: "Valores",
      iconClass: "fas fa-heart",
      iconColor: "bg-red-500",
      values: [
        "Compromiso",
        "Respeto",
        "Fiabilidad",
        "Integridad",
        "Responsabilidad",
      ],
    },
  ];

  const articules = blogData;

  return (
    <>
      <Navbar transparent />
      <main>
        {/*  BANNER SECTION  */}
        <section className="relative pt-24 pb-28 flex flex-col content-center items-center justify-center min-h-[50 vh]">
          <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
            <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
          </div>
          <div className="container relative z-10 mt-10 space-y-8 text-center">
          </div>
        </section>

        {/*  ABOUT US SECTION */}
        <section className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">¿Quiénes somos?</h2>
            <p className="mt-2 m-4 text-gray-600">
              Somos un equipo de profesionales, con experiencia en áreas diversas, que forma un
              amplio directorio de servicios con el propósito de acompañar a Emprendedores y
              MiPymes en el desarrollo de los objetivos de su negocio; fortaleciendo cada
              proceso con las más óptimas soluciones en aspectos Administrativos, Financieros,
              Tecnológicos y Jurídicos.
            </p>
          </div>

          <div className="flex flex-wrap w-full -m-4 justify-center">
            {aboutUs.map((card, idx) => (
              <div className="p-4 md:w-1/3 w-full" key={idx}>
                <div className="h-full bg-white border border-gray-200 rounded-md p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

                  {/* Icono y título */}
                  <div className="flex justify-center items-center mb-5">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-md text-white text-lg ${card.iconColor}`}
                    >
                      <i className={card.iconClass}></i>
                    </div>
                    <h2 className="ml-4 text-gray-900 text-lg font-semibold">
                      {card.title}
                    </h2>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-700 text-base mb-5">
                    {card.description}
                  </p>

                  {/* Lista opcional de valores */}
                  {card.values && card.values.length > 0 && (
                    <ul className="mx-auto text-center list-disc list-inside text-gray-600 space-y-1 mb-5">
                      {card.values.map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YOUTUBE VIDEOS SECTION */}
        {videosAvailable ? <section className="bg-blueGray-100 py-20">
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
        </section> : null}

        {/* TEAM SECTION */}
        <section className="pt-20 bg-blueGray-200 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">{t('landing.title-team')}</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  {t('landing.team')}
                </p>
              </div>
            </div>
            <Carousel ssr infinite autoPlay itemClass="w-full md:w-6/12 lg:w-3/12" responsive={responsive}>
              {members.filter(m => m.active).map((member, idx) => (
                <div key={idx} className="px-6 cursor-pointer" onClick={() => openModal(member)}>
                  <img alt="..." src={require(`../assets/team/${member.image}`)} className="shadow-lg rounded mx-auto max-w-120-px" />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">{member.name} {member.lastname}</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">{member.position}</p>
                    <div className="inline-flex mt-6">
                      <button onClick={e => { e.stopPropagation(); window.open(member.linkedin, '_blank'); }} className="bg-lightBlue-600 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* ARTICULES SECTION */}
        <section className="bg-blueGray-300 py-20">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Últimos Artículos</h2>
              <p className="mt-2 text-gray-600">
                Descubre nuestras ideas más recientes sobre tecnología, innovación y negocios.
              </p>
            </div>

            <div className="flex flex-wrap -m-4 justify-center">
              {articules.map((post, idx) => (
                <div className="p-4 md:w-1/3" key={idx}>
                  <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                    <a href={`/blog/${post.slug}`} className="inline-block text-white bg-blueGray-800 hover:bg-blueGray-900 py-2 px-4 rounded">
                      Leer más
                    </a>
                  </div>
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
