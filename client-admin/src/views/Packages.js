import React from "react";
import { useTranslation } from 'react-i18next';

import cards from "data/CardPricingList.js";
import CardPricingList from "components/Cards/ECommerce/CardPricingList.js";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Packages() {
    const [translations] = useTranslation("global");
    return (
        <>
            <Navbar transparent />
            <main>
                {/*  BANNER SECTION  */}
                <section className="relative pt-24 pb-28 flex flex-col content-center items-center justify-center min-h-[75vh]">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
                        <span className="w-full h-full absolute opacity-75 bg-blue-side"></span>
                    </div>
                    <div className="container relative z-10 mt-10 space-y-8 text-center">
                    </div>
                </section>

                {/* PACKAGES SECTION */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="justify-center text-center flex flex-wrap mb-10">
                            <div className="w-full md:w-6/12 px-12 mb-4 md:px-4">
                                <h2 className="font-semibold text-4xl">{translations('package.title-package')}</h2>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center -mx-4">
                            {
                                cards.map((card, index) => (
                                    <div key={index} className="w-full sm:w-6/12 lg:w-4/12 px-4 mb-6">
                                        <CardPricingList {...card} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
