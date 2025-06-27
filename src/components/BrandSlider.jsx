import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const BrandSlider = () => {
  return (
    <Swiper
      // modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={5}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      pagination={{ clickable: true }}
      slidesPerGroup={1}
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
            src="/src/assets/images/brand-01.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
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
            src="/src/assets/images/brand-01.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
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
            src="/src/assets/images/brand-01.png"
            alt="Brand Slider" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandSlider;
