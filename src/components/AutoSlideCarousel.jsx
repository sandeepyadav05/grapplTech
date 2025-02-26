
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/autoslidecarousel.scss'

const AutoSlideCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
    pauseOnHover: false,
    arrows: false, // Hides the next arrow
  };

  const settingReverse = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
    pauseOnHover: false,
    rtl: true,
    arrows: false, // Hides the next arrow
  };

  return (
    <>
      <Slider {...settings} className="autoslide">
        <div>
          <h3>AGENCY</h3>
          {/* Adjust margin to your preference */}
        </div>
        <div>
          <h3>INTERACTION</h3>
        </div>
        <div>
          <h3>DIGITAL SOLUTION</h3>
        </div>
        <div>
          <h3>DEVELOPMENT</h3>
        </div>
        <div>
          <h3>STUDIO</h3>
        </div>
        <div>
          <h3>STRATEGY</h3>
        </div>
        <div>
          <h3>BRANDING</h3>
        </div>
        <div>
          <h3>AGENCY</h3>
        </div>
      </Slider>
      <Slider {...settingReverse} className="autoslideReverse">
        <div>
          <h3>TYPHOGRAPHY</h3>
          {/* Adjust margin to your preference */}
        </div>
        <div>
          <h3>AGENCY</h3>
        </div>
        <div>
          <h3>BRANDING</h3>
        </div>
        <div>
          <h3>STRATEGY</h3>
        </div>
        <div>
          <h3>STUDIO</h3>
        </div>
        <div>
          <h3>DEVELOPMENT</h3>
        </div>
        <div>
          <h3>DIGITAL SOLUTION</h3>
        </div>
        <div>
          <h3>INTERACTION</h3>
        </div>
      </Slider>
    </>
  );
};

export default AutoSlideCarousel;
