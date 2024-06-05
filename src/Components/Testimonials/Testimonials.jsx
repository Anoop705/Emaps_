import React from "react";
import "./Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Testimonials = () => {
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
    <div className="Testimonials">
      <div className="t_inside">

        <div className="heading">Testimonials</div>
        <div className="main_heading">What are people saying</div>
        <p style={{ width: "60%", textAlign: "center", color: "#9B9CA1" }}>
          "Thank you for your trust in CESON! We are grateful for your feedback
          and are committed to providing the best . Read what our clients have
          to say about their experience with us.
        </p>
        
        
      </div>
    </div>
  );
};
