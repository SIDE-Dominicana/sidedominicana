import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// data
import data from '../data/team.json';

// images
import brand1 from '../assets/img/brand-1.jpg';
import brand2 from '../assets/img/brand-2.jpg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Landing() {
  
  const form = useRef();  
  const [ member ] = useState(data);
  const [ translations ] = useTranslation("global");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xy36k88', 'template_xg60pj8', form.current, 'HnS0nlwaPZ6CnGpiY')
      .then((result) => {
        Swal.fire({
          title: translations('success'),
          text: translations('success-message'),
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }, (error) => {
        Swal.fire({
          title: translations('success'),
          text: error.text,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
  };

  return (
      <>    
        <Navbar transparent />
          <main>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${require('../assets/img/IMG-20210302-WA0016.jpg')})`, }}
                >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-blue-side"
                ></span>
              </div>

              <div className="container relative mt-6">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h3 className="text-white font-semibold text-2xl">
                        { translations('landing.title') }
                      </h3>
                      <p className="mt-4 text-lg text-blueGray-200">
                        { translations("landing.intro") }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
           <div>
              <span>


              </span>

           </div>
            <section className="pb-20 bg-blueGray-200 -mt-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i className="fas fa-bullseye"></i>
                        </div>
                        <h6 className="text-xl font-semibold">{ translations('landing.title-mission') }</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          { translations('landing.mission') }
                        </p>
                      </div>
                    </div>
                  </div>
            
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                          <i className="fas fa-thumbs-up"></i>
                        </div>
                        <h6 className="text-xl font-semibold">{ translations('landing.title-committed') }</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          { translations('landing.committed') }
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
              

                         </div>

                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                          <i className="fas fa-eye"></i>
                        </div>
                        <h6 className="text-xl font-semibold">{ translations('landing.title-vision') }</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                        { translations('landing.vision') }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <i className="fas fa-user-friends text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      { translations('landing.title-work-with-us') }
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                      { translations('landing.work-with-us-part-1') }
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">                    
                      { translations('landing.work-with-us-part-2') }
                    </p>
                  </div>

                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                      <img
                        alt="..."
                        src={brand1}
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-lightBlue-500 fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          { translations('landing.title-testimony') }
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          { translations('landing.testimony-part-1') }
                        </p>
                        <p className="text-md font-light mt-2 text-white">
                          { translations('landing.testimony-part-2') }
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative py-20">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>

              <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src={brand2}
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                      <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                        <i className="fas fa-rocket text-xl"></i>
                      </div>
                      <h3 className="text-3xl font-semibold">{ translations('landing.title-enterprise') }</h3>
                      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">                     
                        { translations('landing.enterprise') }
                      </p>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                <i className="fas fa-money-bill"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                { translations('landing.enterprise-list-item-1') }
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                <i className="fas fa-brain"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                { translations('landing.enterprise-list-item-2') }
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                <i className="fas fa-heartbeat"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                { translations('landing.enterprise-list-item-3') }
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-20 pb-48">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold">{ translations('landing.title-team') }</h2>
                    <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                     { translations('landing.team') }
                    </p>
                  </div>
                </div>
                <Carousel
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    itemClass="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
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
                                      window.location.href=member.linkedin;                                  
                                    }}
                                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                  >
                                    <i className="fab fa-linkedin"></i>
                                  </button>
                                  <button                                  
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.location.href=member.email;                                  
                                    }}
                                    className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                  >
                                    <i className="fas fa-envelope"></i>
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

            <section className="pb-20 relative block bg-blueGray-800">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-blueGray-800 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>

              <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap mt-12 justify-center">
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-medal text-xl"></i>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                      { translations('landing.excellent-services') }
                    </h6>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-poll text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      { translations('landing.grow-market') }
                    </h5>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      { translations('landing.launch-short-time') }
                    </h5>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
              <form ref={form} onSubmit={sendEmail}>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                        <div className="flex-auto p-5 lg:p-10">
                          <h4 className="text-2xl font-semibold">                    
                            { translations('landing.form-title') }
                          </h4>
                          <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">                  
                            <small>{ translations('landing.form-description') }</small>
                          </p>
                          <div className="relative w-full mb-3 mt-8">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="full-name"
                            >
                              { translations('landing.full-name') }
                            </label>
                            <input
                              name="user_name"
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={ translations('landing.full-name') }
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              { translations('landing.email') }
                            </label>
                            <input
                              name="user_email"
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder={ translations('landing.email') }
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="message"
                            >
                              { translations('landing.message') }
                            </label>
                            <textarea
                              name="message"
                              rows="4"
                              cols="80"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"                            
                              placeholder={ translations('landing.message') }
                            />
                          </div>
                          <div className="text-center mt-6">
                            <button
                              type="submit" 
                              value="Send"
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"    
                            >
                              { translations('landing.send-email') }
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </main>
        <Footer />
      </>
  );
}
