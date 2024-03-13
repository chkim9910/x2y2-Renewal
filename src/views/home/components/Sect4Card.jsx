import { Flex, Img, Text } from "@chakra-ui/react";
import { cardsli } from "../contents/sect4cards";
import { useRef, useState } from "react";

export default function Sect4Card() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // 마우스 오버된 Flex 요소의 인덱스를 저장하는 상태
  const descRefs = useRef([]);

  const handleMouseOver = (index) => {
    setHoveredIndex(index); // 마우스 오버된 Flex 요소의 인덱스 설정
    // setTimeout(() => {
    //   descRefs.current[index].style.display = "block";
    // }, 300);
  };

  // const handleMouseOut = (index) => {
  //   setHoveredIndex(null); // 마우스가 벗어날 때 인덱스 초기화
  //   // descRefs.current[index].style.display = "none";
  // };

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
            <Flex
              className="half-box"
              flexDir={"column"}
              justifyContent={"space-between"}
              p={"20px"}
              h={hoveredIndex === index ? "70%" : "40%"}
              w={hoveredIndex === index ? "100%" : "85%"}
              borderRadius={
                hoveredIndex === index ? "0 0 1rem 1rem" : "0 1rem 1rem 1rem"
              }
              bg={"black.700"}
              color={"white"}
              transition={"all 0.3s"}
            >
              <Text className="author" fontSize={"24px"}>
                {item.author}
              </Text>
              <Text
                className="desc"
                fontSize={{ base: "14px", md: "1rem" }}
                fontWeight={"light"}
                ref={(ref) => (descRefs.current[index] = ref)}
                display={hoveredIndex === index ? "block" : "none"}
                transition={
                  hoveredIndex === index ? "display 0.3s linear 1s" : "none"
                }
                // display={"none"}
              >
                {item.desc}
              </Text>
              <Img
                src={item.profile}
                alt={item.author}
                w={"50px"}
                borderRadius={"10px"}
              />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
}
