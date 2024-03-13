// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import SlideCard from "./SlideCard";
// img
import el0 from "../../../assets/images/home/sect1/slide0.png";
import el1 from "../../../assets/images/home/sect1/slide1.png";
import el2 from "../../../assets/images/home/sect1/slide2.png";
import el3 from "../../../assets/images/home/sect1/slide3.jpg";
import el4 from "../../../assets/images/home/sect1/slide4.png";
import el5 from "../../../assets/images/home/sect1/slide5.png";
import el6 from "../../../assets/images/home/sect1/slide6.jpeg";
import el7 from "../../../assets/images/home/sect1/slide7.jpeg";
import el8 from "../../../assets/images/home/sect1/slide8.png";

export default function Sect1Slide() {
  const slideli = [
    { name: "The Weirdo Ghost Gang", floor: 1.3, img: el0 },
    { name: "Party Degenerates", floor: 2, img: el1 },
    { name: "Spring and Autumn by KrisK", floor: "N/A", img: el2 },
    { name: "Gangster All Star Evolution", floor: 2, img: el3 },
    { name: "Mutant Ape Yacht Club", floor: 6.99, img: el4 },
    { name: "MEGA 404 - Something pink happened", floor: 0.069, img: el5 },
    { name: "REFLECTIONS NFT by Rich Simmons", floor: 0.08, img: el6 },
    {
      name: "Pink. Unidentified. Such a Useless Color!",
      floor: "N/A",
      img: el7,
    },
    { name: "Flower Fam - Official", floor: 0.038, img: el8 },
  ];

  return (
    <>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={16}
        rewind={true}
        breakpoints={{
          580: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {slideli.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideCard name={item.name} floor={item.floor} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
