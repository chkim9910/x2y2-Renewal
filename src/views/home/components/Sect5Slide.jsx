// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
// import { Box } from "@chakra-ui/react";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { slideli } from "../contents/sect5cards";
import { useEffect, useRef, useState } from "react";

export default function Sect5Slide() {
  // sect5Slide의 text에 대한 window.innersize onresize 함수
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        rewind={true}
        className="mySwiper"
      >
        {slideli.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              bg={`url(${item.img}) no-repeat 60% 50%/ cover`}
              borderRadius={"20px"}
              position={"relative"}
              h={{ base: "350px", xl: "450px" }}
            >
              <Box
                position={"absolute"}
                zIndex={10}
                top={"50%"}
                left={"50%"}
                transform={
                  index === 0
                    ? {
                        base: "translate(-50%, -50%)",
                        md: "translate(-20%, -50%)",
                      }
                    : "translate(-50%, -50%)"
                }
                color={"white"}
              >
                <Heading
                  mb={"10px"}
                  lineHeight={1.2}
                  fontSize={{ base: "30px", lg: "36px" }}
                >
                  {item.tit}
                </Heading>
                {windowWidth <= 1024 && item.cont2 ? (
                  <Text
                    mb={"16px"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", lg: "16px" }}
                  >
                    {item.cont2}
                  </Text>
                ) : (
                  <Text
                    mb={"16px"}
                    lineHeight={1.2}
                    fontSize={{ base: "14px", lg: "16px" }}
                  >
                    {item.cont}
                  </Text>
                )}
                {/* <Text
                  ref={contRef}
                  mb={"16px"}
                  lineHeight={1.2}
                  fontSize={{ base: "14px", lg: "16px" }}
                  onClick={() => changeCont(index)}
                >
                  
                  {/* {window.innerWidth <= 1024 && item.cont2
                    ? item.cont2
                    : item.cont}
                 </Text>  */}
                <Flex gap={"1rem"}>
                  <Button variant={"c"}>{item.btn1}</Button>
                  <Button variant={"d"} display={item.btn2 ? "block" : "none"}>
                    {item.btn2}
                  </Button>
                </Flex>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
