import { Box, Text } from "@chakra-ui/react";

export default function Title(props) {
  return (
    <>
      <Box className="title">
        <Text fontSize={{ base: "30px", lg: "32px" }} fontWeight={"bold"}>
          {props.children}
        </Text>
      </Box>
    </>
  );
}
