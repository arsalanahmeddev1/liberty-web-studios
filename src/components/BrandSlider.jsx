import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const BrandSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={5}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={4000}
      loop={true}
      className="brand-swiper"
    >
      <SwiperSlide>
        <div className="">
          <img
            src="/src/assets/images/brand-01.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
          <img
            src="/src/assets/images/brand-02.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
          <img
            src="/src/assets/images/brand-03.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
          <img
            src="/src/assets/images/brand-04.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
          <img
            src="/src/assets/images/brand-05.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
          <img
            src="/src/assets/images/brand-02.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandSlider;
