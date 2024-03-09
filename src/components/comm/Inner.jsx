// import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function Inner(props) {
  return (
    <Box
      className="inner"
      p={{ base: "0 1rem", md: "0 28px", lg: "0 2rem" }}
      m={"0 auto"}
      h={"100%"}
      minW={"320px"}
      alignItems={"center"}
      display={props.display}
      justifyContent={props.justifyContent}
      gap={props.gap}
      position={props.position}
      zIndex={props.zIndex}
      margin={props.m}
    >
      {props.children}
    </Box>
  );
}
