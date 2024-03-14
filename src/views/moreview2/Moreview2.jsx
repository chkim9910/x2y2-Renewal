import { Box, Flex } from "@chakra-ui/react";
// import Inner from "../../components/comm/Inner";
import BottomBox from "./components/BottomBox";
import TopLeftBox from "./components/TopLeftBox";
import TopRightBox from "./components/TopRightBox";

export default function Moreview2() {
  return (
    <>
      <Flex className="top" h={"100%"} flex={1} mt={"80px"}>
        <TopLeftBox />
        <TopRightBox />
      </Flex>
      <Box className="bottom">
        <BottomBox />
      </Box>
    </>
  );
}
