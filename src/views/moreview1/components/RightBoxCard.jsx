import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import checked from "../../../assets/images/comm/checked-blue.svg";
import more from "../../../assets/images/comm/more.png";
import { cardsli } from "../contents/rightboxcards";

export default function RightBoxCard() {
  return (
    <>
      {cardsli.map((item, index) => (
        <ChakraLink key={index} as={ReactRouterLink} to="/moreview2">
          <Box
            padding={"8px"}
            borderRadius={"16px"}
            border={"1px solid"}
            borderColor={"tab.200"}
            // w={"266px"}
            h={"392px"}
          >
            <Flex className="box-inner" flexDir={"column"} h={"100%"}>
              <Box
                className="img"
                bg={`url(${item.img}) no-repeat 50% 50% / cover`}
                borderRadius={"10px"}
                w={"100%"}
                h={"60%"}
                mb={"10px"}
              ></Box>
              <Flex
                className="txt-box"
                flexDir={"column"}
                justifyContent={"space-between"}
                flex={1}
              >
                <Flex
                  className="top"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  //   mb={"10px"}
                >
                  <Flex flexDir={"column"}>
                    <Flex gap={"4px"}>
                      <Text className="author" fontSize={"10px"}>
                        The Weirdo Ghost Gang
                      </Text>
                      <Img src={checked} alt="checked" w={"20px"} />
                    </Flex>
                    <Text
                      className="workTit"
                      fontSize={"16px"}
                      fontWeight={600}
                    >
                      {item.worktit}
                    </Text>
                  </Flex>
                  <Button variant={"icon0"} bg={"transparent"}>
                    <Img src={more} alt="more" />
                  </Button>
                </Flex>
                <Flex
                  className="bottom"
                  borderRadius={"10px"}
                  bg={"tab.100"}
                  w={"100%"}
                  flex={0.8}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                >
                  <Box className="price" fontSize={"13px"} textAlign={"center"}>
                    <Text>Price</Text>
                    <Text>{item.price}</Text>
                  </Box>
                  <Box
                    className="highest-bid"
                    fontSize={"13px"}
                    textAlign={"center"}
                  >
                    <Text>Highest bid</Text>
                    <Text>0.0031 wETH</Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </ChakraLink>
      ))}
    </>
  );
}
