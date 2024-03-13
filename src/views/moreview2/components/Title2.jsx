import { Heading } from "@chakra-ui/react";

export default function Title2(props) {
  return (
    <>
      <Heading fontSize={"32px"} fontWeight={"medium"} my={"16px"}>
        {props.children}
      </Heading>
    </>
  );
}
