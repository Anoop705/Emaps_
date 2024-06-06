import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { Features } from "./Components/Features/Features";
import { Faq } from "./Components/Faq/Faq";
import { Footerr } from "./Components/Footer/Footer";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import { Cards } from './Components/Cards/Cards';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const App = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <Features />
      <div className="test" style={{ borderRadius:'45px',marginTop:'40px',marginBottom:'40px' , width:'97vw',paddingBottom:'50px', paddingLeft:'40px', paddingRight:'40px',backgroundImage:"linear-gradient(white 10%,#EDE5FE)" }}>
        <Testimonials />
        <Carousel 
        style={{border:'3px solid red'}}
          responsive={responsive}
          infinite={true}
          itemClass="carousel-item-padding-100-px"
        >
          <div style={{marginLeft:'100px'}}><Cards/></div>
          <div style={{marginLeft:'100px'}}><Cards/></div>
          <div style={{marginLeft:'100px'}}><Cards/></div>
          <div style={{marginLeft:'100px'}}><Cards/></div>
        </Carousel>
      </div>
      

      <Faq />
      <Footerr />
    </div>
  );
};

export default App;
