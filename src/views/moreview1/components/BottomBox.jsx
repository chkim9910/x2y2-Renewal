import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import filter1 from "../../../assets/images/comm/four-dot.png";
import filter12 from "../../../assets/images/comm/filter-on.png";
import filter2 from "../../../assets/images/comm/nine-dot.png";
import filter22 from "../../../assets/images/comm/f5.png";
import filter3 from "../../../assets/images/comm/filter2.png";
import { useEffect, useState } from "react";

export default function BottomBox() {
  const [toggled, setToggled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const [clicked, setClicked] = useMyContext();
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Flex className="top">
        <Flex flex={1}>
          <Button
            variant={"b"}
            mr={"16px"}
            display={{ base: "none", "2md": "flex" }}
            alignItems={"center"}
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <Icon as={IoChevronBack} mr={"5px"} />
            <Text>Filters</Text>
          </Button>
          <Stack
            className="toggle-box"
            display={{ base: "none", "2md": "flex" }}
            flexDir={"row"}
            alignItems={"center"}
            mr={"16px"}
          >
            <Flex
              className="toggle"
              w={"40px"}
              h={"20px"}
              borderRadius={"40px"}
              bg={toggled ? "black.200" : "black"}
              alignItems={"center"}
              justifyContent={toggled ? "flex-end" : "flex-start"}
              p={"4px"}
              cursor={"pointer"}
              transition={"all linear 0.3s"}
              onClick={() => setToggled(!toggled)}
            >
              <Box
                w={"14px"}
                h={"14px"}
                borderRadius={"50%"}
                bg={toggled ? "black" : "white"}
              ></Box>
            </Flex>
            <Text>Live data</Text>
            <Box
              className="light-big"
              w={"12px"}
              h={"12px"}
              borderRadius={"50%"}
              bg={toggled ? "black.500" : "rgb(40, 184, 51, 0.3)"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              transition={"all linear 0.3s"}
            >
              <Box
                className="light-small"
                w={"6px"}
                h={"6px"}
                borderRadius={"50%"}
                bg={toggled ? "black.800" : "rgb(40, 184, 51)"}
                transition={"all linear 0.3s"}
              ></Box>
            </Box>
          </Stack>
          <InputGroup
            className="search"
            flex={1}
            mr={{ base: "8px", md: "16px" }}
            minW={"60px"}
          >
            <InputLeftElement pointerEvents="none">
              <Icon as={SearchIcon} color="tab.300" />
            </InputLeftElement>
            <Input
              paddingLeft={"50px"}
              variant="filled"
              placeholder="Search by NFTs"
              minW={"60px"}
            />
          </InputGroup>
        </Flex>
        <Flex>
          {windowWidth > 600 ? (
            <Select
              placeholder="Price: low to high"
              mr={"16px"}
              variant={"filled"}
            >
              <option value="option1">Price: hight to low</option>
              <option value="option2">Recently listed</option>
            </Select>
          ) : (
            <Button variant={"b"} borderRadius={"10px 0 0 10px"}>
              <Img src={filter3} alt="filter" />
              {/* <Icon as={IoFilter} fontSize={"18px"} /> */}
            </Button>
          )}
          <ButtonGroup>
            <Button
              variant={"b"}
              borderRadius={{ base: "0", "2sm": "10px 0 0 10px" }}
            >
              {windowWidth > 890 ? (
                <Img src={filter1} alt="filter" />
              ) : (
                <Img src={filter12} alt="filter" />
              )}
            </Button>
            <Button
              variant={"b"}
              borderRadius={"0 10px 10px 0 "}
              marginInlineStart={0}
            >
              {windowWidth > 890 ? (
                <Img src={filter2} alt="filter" />
              ) : (
                <Img src={filter22} alt="filter" />
              )}
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </>
  );
}
