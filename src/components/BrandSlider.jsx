import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const BrandSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <div className="bg-blue-500 text-white text-center p-10 rounded-lg">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-green-500 text-white text-center p-10 rounded-lg">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-500 text-white text-center p-10 rounded-lg">Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandSlider;
