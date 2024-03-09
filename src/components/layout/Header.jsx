import { Box, Button, Flex, IconButton, Image, Input } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Inner from "../comm/Inner";
import logo from "../../assets/images/comm/logo.svg";
import styled from "styled-components";
import { GrCart } from "react-icons/gr";
export default function Header() {
  return (
    <>
      <Box className="header" h={"80px"}>
        <Inner
          display="flex" /* justifyContent="space-between" */
          gap={{ base: "20px", lg: "50px", "2xl": "150px" }}
        >
          <Flex
            className="left-box"
            gap={{ base: "20px", "2xl": "40px" }}
            alignItems={"center"}
            flex={1}
          >
            <Box className="logo" w={"fit-content"} minW={"110px"}>
              <ChakraLink as={ReactRouterLink} to="/">
                <Image src={logo} alt="x2y2" w={"110px"} />
              </ChakraLink>
            </Box>
            <Box
              className="center-box"
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              flex={1}
            >
              <Box className="search" minW={"250px"} flex={1}>
                <Input
                  variant="filled"
                  placeholder="Search for collections, NFTs or users"
                  _focusVisible={("border-color", "none")}
                />
              </Box>
              <Box className="gnb" display={{ base: "none", lg: "block" }}>
                <ChakraLink as={ReactRouterLink} to="/">
                  <TextStyle>Collections</TextStyle>
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/">
                  <TextStyle>Reward</TextStyle>
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/">
                  <TextStyle>Loan</TextStyle>
                </ChakraLink>
              </Box>
            </Box>
          </Flex>
          <Flex
            className="right-box"
            alignItems={"center"}
            gap={{ base: "10px", lg: "0" }}
          >
            <Button
              variant={"a"}
              display={{ base: "none", sm: "block" }}
              mr={{ base: 0, lg: "10px" }}
            >
              Connect wallet
            </Button>
            <IconButton variant={"icon"} icon={<GrCart />} />
            <ChakraLink
              className="menu"
              href="/"
              h={"40px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Flex
                flexDir={"column"}
                gap={"6px"}
                display={{ base: "flex", lg: "none" }}
              >
                <MenuStyle></MenuStyle>
                <MenuStyle></MenuStyle>
                <MenuStyle></MenuStyle>
              </Flex>
            </ChakraLink>
          </Flex>
        </Inner>
      </Box>
    </>
  );
}

const TextStyle = styled.span`
  color: rgba(22, 22, 26, 0.9);
  font-weight: 700;
  margin-left: 24px;
`;

const MenuStyle = styled.div`
  width: 30px;
  height: 2px;
  background: #000;
`;
