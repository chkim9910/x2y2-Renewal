import { Flex, Img, Text } from "@chakra-ui/react";
import { cardsli } from "../contents/sect4cards";
import { useEffect, useRef, useState } from "react";

export default function Sect4Card() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // 마우스 오버된 Flex 요소의 인덱스를 저장하는 상태
  const descRefs = useRef([]);

  const handleMouseOver = (index) => {
    setHoveredIndex(index); // 마우스 오버된 Flex 요소의 인덱스 설정
  };

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
      <Flex
        gap={"20px"}
        flexWrap={"wrap"}
        flexDir={{ base: "column", md: "row" }}
      >
        {cardsli.map((item, index) => (
          <Flex
            key={index}
            bg={`url(${item.img}) no-repeat 50% 50% / cover`}
            borderRadius={"1rem"}
            h={{ base: "239px", md: "376px", lg: "480px" }}
            // maxH={"480px"}
            minH={"239px"}
            minW={"278px"}
            flex={1}
            // w={"380px"}
            alignItems={"flex-end"}
            onMouseOver={() => handleMouseOver(index)}
            // onMouseOut={() => handleMouseOut(index)}
          >
            {windowWidth > 480 ? (
              <Flex
                className="half-box"
                flexDir={"column"}
                p={"20px"}
                h={hoveredIndex === index ? "65%" : "40%"}
                w={hoveredIndex === index ? "100%" : "85%"}
                borderRadius={
                  hoveredIndex === index ? "0 0 1rem 1rem" : "0 1rem 1rem 1rem"
                }
                bg={"black.700"}
                color={"white"}
                transition={"all 0.3s"}
              >
                <Flex justifyContent={"space-between"}>
                  <Text className="author" fontSize={"24px"}>
                    {item.author}
                  </Text>
                  <Img
                    src={item.profile}
                    alt={item.author}
                    w={{ base: "40px", lg: "50px" }}
                    h={{ base: "40px", lg: "50px" }}
                    borderRadius={"10px"}
                  />
                </Flex>
                <Text
                  className="desc"
                  fontSize={{ base: "14px", md: "1rem" }}
                  fontWeight={"light"}
                  ref={(ref) => (descRefs.current[index] = ref)}
                  display={hoveredIndex === index ? "block" : "none"}
                  transition={
                    hoveredIndex === index ? "display 0.3s linear 1s" : "none"
                  }
                >
                  {item.desc}
                </Text>
              </Flex>
            ) : (
              <Flex
                className="half-box"
                flexDir={"column"}
                p={"16px"}
                h={hoveredIndex === index ? "100%" : "60%"}
                w={hoveredIndex === index ? "100%" : "90%"}
                borderRadius={
                  hoveredIndex === index ? "0 0 1rem 1rem" : "0 1rem 1rem 1rem"
                }
                bg={"black.700"}
                color={"white"}
                transition={"all 0.3s"}
              >
                <Flex justifyContent={"space-between"}>
                  <Text className="author" fontSize={"24px"}>
                    {item.author}
                  </Text>
                  <Img
                    src={item.profile}
                    alt={item.author}
                    w={{ base: "40px", lg: "50px" }}
                    borderRadius={"10px"}
                  />
                </Flex>
                <Text
                  className="desc"
                  fontSize={{ base: "14px", md: "1rem" }}
                  fontWeight={"light"}
                  ref={(ref) => (descRefs.current[index] = ref)}
                  display={hoveredIndex === index ? "block" : "none"}
                  transition={
                    hoveredIndex === index ? "display 0.3s linear 1s" : "none"
                  }
                >
                  {item.desc}
                </Text>
              </Flex>
            )}
          </Flex>
        ))}
      </Flex>
    </>
  );
}
