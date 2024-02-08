/*eslint-disable*/
import React from "react";
import { useTranslation } from 'react-i18next';

// sections
import Blogs3 from "components/Sections/Blog/Blogs/Blogs3.js";

// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// import HeaderBlogPostDark from "components/Headers/Blog/HeaderBlogPostDark.js";
import HeaderImageTitleButtons from "components/Headers/Blog/HeaderImageTitleButtons"

// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
// import headerblogpostdark from "_texts/blog/headers/headerblogpostdark.js";
import headerimagetitlebuttons from "_texts/blog/headers/headerimagetitlebuttons";
import blogs3 from "_texts/blog/blogs/blogs3.js";

export default function Blog() {
  const [ translations ] = useTranslation("global");

  return (
    <>
      {/* <IndexNavbar transparent /> */}
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleButtons {...headerimagetitlebuttons} />
      <Blogs3 {...blogs3} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}