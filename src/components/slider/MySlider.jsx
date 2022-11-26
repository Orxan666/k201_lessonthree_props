import React from "react";
import "./myslide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import imgQismet from "../../image/one.jpg";
const MySlider = (props) => {
  return (
    <>
      <Swiper navigation={true}  slidesPerView={props.kama} modules={[Navigation]} className="mySwiper">
        {props.photos ? (
          props.photos.map((sekil) => (
            <SwiperSlide>
              <img
                style={{ width: "100%", height: "80vh", objectFit: "cover" }}
                src={sekil}
                alt=""
              />
            </SwiperSlide>
          ))
        ) : (
          <div>
            <h1>Sekil Tapilmadi</h1>
          </div>
        )}
      </Swiper>
    </>
  );
};

export default MySlider;
