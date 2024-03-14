import { Box, Button, Flex, Img } from "@chakra-ui/react";
import Inner from "../../components/comm/Inner";
import bg from "../../assets/images/moreview1/profile/big-profile.png";
import profile from "../../assets/images/moreview1/profile/small-profile.gif";
import icon1 from "../../assets/images/comm/svg-global-white.png";
import icon2 from "../../assets/images/comm/svg-gobbler-white.png";
import icon3 from "../../assets/images/comm/twitter-logo-white.png";
import TopTxtBox from "./components/TopTxtBox";
import BottomBox from "./components/BottomBox";
import RightBox from "./components/RightBox";
import LeftBox from "./components/LeftBox";

export default function Moreview1() {
  return (
    <>
      <Inner m={{ base: "50px 0", lg: "80px 0" }}>
        <Box className="top">
          <Box
            className="bg"
            h={"250px"}
            bg={`url(${bg}) no-repeat 50% 50% / cover`}
            borderRadius={"20px"}
            // mt={"80px"}
            position={"relative"}
          >
            <Box
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              bg={"black.100"}
              borderRadius={"20px"}
            >
              <Box
                className="top-btn"
                position={"absolute"}
                bottom={"16px"}
                right={"16px"}
              >
                <Button variant={"e"} borderRadius={"10px 0 0 10px"}>
                  <Img src={icon1} alt="icon1" w={"24px"} />
                </Button>
                <Button variant={"e"} borderRadius={0}>
                  <Img src={icon2} alt="icon2" w={"24px"} />
                </Button>
                <Button variant={"e"} borderRadius={"0 10px 10px 0 "}>
                  <Img src={icon3} alt="icon3" w={"24px"} />
                </Button>
              </Box>
              <Box
                className="profile"
                w={{ base: "80px", md: "100px" }}
                h={{ base: "80px", md: "100px" }}
                bg={`url(${profile}) no-repeat 0 0 /cover`}
                borderRadius={"20px"}
                position={"absolute"}
                bottom={"-30px"}
                left={"16px"}
              ></Box>
            </Box>
          </Box>
          <TopTxtBox />
        </Box>
        <Box className="bottom" mt={"20px"}>
          <BottomBox />
          <Flex h={"100%"} gap={"16px"} flexDir={{ base: "column", lg: "row" }}>
            <LeftBox />
            <RightBox />
          </Flex>
        </Box>
      </Inner>
    </>
  );
}
