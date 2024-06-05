import React from "react";
import "./HeroSection.css";
import Light from "../../assets/Light.svg";
import female from '../../assets/image 4.png'
import male from '../../assets/image 5.png'

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="bg_img">
        <div className="heroText">
        <img  src={male} alt="" style={{height: "auto",width:"70px", objectFit:'cover', position:"absolute", top:"100px", left:"200px"}} />
          <h1>
            Navigate your Business <br />
            Journey with emaps <br />
            The All in one ERP solution
          </h1>
        <img  src={female} alt="" style={{height: "auto",width:"70px", objectFit:'cover', position:"absolute", right:'100px',top:"350px"}} />
          <p>
            Streamline your Business operations with our comprehensive ERP
            Solutions.
          </p>
          <br />
          <button className="getstarted">Get Sarted -></button>
        </div>
        <img src={Light} alt="dashboard" />
      </div>
    </div>
  );
};
