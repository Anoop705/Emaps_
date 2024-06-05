import React from "react";
import styled from "styled-components";
import review from "../../assets/review.png";
import comma from "../../assets/inverted comma.png";

export const Cards = () => {
  return (
    <Card>
      <div className="text">
        <p>
          UI is the saddle, the stirrups, & the reins. UX is the feeling you get
          being able to ride the horse.
        </p>
      </div>

      <div className="image">
        <img src={review} alt="img" className="profile" />
        <img src={comma} alt=""  className="comma"/>
      </div>
    </Card>
  );
};

const Card = styled.div`
  height: 200px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #111928;
  border: 3px solid #3437f1;
  border-radius: 15px;
  padding: 30px;
  gap: 40px;

  p {
    color: #ececec;
    font-size: 1rem;
  }
  .image{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid white ; */
    width: 95%;
  }
  .profile {
    height: 40px;
    width: 150px;
    /* object-fit: cover; */
  }
  .comma{
    width: 50px;
    height: 40px;
  }
`;
