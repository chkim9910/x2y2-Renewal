import { Box, Button, Flex, IconButton, Image, Input } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import gsap from "gsap";
import Inner from "../comm/Inner";
import logo from "../../assets/images/comm/logo.svg";
import styled from "styled-components";
import { GrCart } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hdHeight = document.querySelector(".header")?.offsetHeight || 0;
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > hdHeight) {
        document.getElementById("header").style.top = "-32px";
      } else {
        document.querySelector(".header").style.top = -scrollPosition + "px";
        setIsScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤 이벤트 핸들러
  const HandleScroll = () => {};

  return (
    <>
      <Box
        className="header"
        h={"80px"}
        position={"fixed"}
        zIndex={100}
        top={0}
        left={0}
        right={0}
        boxShadow={"0 1px 4px 0 rgba(0,0,0,.07)"}
        bgColor={"white"}
        // bgColor={"rgba(255, 255, 255, .2)"}
        // backdropFilter={"saturate(180%) blur(15px)"}
      >
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
