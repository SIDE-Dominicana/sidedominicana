/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/FooterSmall.js";

export default function Blog() {
  const [ translations ] = useTranslation("global");
//   const [ packages ] = React.useState(data);

  return (
    <>
      <IndexNavbar fixed />
      <main>
        <p>Hola</p>
      </main>      
      <Footer />
    </>
  );
}