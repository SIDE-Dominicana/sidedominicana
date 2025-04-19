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
                <div className="relative pt-16 pb-16 flex content-center items-center justify-center">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-800">
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-blue-side"
                        ></span>
                    </div>
                </div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="justify-center text-center flex flex-wrap">
                            <div className="w-full md:w-6/12 px-12 mb-4 md:px-4">
                                <h2 className="font-semibold text-4xl">{translations('package.title-package')}</h2>
                            </div>
                            <div className="flex flex-wrap -mx-4 items-center">
                                {
                                    cards
                                        .map((card) => (
                                            <div className="md:pr-0 px-4 relative w-4/12">
                                                <CardPricingList {...card} />
                                            </div>))
                                }
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>);
}