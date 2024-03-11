import { Box, Button, ButtonGroup, Flex, Select, Text } from "@chakra-ui/react";
import Sect1Slide from "./components/Sect1Slide";
import Inner from "../../components/comm/Inner";
// import { position } from "polished";
import sect1Bg from "../../assets/images/home/sect1/slide1.png";
import Title from "../../components/comm/Title";
import Sect2Table from "./components/Sect2Table";
import { table1 } from "./contents/sect2table1";
import { table2 } from "./contents/sect2table2";
import Sect3Card from "./components/Sect3Card";
import { card1, card2 } from "./contents/sect3cards";
import sect3bg from "../../assets/images/home/sect3/bg.jpg";
import Sect4Card from "./components/Sect4Card";

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
          <Box
            className="upper"
            display={{ base: "block", md: "flex" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Title>Hot Collections</Title>
            <Flex className="btn-box" gap={"14px"} my={{ base: "10px", md: 0 }}>
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
          </Box>
          <Flex gap={"20px"}>
            <Sect2Table content={table1} />
            <Sect2Table
              content={table2}
              display={{ base: "none", "xl1-2": "block" }}
            />
          </Flex>
        </Inner>
      </Box>
      <Box className="sect3">
        <Inner m={{ base: "50px 0", lg: "80px 0" }}>
          <Box
            bg={`url(${sect3bg}) no-repeat 0% 0% / cover `}
            borderRadius={"20px"}
            position={"relative"}
          >
            <Inner position={"relative"} zIndex={1}>
              <Flex gap={"40px"} display={{ base: "block", lg: "flex" }}>
                <Sect3Card
                  content={card1}
                  flex={1}
                  justifyContent={"space-between"}
                />
                <Sect3Card
                  content={card2}
                  flex={1.5}
                  justifyContent={"space-between"}
                />
              </Flex>
            </Inner>
            <Box
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              backgroundColor="rgba(0, 0, 0, .2)"
              backdropFilter="saturate(180%) blur(15px)"
              zIndex={0}
              borderRadius={"20px"}
            ></Box>
          </Box>
        </Inner>
      </Box>
      <Box className="sect4">
        <Inner m={{ base: "50px 0", lg: "80px 0" }}>
          <Title>Spotlight</Title>
          <Sect4Card />
        </Inner>
      </Box>
    </>
  );
}
