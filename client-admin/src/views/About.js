import React from "react";
import { useTranslation } from 'react-i18next';

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function AboutUs() {
    const [translations] = useTranslation("global");

    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-16 flex content-center items-center justify-center">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
                        <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
                    </div>
                </div>

                <section className="bg-blueGray-100 min-h-screen flex items-center justify-center -mt-24" id="quienes-somos">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-blueGray-800">¿Quiénes Somos?</h2>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {/* Misión */}
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Misión</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Ofrecemos soluciones innovadoras y accesibles que mejoren la vida de las personas, impulsando el desarrollo sostenible y la transformación digital.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visión */}
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-eye"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Visión</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Ser líderes en el sector tecnológico en América Latina, reconocidos por nuestra excelencia, compromiso social y enfoque centrado en el usuario.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Valores */}
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-500">
                                            <i className="fas fa-heart"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Valores</h6>
                                        <ul className="text-blueGray-500 list-disc list-inside mt-2 space-y-1 text-left">
                                            <li>Innovación constante</li>
                                            <li>Compromiso y responsabilidad</li>
                                            <li>Transparencia</li>
                                            <li>Trabajo en equipo</li>
                                            <li>Orientación al cliente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
