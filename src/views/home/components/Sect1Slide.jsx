// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import SlideCard from "./SlideCard";
// img
import el0 from "../../../assets/images/home/sect1/slide0.png";
import el1 from "../../../assets/images/home/sect1/slide1.png";
import el2 from "../../../assets/images/home/sect1/slide2.png";
import el3 from "../../../assets/images/home/sect1/slide3.jpg";
import el4 from "../../../assets/images/home/sect1/slide4.png";
// import el5 from "../../../assets/images/home/sect1/slide5.png";
import el6 from "../../../assets/images/home/sect1/slide6.jpeg";
import el7 from "../../../assets/images/home/sect1/slide7.jpeg";
import el8 from "../../../assets/images/home/sect1/slide8.png";

export default function Sect1Slide() {
  const slideli = [
    {
      name: "The Weirdo Ghost Gang",
      floor: 1.3,
      img: el0,
      desc: "We are the ghost, your nightmare, your daydream",
    },
    {
      name: "Party Degenerates",
      floor: 2,
      img: el1,
      desc: "The NFT that gives you exclusive access to the world’s best Digital Artists, DJs, Events, and Experiences in exotic destinations worldwide and in the Metaverse. ",
    },
    {
      name: "Spring and Autumn by KrisK",
      floor: "N/A",
      img: el2,
      desc: "This is her body. What parts is she proud of? What parts is she afraid will be judged by the world? She’s tired of worrying, that she’s too big, too skinny, too muscly, too curvy, too light, too dark. ",
    },
    {
      name: "Gangster All Star Evolution",
      floor: 2,
      img: el3,
      desc: "Gangster All Star: Evolution is a collective of gangsters from 50 different gangs in the Gangster All Star universe. Every gang houses individuals who dare to be different and strive to make their presence known.",
    },
    {
      name: "Mutant Ape Yacht Club",
      floor: 6.99,
      img: el4,
      desc: "The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale. ",
    },

    {
      name: "REFLECTIONS NFT by Rich Simmons",
      floor: 0.08,
      img: el6,
      desc: "We are the ghost, your nightmare, your daydream",
    },
    {
      name: "Pink. Unidentified. Such a Useless Color!",
      floor: "N/A",
      img: el7,
      desc: "Post Photographic Perspectives is Fellowship's inaugural group show celebrating a new wave of innovation in photography",
    },
    {
      name: "Flower Fam - Official",
      floor: 0.038,
      img: el8,
      desc: "We are the ghost, your nightmare, your daydream",
    },
  ];

  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        modules={[Keyboard, Pagination, Navigation]}
        // breakpoints={{
        //   580: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        //   1440: {
        //     slidesPerView: 4,
        //   },
        // }}
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
