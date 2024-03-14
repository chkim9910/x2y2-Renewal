import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Img,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import checked from "../../../assets/images/comm/checked-yellow.svg";
import profile from "../../../assets/images/moreview1/profile/small-profile.gif";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosMore, IoMdHeartEmpty } from "react-icons/io";
import { LuShare, LuRefreshCw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

export default function TopRightBox() {
  return (
    <>
      <Box className="right" flex={1} mt={"20px"} maxW={"448px"}>
        <Flex className="top" flexDir={"column"} gap={"30px"} mb={"20px"}>
          <Flex className="txt-box" flexDir={"column"} gap={"6px"}>
            <Flex className="author" gap={"8px"} alignItems={"center"}>
              <Img
                src={profile}
                alt="profile"
                borderRadius={"6px"}
                w={"24px"}
                h={"24px"}
              />
              <Text fontWeight={700}>The Weirdo Ghost Gang</Text>
              <Img src={checked} alt="checked" w={"18px"} />
            </Flex>
            <Heading className="work-name">Lil Ghost #2128</Heading>
            <Flex gap={"8px"} alignItems={"center"}>
              <Text color={"tab.300"}>Creator Fee</Text>
              <Box
                w={"32px"}
                h={"20px"}
                borderRadius={"8px"}
                bg={"#FEDA03"}
                textAlign={"center"}
                lineHeight={"20px"}
              >
                <Text fontSize={"13px"}>5%</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex className="addr-box" gap={"10px"}>
            <Box
              w={"40px"}
              h={"40px"}
              bgImage={"linear-gradient(160deg, #00FFF2, #F200FF)"}
              borderRadius={"50%"}
            ></Box>
            <Box>
              <Text color={"tab.300"} fontWeight={500} lineHeight={1.2}>
                CONTRACT ADDRESS
              </Text>
              <ChakraLink as={ReactRouterLink} to="/">
                <Flex alignItems={"center"} gap={"5px"}>
                  <Text>0x9401…d197</Text>
                  <Icon as={HiArrowTopRightOnSquare} />
                </Flex>
              </ChakraLink>
            </Box>
          </Flex>
        </Flex>
        <Flex
          className="center"
          gap={"50px"}
          justifyContent={"space-between"}
          pt={"20px"}
          borderTop={"1px solid"}
          borderColor={"tab.200"}
        >
          <ButtonGroup>
            <Button
              leftIcon={<IoMdHeartEmpty />}
              colorScheme="teal"
              variant="b"
            >
              0
            </Button>
            <Button leftIcon={<LuShare />} colorScheme="teal" variant="b">
              Share
            </Button>
            <Button leftIcon={<LuRefreshCw />} colorScheme="teal" variant="b">
              Refresh
            </Button>
          </ButtonGroup>
          <Button variant="icon0" bg={"transparent"}>
            <Icon as={IoIosMore} fontSize={"24px"} />
          </Button>
        </Flex>
        <Box
          className="bottom"
          border={"1px solid"}
          borderColor={"tab.200"}
          borderRadius={"20px"}
          mt={"20px"}
          p={"22px 24px"}
        >
          <Flex className="top" gap={"8px"}>
            <Box bg={"tab.100"} borderRadius={"10px"} p={"20px 10px"} flex={1}>
              <Text fontSize={"13px"} color={"tab.400"}>
                Price
              </Text>
              <Flex alignItems={"flex-end"} gap={"6px"}>
                <Text fontWeight={500}>N/A</Text>
                <Text fontSize={"13px"} color={"tab.300"}>
                  (not listed)
                </Text>
              </Flex>
            </Box>
            <Box bg={"tab.100"} borderRadius={"10px"} p={"20px 10px"} flex={1}>
              <Text fontSize={"13px"} color={"tab.400"}>
                Highest Floor bid
              </Text>
              <Flex>
                <Text fontWeight={500}>0.0031 wETH</Text>
              </Flex>
            </Box>
          </Flex>
          <Text
            fontSize={"13px"}
            color={"tab.400"}
            textAlign={"center"}
            mt={"10px"}
          >
            Last sale price 0.211 ETH
          </Text>
          <Flex className="bottom" mt={"10px"} flexDir={"column"} gap={"10px"}>
            <ButtonGroup display={"flex"}>
              <Button variant={"a"} borderRadius={"16px"} flex={1}>
                Make Offer
              </Button>
              <Button variant={"a"} w={"40px"} borderRadius={"16px"}>
                <Icon as={FaPlus} />
              </Button>
            </ButtonGroup>
            <Button variant={"a"} borderRadius={"16px"} w={"100%"}>
              Place a bid
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
