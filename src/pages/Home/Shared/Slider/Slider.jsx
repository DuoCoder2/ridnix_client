import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  const images = [
    "https://res.cloudinary.com/dgtj19ylw/image/upload/v1740678056/canva-PPXlB4FCWxE_kt9owc.webp",
    "https://res.cloudinary.com/dgtj19ylw/image/upload/v1740678948/1600w-CJuFkZcksRI_ypqsvm.webp",
    "https://res.cloudinary.com/dgtj19ylw/image/upload/v1740678948/1600w-kVYwejGaZQE_g8qkgn.webp",
  ];
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      //   navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt="slider image"
            className="h-[50vh] md:h-[70vh] w-full md:rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
