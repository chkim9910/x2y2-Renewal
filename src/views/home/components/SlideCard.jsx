import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
// import checked from "../../../assets/images/comm/checked-blue.svg";

export default function SlideCard(props) {
  console.log(props.desc);
  return (
    <>
      {/* <ChakraLink
        as={ReactRouterLink}
        to="/moreview1"
        position={"relative"}
        display={"flex"}
      > */}
      <Flex
        className="card"
        backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${props.bgImg})`}
        flex={1}
        backgroundPosition={"50% 50%"}
        backgroundSize={"cover"}
        inset={"20px"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100%"}
        // h={{ base: "300px", sm: "380px", md: "400px", lg: "429px" }}
        w={"100%"}
        borderRadius={"20px"}
        p={{ base: "24px", md: "64px 32px" }}
        transition={"all, 0.3s"}
        // _hover={{
        //   backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${props.img})`,
        // }}
      >
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          // bg={"black.100"}
          borderRadius={"20px"}
          backdropFilter={
            props.index === 1 || props.index === 4 || props.index === 7
              ? "blur(5px)"
              : "blur(0)"
          }
        ></Box>
        <Flex
          className="cont-box"
          flexDir={{ base: "column", md: "row" }}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            background={`url(${props.img}) no-repeat 0 0 /cover`}
            w={{
              base: "100%",
              md: "340px",
              "2md": "480px",
              "xl1-2": "540px",
            }}
            h={{ md: "340px", "2md": "480px", "xl1-2": "540px" }}
            flexShrink={0}
            position={"relative"}
            zIndex={1}
            borderRadius={"20px"}
            pt={{ base: "100%", md: 0 }}
            mr={{ base: 0, md: "64px", "2xl": "98px" }}
            mb={{ base: "32px", md: "0px" }}
          ></Box>
          <Flex
            className="text"
            flexDir={"column"}
            gap={{ base: "8px", md: "16px" }}
            // color={"txt"}
            // color={"white"}
            color={props.index === 6 || props.index === 7 ? "txt" : "white"}
            position={"relative"}
            zIndex={1}
            maxW={{ base: "100%", md: "420px" }}
          >
            <Flex
              className="txt-box"
              alignItems={"center"}
              justifyContent={{ base: "center", md: "flex-start" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading
                className="name"
                fontSize={{ base: "30px", sm: "32px", "2sm": "40px" }}
                fontWeight={600}
                lineHeight={1}
                letterSpacing={"-1px"}
              >
                {props.name}
              </Heading>
              {/* <Img src={checked} alt="checked" width={"24px"} /> */}
            </Flex>
            <Flex
              flexDir={"column"}
              gap={{ base: "5px", md: "10px" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Text
                className="desc"
                fontSize={{ base: "14px", md: "15px" }}
                fontWeight={400}
                // color={"white.900"}
                color={
                  props.index === 6 || props.index === 7 ? "txt" : "white.900"
                }
                textAlign={{ base: "center", md: "left" }}
              >
                {props.desc}
              </Text>
              <Text
                className="floor"
                fontSize={{ base: "14px", md: "15px" }}
                fontWeight={400}
                // color={"white.800"}
                color={
                  props.index === 6 || props.index === 7 ? "txt" : "white.800"
                }
              >
                Floor: {props.floor} ETH
              </Text>
              <ButtonGroup mt={{ base: 0, lg: "10px" }}>
                <ChakraLink as={ReactRouterLink} to="/moreview1">
                  <Button variant={"c"} fontSize={{ base: "14px", md: "16px" }}>
                    Explore Collection
                  </Button>
                </ChakraLink>
                <Button variant={"d"} fontSize={{ base: "14px", md: "16px" }}>
                  Follow on X
                </Button>
              </ButtonGroup>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* </ChakraLink> */}
    </>
  );
}
