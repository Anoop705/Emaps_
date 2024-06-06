import React from "react";
import styled from "styled-components";

export const Faq = () => {
  return (
    <Container className="test">
      <div className="box1">
        <p>
          Frequently asked <br />
          Questions
        </p>
      </div>
      <div className="box2">
        <div className="boxes ">
          <p>Question 1</p>
        </div>
        <div className="boxes ">
          <p>Question 2</p>
        </div>
        <div className="boxes ">
          <p>Question 3</p>
        </div>
        <div className="boxes ">
          <p>Question 4</p>
        </div>
        <div className="boxes sub-box5 ">
          <p>Question 5</p>
        </div>
      </div>
    </Container>
  );
};



const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px;
  gap: 60px;
  background-image: linear-gradient(to right, #f1ebff, #d0e5fe);

  .box1 {
    height: 150%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 4px solid black;
    padding-right: 10px;
    p {
      font-size: 5rem;
      font-weight: 500;
    }
  }
  .box2 {
    height: 130%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .boxes {
      display: flex;
      align-items: end;
      height: 100px;
      width: 100%;
      border-bottom: 4px solid black;
      p {
        
        text-align: left;
        /* margin-top: 20px; */
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
`;
