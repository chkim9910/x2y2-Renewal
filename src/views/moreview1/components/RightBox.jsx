import { Box, Grid, GridItem } from "@chakra-ui/react";
import RightBoxCard from "./RightBoxCard";

export default function RightBox() {
  return (
    <>
      <Box flex={1} mt={"20px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            "2sm": "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
            "3xl": "repeat(5, 1fr)",
          }}
          gridTemplateRows={"3, 1fr"}
          gap={4}
        >
          <RightBoxCard>
            <GridItem w="100%" h="100%"></GridItem>
            <GridItem w="100%" h="100%"></GridItem>
            <GridItem w="100%" h="100%"></GridItem>
            <GridItem w="100%" h="100%"></GridItem>
            <GridItem w="100%" h="100%"></GridItem>
          </RightBoxCard>
        </Grid>
      </Box>
    </>
  );
}
