import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFlip } from 'swiper'
import 'swiper/css/bundle'
import '../assets/css/SideCarousel.css'
import gif1 from '../assets/images/side-carousel-1.gif'
import gif2 from '../assets/images/side-carousel-2.gif'
import gif3 from '../assets/images/side-carousel-3.gif'

const SideCarousel = () => {
  return (
    <div className="my-4">
      <Swiper
        modules={[EffectFlip, Autoplay]}
        slidesPerView={'auto'}
        effect="flip"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: '5000',
        }}
      >
        <SwiperSlide className="swiper-slide">
          <img src={gif1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={gif2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={gif3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SideCarousel
