import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
// import Inner from "../../../components/comm/Inner";
import checked from "../../../assets/images/comm/checked-yellow.svg";
import share from "../../../assets/images/comm/share.png";
import more from "../../../assets/images/comm/more.png";
import paste from "../../../assets/images/comm/paste.png";

export default function TopTxtBox() {
  const elLi = [
    { title: "Floor", value: "1.3 ETH" },
    { title: "Volume", value: "137.3 ETH" },
    { title: "Items", value: "5.56K " },
    { title: "Owners", value: "1.85K" },
  ];
  const elLi2 = [
    { title: "Blockchain", value: "Ethereum" },
    { title: "Address", value: "0x9401...d197" },
  ];
  return (
    <>
      <Flex
        m={"40px 0 0"}
        pb={"16px"}
        borderBottom={"1px solid"}
        borderColor={"tab.200"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: 0 }}
      >
        <Box className="left-box" w={"100%"}>
          <Flex alignItems={"center"} gap={"16px"}>
            <Heading
              className="author"
              lineHeight={1.2}
              letterSpacing={{ base: "-0.5px", md: 0 }}
              fontSize={{ base: "30px", lg: "32px" }}
            >
              The Weirdo Ghost Gang
            </Heading>
            <Img src={checked} alt="checked" />
          </Flex>
          <Text
            className="by"
            mt={"10px"}
            letterSpacing={{ base: "-0.3px", md: 0 }}
          >
            Created by 0x89B3…81D3
          </Text>
          <Text
            className="desc"
            lineHeight={1.2}
            letterSpacing={{ base: "-0.3px", md: 0 }}
          >
            We are the ghost, your nightmare, your daydream
          </Text>
          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            h={{ base: "120px", md: "150px" }}
          >
            <ButtonGroup className="top" mt={"16px"}>
              <Button variant={"a"}>Place floor bid</Button>
              <Button variant={"icon0"}>
                <Img src={share} alt="share" />
              </Button>
              <Button variant={"icon0"}>
                <Img src={more} alt="share" />
              </Button>
            </ButtonGroup>
            <ButtonGroup className="bottom">
              <Button variant={"b"}>Items</Button>
              <Button variant={"b"}>Offers</Button>
              <Button variant={"b"}>Analatics</Button>
              <Button variant={"b"}>Activity</Button>
            </ButtonGroup>
          </Flex>
        </Box>
        <Box
          className="right-box"
          p={"24px"}
          border={"1px solid"}
          borderColor={"tab.200"}
          borderRadius={"20px"}
          w={{ base: "100%", md: "auto" }}
        >
          <UnorderedList
            className="top"
            ms={0}
            w={{ base: "100%", md: "230px" }}
            mb={"10px"}
          >
            {elLi.map((item, index) => (
              <ListItem
                className={`el${index + 1}`}
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Text>{item.title}</Text>
                <Text>{item.value}</Text>
              </ListItem>
            ))}
          </UnorderedList>
          <UnorderedList
            className="bottom"
            ms={0}
            w={{ base: "100%", md: "230px" }}
            pt={"10px"}
            borderTop={"1px solid"}
            borderColor={"tab.200"}
          >
            {elLi2.map((item, index) => (
              <ListItem
                className={`el${index + 1}`}
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
                // position={item.title === "Address" ? "relative" : "none"}
                // left={item.title === "Address" ? "22px" : 0}
              >
                <Text>{item.title}</Text>
                <Flex>
                  <Text>{item.value}</Text>
                  <Button
                    variant={"icon0"}
                    display={item.title === "Address" ? "block" : "none"}
                    bg={"transparent"}
                    textAlign={"center"}
                    minW={"auto"}
                    w={"auto"}
                    h={"auto"}
                  >
                    <Img src={paste} alt="paste" />
                  </Button>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
          <Box className="bottom"></Box>
        </Box>
      </Flex>
    </>
  );
}
