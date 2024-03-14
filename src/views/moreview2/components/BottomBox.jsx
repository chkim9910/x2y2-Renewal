import { Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
// import RightBoxCard from "../../moreview1/components/RightBoxCard";
import BottomCard from "./Card";
import Inner from "../../../components/comm/Inner";

export default function BottomBox() {
  return (
    <>
      <Flex mt={"50px"}>
        <Inner
          m={0}
          w={"100%"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Heading textAlign={"center"} fontSize={"32px"} mb={"30px"}>
            More from this collection
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              "2sm": "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
              "3xl": "repeat(5, 1fr)",
            }}
            gridTemplateRows={"1, 1fr"}
            gap={4}
            w={"100%"}
          >
            <BottomCard>
              <GridItem w="100%" h="100%"></GridItem>
              <GridItem w="100%" h="100%"></GridItem>
              <GridItem w="100%" h="100%"></GridItem>
              <GridItem w="100%" h="100%"></GridItem>
              <GridItem w="100%" h="100%"></GridItem>
            </BottomCard>
          </Grid>
          <Button variant={"b"} my={"20px"}>
            View Collection
          </Button>
        </Inner>
      </Flex>
    </>
  );
}
