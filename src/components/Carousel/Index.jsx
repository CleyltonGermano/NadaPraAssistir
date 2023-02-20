import React, { Children, useEffect, useState } from "react";
import ReactCardCarousel from "react-card-carousel";
import "./styles.css";

const Carrossel = ({ children }) => {
 

  return (
    <div className="container">
      <ReactCardCarousel spread={"wide"} autoplay={true} autoplay_speed={5000}>
       {children}
      </ReactCardCarousel>
    </div>
  );
};

export default Carrossel;
