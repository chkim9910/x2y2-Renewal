import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink } from "@chakra-ui/react";
import work from "../../../assets/images/moreview1/cards/card1.png";
// import opensea from "../../../assets/images/comm/opensea-logo.png";
// import ether from "../../../assets/images/comm/ethereum.png";
// import etherscan from "../../../assets/images/comm/etherscan.png";
// import eye from "../../../assets/images/comm/eye.png";
// import f5 from "../../../assets/images/comm/f5.png";

// import Title2 from "./Title2";
// import TopRightBox from "./TopRightBox";

export default function TopLeftBox() {
  return (
    <>
      <Flex
        className="left"
        w={{ base: "100%", lg: "65%" }}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Box
          display={{ base: "flex", lg: "block" }}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Box
            className="img"
            bg={`url(${work}) no-repeat 50% 50% / cover`}
            h={"550px"}
            w={"550px"}
            borderRadius={"20px"}
            mb={"20px"}
          ></Box>
          <ButtonGroup>
            <Button variant={"b"}>Overview</Button>
            <Button variant={"b"}>Properties</Button>
            <Button variant={"b"}>Bids</Button>
            <Button variant={"b"}>Activity</Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
}
