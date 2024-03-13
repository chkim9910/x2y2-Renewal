import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import work from "../../../assets/images/moreview1/cards/card1.png";

import Title2 from "./Title2";

export default function TopLeftBox() {
  return (
    <>
      <Flex className="left" w={"65%"} flexDir={"column"} alignItems={"center"}>
        <Box>
          <Box
            className="img"
            bg={`url(${work}) no-repeat 50% 50% / cover`}
            h={"550px"}
            w={"550px"}
            borderRadius={"20px"}
            mb={"20px"}
          ></Box>
          <Box className="bottom">
            <ButtonGroup>
              <Button variant={"b"}>Overview</Button>
              <Button variant={"b"}>Properties</Button>
              <Button variant={"b"}>Bids</Button>
              <Button variant={"b"}>Activity</Button>
            </ButtonGroup>
            <Box className="desc">
              <Title2>Description</Title2>
              <Text>
                Lil Pudgys are a collection of 22,222 randomly generated NFTs
                minted on Ethereum.
              </Text>
            </Box>
            <Box className="list">
              <Title2>Listings</Title2>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th border={"none"}>To convert</Th>
                      <Th border={"none"}>into</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr border={"1px solid"} borderColor={"tab.200"}>
                      <Td border={"none"}>inches</Td>
                      <Td border={"none"}>millimetres (mm)</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box className="bids">
              <Title2>Bids</Title2>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th border={"none"}>To convert</Th>
                      <Th border={"none"}>into</Th>
                      <Th border={"none"}>into</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr border={"1px solid"} borderColor={"tab.200"}>
                      <Td border={"none"}>inches</Td>
                      <Td border={"none"}>millimetres (mm)</Td>
                      <Td border={"none"}>millimetres (mm)</Td>
                    </Tr>
                    <Tr colSpan={3}>
                      <Button variant={"b"} w={"100%"}>
                        See all
                      </Button>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box className="royalties">
              <Title2>Royalties</Title2>
              <Text>
                Split royalties are automatically deposited into each
                recipient's wallet
              </Text>
            </Box>
            <Box className="details">
              <Title2>Details</Title2>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
