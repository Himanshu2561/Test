import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Slider_Card from "./Slider_Card";
import Next_Btn from "./Next_Btn";

const Rev_Slider = () => {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider ref={slider} {...settings}>
        <Slider_Card />
        <Slider_Card />
        <Slider_Card />
        <Slider_Card />
      </Slider>
      <button onClick={() => slider?.current?.slickNext()}>
        <Next_Btn />
      </button>
    </div>
  );
};

export default Rev_Slider;
