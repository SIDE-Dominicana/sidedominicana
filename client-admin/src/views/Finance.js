import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Finance() {
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
                        <h2 className="text-3xl font-bold text-gray-800">Servicios Financieros</h2>
                        <p className="mt-4 text-gray-600">
                            Acompañamos la formalización, gestión fiscal y control contable de tu empresa desde su creación.
                        </p>
                    </div>

                    <div className="flex flex-wrap -m-4 justify-center">
                        {[
                            "Constitución y formalización de compañías: nombre comercial, RNC, Registro Mercantil, RPE.",
                            "Registro ante Ministerio de Trabajo y Tesorería de la Seguridad Social (TSS).",
                            "Gestión contable e impositiva: IT-1, 606, 607, IR-3, IR-17, IR-2.",
                            "Monitoreo de obligaciones fiscales y cumplimiento ante la DGII.",
                            "Elaboración de manuales, políticas y procedimientos de control interno."
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
