import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Technology() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Banner */}
                <section className="relative pt-24 pb-28 flex flex-col content-center items-center justify-center min-h-[50vh]">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
                        <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
                    </div>
                    <div className="container relative z-10 mt-10 space-y-6 text-center text-white">
                    </div>
                </section>

                {/* Content */}
                <section className="container px-5 py-16 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Servicios de Tecnología</h2>
                        <p className="mt-4 text-gray-600">
                            Brindamos soluciones tecnológicas robustas para impulsar tu infraestructura, automatización y transformación digital.
                        </p>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center">
                        {[
                            "Desarrollo de aplicaciones web y móviles.",
                            "Instalación y mantenimiento de redes, servidores y cámaras.",
                            "Consultoría en infraestructura tecnológica y soporte remoto.",
                            "Automatización y desarrollo en SAP (reportes, BAPIs, integración).",
                            "Soporte técnico, respaldo y recuperación ante desastres."
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-white border border-gray-200 rounded-md p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
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
