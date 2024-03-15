// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";
import SlideCard from "./SlideCard";
import { FaPause } from "react-icons/fa6";
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

import bg1 from "../../../assets/images/home/sect1/bg-1.png";
import bg2 from "../../../assets/images/home/sect1/bg-2.png";
import bg3 from "../../../assets/images/home/sect1/bg-3.jpg";
import bg4 from "../../../assets/images/home/sect1/bg-4.jpg";
import bg5 from "../../../assets/images/home/sect1/bg-5.jpg";
import bg6 from "../../../assets/images/home/sect1/bg-6.jpg";
import bg7 from "../../../assets/images/home/sect1/bg-7.jpg";
import bg9 from "../../../assets/images/home/sect1/bg-9.jpg";
import { Icon } from "@chakra-ui/icon";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Sect1Slide() {
  const slideli = [
    {
      name: "The Weirdo Ghost Gang",
      floor: 1.3,
      img: el0,
      bgImg: bg3,
      desc: "We are the ghost, your nightmare, your daydream",
    },
    {
      name: "Party Degenerates",
      floor: 2,
      img: el1,
      bgImg: bg4,
      desc: "The NFT that gives you exclusive access to the world's best Digital Artists, DJs, Events, and Experiences in exotic destinations worldwide and in the Metaverse. ",
    },
    {
      name: "Spring and Autumn by KrisK",
      floor: "N/A",
      img: el2,
      bgImg: bg1,
      desc: "This is her body. What parts is she proud of? What parts is she afraid will be judged by the world? She’s tired of worrying, that she’s too big, too skinny, too muscly, too curvy, too light, too dark. ",
    },
    {
      name: "Gangster All Star Evolution",
      floor: 2,
      img: el3,
      bgImg: bg5,
      desc: "Gangster All Star: Evolution is a collective of gangsters from 50 different gangs in the Gangster All Star universe. Every gang houses individuals who dare to be different and strive to make their presence known.",
    },
    {
      name: "Mutant Ape Yacht Club",
      floor: 6.99,
      img: el4,
      bgImg: bg7,
      desc: "The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale. ",
    },

    {
      name: "REFLECTIONS NFT by Rich Simmons",
      floor: 0.08,
      img: el6,
      bgImg: bg2,
      desc: "We are the ghost, your nightmare, your daydream",
    },
    {
      name: "Pink. Unidentified. Such a Useless Color!",
      floor: "N/A",
      img: el7,
      bgImg: bg9,
      desc: "Post Photographic Perspectives is Fellowship's inaugural group show celebrating a new wave of innovation in photography",
    },
    {
      name: "Flower Fam - Official",
      floor: 0.038,
      img: el8,
      bgImg: bg6,
      desc: "Flower Fam is a collection of 8,888 fine art NFTs with 250+ hand-drawn vibrant traits created by Talia Zoref, who was inspired by the contrast between the colorful and fun fashion world and the judging eye that belittles the industry. ",
    },
  ];

  // swiper button play & stop
  const swiperRef = useRef();
  const [isAutoplayActive, setIsAutoplayActive] = useState(true); // autoplay 상태 변수 추가
  const pause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isAutoplayActive) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsAutoplayActive(!isAutoplayActive); // 상태 변경
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef} // Ref 설정
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        rewind={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}

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
            <SlideCard
              name={item.name}
              floor={item.floor}
              img={item.img}
              bgImg={item.bgImg}
              desc={item.desc}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        h={0}
        w={0}
        p={0}
        position={"absolute"}
        bottom={"24px"}
        left={"calc(50% - 120px)"}
        zIndex={1}
        onClick={pause}
      >
        <Icon as={FaPause} fontSize={"20px"} color={"#562EC8"}></Icon>
      </Button>
    </>
  );
}
