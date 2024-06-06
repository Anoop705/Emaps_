import React from "react";
import "./Features.css";
import Graph from "../../assets/graph.svg";
import Character from "../../assets/character.png";
import Limit from "../../assets/montly limite.png";
import Value from "../../assets/image.svg";
import Invoice from "../../assets/monthly_invoice.svg";
export const Features = () => {
  return (
    <div className="Features block">
      <div className="f_inside">
        <div className="heading">Features</div>
        <div className="main_heading">
          All in one solution for Managing <br />
          your work
        </div>
        <div className="bento1">
          <div className="bento1_thin">
            <h5>Simple analytics</h5>
            <p style={{ fontSize: "0.8rem" }}>
              Make informed decisions backed by data through our analytics
              tools. 
            </p>
            <img
              src={Graph}
              alt="graph"
              style={{ height: "220px", width: "auto" }}
            />
          </div>
          <div className="bento1_thick">
            <h4>
              Boosting Business. <br /> Today and Tomorrow.
            </h4>
            <p style={{ fontSize: "0.8rem", width: "60%", color: "#828282" }}>
              Bring harmony to team expenses with budget limits and real-time
              monitiring. Freedom for your staff. Peace of mind for you.  
            </p>
            <img
              src={Limit}
              alt="graph"
              style={{ height: "220px", width: "90%", borderRadius: "20px" }}
            />
          </div>
          <div className="bento1_thin">
            <h5>Easy Collaboration</h5>
            <p style={{ fontSize: "0.8rem", padding: "25px" }}>
              Seamlessly collaborate with your team members like never before.  
            </p>
            <img
              src={Character}
              alt="graph"
              style={{ height: "220px", width: "auto" }}
            />
          </div>
        </div>
        <div className="bento2">
          <div className="bento2_in">
            <h3>Realtime accounting on your fingertips.</h3>
            <p style={{marginTop:'10px'}}>
              Take the pain out of book keeping! Wave goodbye to mountains of
              paperwork and endless email reminders. There`s now a new way of
              accounting.
            </p>
            <div style={{ display: "flex",alignItems:"center", justifyContent:'space-between',overflow:'hidden', maxHeight:'200px', }}>
              <img
                src={Value}
                alt=""
                style={{width:'31%',height:'100%', marginTop:"40%"}}
              />{" "}
              <img
                src={Invoice}
                alt=""
                style={{ width: "45%", height: "85%" }}
              />
            </div>
          </div>
          <div
            className="bento2_in"
            style={{ backgroundColor: "#111928", color: "white" }}
          >
            <h1>
              Optimise expense <br />
              Management as a team
            </h1>
            <p style={{ fontSize: "1rem", width: "80%", color: "#828282" }}>
              Bring harmony to team expenses with budget limits and real-time
              monitiring. Freedom for your staff. Peace of mind for you.  
            </p>
            <button
              className="explore"
              style={{
                width: "170px",
                height: "50px",
                fontFamily: "Inter",
                fontSize: "1rem",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "white",
              }}
            >
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
