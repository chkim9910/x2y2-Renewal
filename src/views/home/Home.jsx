import { Box, Button, ButtonGroup, Flex, Select, Text } from "@chakra-ui/react";
import Sect1Slide from "./components/Sect1Slide";
import Inner from "../../components/comm/Inner";
// import { position } from "polished";
import sect1Bg from "../../assets/images/home/sect1/slide1.png";
import Title from "../../components/comm/Title";

export default function Home() {
  return (
    <>
      <Box
        className="sect1"
        backgroundImage={`url(${sect1Bg})`}
        bgPosition={"0% 100%"}
        pt={"80px"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          top={"80px"}
          bottom={0}
          left={0}
          right={0}
          backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,1))`}
          // bgColor={"rgba(0, 0, 0, .4)"}
          backdropFilter={"saturate(180%) blur(15px)"}
        ></Box>
        <Inner position={"relative"} zIndex={10}>
          <Box className="text-box" mb={"20px"}>
            <Text
              className="tit"
              fontSize={{ base: "32px", lg: "48px" }}
              color={"white"}
              fontWeight={"bold"}
              mt={"30px"}
              lineHeight={1.2}
            >
              Buy, Sell and Lend your NFTs
            </Text>
            <Text
              className="sub-tit"
              color={"white"}
              fontWeight={"light"}
              fontSize={{ base: "14px", lg: "1rem" }}
            >
              Best place to liquify your illiquidity
            </Text>
          </Box>

          <Sect1Slide />
        </Inner>
      </Box>
      <Box className="sect2">
        <Inner m={{ base: "50px 0", lg: "80px 0" }}>
          <Flex
            className="upper"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Title>Hot Collections</Title>
            <Flex className="btn-box" gap={"14px"}>
              <ButtonGroup isAttached className="time">
                <Button variant={"b"}>1h</Button>
                <Button variant={"b"}>6h</Button>
                <Button variant={"b"}>24h</Button>
                <Button variant={"b"}>7d</Button>
              </ButtonGroup>
              <Select
                variant={"filled"}
                color={"txt"}
                fontWeight={"medium"}
                placeholder="All chains"
                w={"120px"}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              <Button variant={"b"}>View all</Button>
            </Flex>
          </Flex>
        </Inner>
      </Box>
    </>
  );
}
