import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Marketing() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Banner Section */}
                <section className="relative pt-24 pb-28 flex flex-col content-center items-center justify-center min-h-[50vh]">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
                        <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
                    </div>
                    <div className="container relative z-10 mt-10 space-y-6 text-center text-white">
                    </div>
                </section>

                {/* Content Section */}
                <section className="container px-5 py-16 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Servicios de Mercadeo</h2>
                        <p className="mt-4 text-gray-600">
                            Impulsa tu marca con estrategias digitales, branding y estudios de mercado adaptados a tus objetivos.
                        </p>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center">
                        {[
                            "Gestión de Redes Sociales (contenido, publicidad, etc).",
                            "Identidad Corporativa.",
                            "Documentación de la propuesta o producto (Layout).",
                            "Investigación de mercado (estudios generales y pruebas de MVP).",
                            "Reenfoque de productos, proyectos o servicios."
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-white border border-gray-200 rounded-md p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <p className="text-gray-700 text-base">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
