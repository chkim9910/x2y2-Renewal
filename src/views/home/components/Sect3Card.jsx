import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
// import Inner from "../../../components/comm/Inner";

export default function Sect3Card(props) {
  const content = props.content;
  return (
    <>
      <Box p={{ base: "14px 0", lg: "20px 0" }} flex={props.flex}>
        <Box className="tit-box" color={"white"}>
          <Heading className="title">{content.tit}</Heading>
          <Text className="sub-title">{content.subtit}</Text>
        </Box>
        <Box className="content-box">
          <Flex
            justifyContent={props.justifyContent}
            minH={"99.8px"}
            minW={"278px"}
            alignItems={{ base: "flex-start", sm: "center" }}
            m={"1rem 0"}
            p={"1rem"}
            borderRadius={"20px"}
            backgroundColor="rgba(255, 255, 255, .2)"
            flexDir={{ base: "column", sm: "row" }}
            flexWrap={{ base: "wrap", "xl1-2": "nowrap" }}
            gap={{ base: "20px", md: "32px" }}
            // backdropFilter="saturate(180%) blur(5px)"
          >
            {content.contli.map((item, index) => (
              <Box key={index} color={"white"}>
                <Text className="tit" fontSize={"14px"}>
                  {item.contTit}
                </Text>
                <Text className="cont" fontSize={"24px"} lineHeight={1.2}>
                  {item.cont}
                </Text>
                <Text className="sub" fontSize={"12px"}>
                  {item.contSub}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
        <Flex className="btn-box" gap={"20px"}>
          <Button className="btn-1" variant={"c"}>
            {content.btn1}
          </Button>
          <Button
            className="btn-2"
            variant={"d"}
            display={content.btn2 ? "block" : "none"}
          >
            {content.btn2}
          </Button>
        </Flex>
      </Box>
    </>
  );
}
