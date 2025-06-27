
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div>
        <Slider {...settings}>
        <div>
          <img src="/path/to/image1.jpg" />
        </div>
        <div>
          <img src="/path/to/image2.jpg" />
        </div>
        <div>
          <img src="/path/to/image3.jpg" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default BrandSlider;
