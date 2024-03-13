import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import checked from "../../../assets/images/comm/checked-blue.svg";

export default function SlideCard(props) {
  return (
    <>
      <ChakraLink as={ReactRouterLink} to="/moreview1">
        <Flex
          className="card"
          backgroundImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${props.img})`}
          backgroundPosition={"50% 50%"}
          backgroundSize={"cover"}
          inset={"20px"}
          alignItems={"flex-end"}
          h={{ base: "300px", sm: "380px", md: "400px", lg: "429px" }}
          w={"100%"}
          borderRadius={"20px"}
          p={"20px"}
          transition={"all, 0.3s"}
          _hover={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${props.img})`,
          }}
        >
          <Box className="text" color={"white"}>
            <Flex gap={"5px"}>
              <Text className="name">{props.name}</Text>
              <Img src={checked} alt="checked" width={"18px"} />
            </Flex>
            <Text
              className="floor"
              fontSize={"14px"}
              fontWeight={400}
              color={"white.800"}
            >
              Floor: {props.floor} ETH
            </Text>
          </Box>
        </Flex>
      </ChakraLink>
    </>
  );
}
