import React from "react";
import "./Footer.css";

export const Footerr = () => {
  return (
    <div className="footer">
      <div className="main_footer">
        <div
          className="info1"
          style={{ width: "45%" }}
        >
          <h2>Header</h2>
          <br />
          <p style={{ fontSize: "0.8rem", width: "70%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut earum
            quae, veniam est ullam architecto magni natus vero quod facere
            repudiandae dolor cupiditate iste molestiae voluptatum similique
            dolore at recusandae dolorum. Molestias non odio beatae itaque? Ipsa
            vitae asperiores similique.
          </p>
        </div>
        <div
          className="info2"
          style={{ width: "55%", display:'flex',justifyContent:"space-evenly"}}
        >
          {" "}
          <ul>
            <h4>Header</h4>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
          </ul>
          <ul>
            <h4>Header</h4>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
          </ul>
          <ul>
            <h4>Header</h4>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div
        className="copyright"
        style={{ color: "#666666", textAlign: "center" }}
      >
        Copyright &#169; 2024. All right reserved.{" "}
      </div>
    </div>
  );
};
