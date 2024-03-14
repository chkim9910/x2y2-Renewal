import { Box, Flex } from "@chakra-ui/react";
import TopLeftBox from "./components/TopLeftBox";
import TopRightBox from "./components/TopRightBox";
import BottomCards from "./components/BottomCard";
import Bottom from "./components/Bottom";

export default function Moreview2() {
  return (
    <>
      <Flex
        className="top"
        h={"100%"}
        flex={1}
        mt={"80px"}
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Flex
          flexDir={"column"}
          w={{ base: "100%", lg: "65%" }}
          alignItems={"center"}
        >
          <TopLeftBox />
          <TopRightBox display={{ base: "block", lg: "none" }} />
          <Bottom />
        </Flex>
        <TopRightBox display={{ base: "none", lg: "block" }} />
      </Flex>
      <Box className="bottom">
        <BottomCards />
      </Box>
    </>
  );
}
