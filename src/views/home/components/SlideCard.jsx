import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink } from "@chakra-ui/react";
// import checked from "../../../assets/images/comm/checked-blue.svg";

export default function SlideCard(props) {
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
        backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${props.img})`}
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
          bg={"white.200"}
          borderRadius={"20px"}
          backdropFilter={"blur(10px)"}
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
            gap={"16px"}
            color={"white"}
            position={"relative"}
            zIndex={1}
          >
            <Flex gap={"5px"} alignItems={"center"} justifyContent={"center"}>
              <Heading
                fontSize={{ base: "34px", "2sm": "40px" }}
                fontWeight={600}
                className="name"
                lineHeight={1}
              >
                {props.name}
              </Heading>
              {/* <Img src={checked} alt="checked" width={"24px"} /> */}
            </Flex>
            <Text
              className="desc"
              fontSize={"15px"}
              fontWeight={400}
              color={"white.800"}
            >
              {props.desc}
            </Text>
            <Text
              className="floor"
              fontSize={"15px"}
              fontWeight={400}
              color={"white.800"}
            >
              Floor: {props.floor} ETH
            </Text>
            <ButtonGroup>
              <Button variant={"c"} fontSize={{ base: "14px", md: "16px" }}>
                Explore Collection
              </Button>
              <Button variant={"d"} fontSize={{ base: "14px", md: "16px" }}>
                Follow on X
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Flex>
      {/* </ChakraLink> */}
    </>
  );
}
