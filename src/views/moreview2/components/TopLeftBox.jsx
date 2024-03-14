import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Img,
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import work from "../../../assets/images/moreview1/cards/card1.png";
import opensea from "../../../assets/images/comm/opensea-logo.png";
import ether from "../../../assets/images/comm/ethereum.png";
import etherscan from "../../../assets/images/comm/etherscan.png";
import eye from "../../../assets/images/comm/eye.png";
import f5 from "../../../assets/images/comm/f5.png";

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
                      <Th border={"none"}>Name</Th>
                      <Th border={"none"} isNumeric>
                        Price
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr border={"1px solid"} borderColor={"tab.200"}>
                      <ChakraLink as={ReactRouterLink} to="/moreview2">
                        <Td
                          border={"none"}
                          display={"flex"}
                          alignItems={"center"}
                          gap={"3px"}
                        >
                          <Img src={opensea} w={"32px"} />
                          OpenSea
                          <Icon as={FiArrowUpRight} />
                        </Td>
                      </ChakraLink>
                      <Td border={"none"} isNumeric>
                        N/A
                      </Td>
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
                      <Th border={"none"}>USER</Th>
                      <Th border={"none"} textAlign={"center"}>
                        EXPIRES IN
                      </Th>
                      <Th border={"none"} isNumeric>
                        PRICES
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody border={"1px solid"} borderColor={"tab.200"}>
                    <Tr>
                      <Td border={"none"} display={"flex"} gap={"8px"}>
                        <Box
                          w={"20px"}
                          h={"20px"}
                          borderRadius={"50%"}
                          bg={"palevioletred"}
                        ></Box>
                        0x90D6
                      </Td>
                      <Td border={"none"} textAlign={"center"}>
                        9M
                      </Td>
                      <Td border={"none"} isNumeric>
                        0.169 wETH
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Button variant={"b"} w={"100%"} mt={"10px"}>
                See all
              </Button>
            </Box>
            <Box className="royalties">
              <Title2>Royalties</Title2>
              <Text mb={"8px"}>
                Split royalties are automatically deposited into each
                recipient's wallet
              </Text>
              <Flex
                border={"1px solid"}
                borderColor={"tab.200"}
                p={"20px"}
                gap={"8px"}
              >
                <Box
                  w={"20px"}
                  h={"20px"}
                  borderRadius={"50%"}
                  bg={"yellowgreen"}
                ></Box>
                <ChakraLink as={ReactRouterLink} to="/moreview2">
                  0x9401…d197
                </ChakraLink>
              </Flex>
            </Box>
            <Box className="details">
              <Title2>Details</Title2>
              <Box
                border={"1px solid"}
                borderColor={"tab.200"}
                borderRadius={"20px"}
                p={"20px"}
              >
                <List
                  mb={"10px"}
                  display={"flex"}
                  flexDir={"column"}
                  gap={"5px"}
                >
                  <ChakraLink as={ChakraLink} to={"/morview2"}>
                    <ListItem
                      display={"flex"}
                      alignItems={"center"}
                      gap={"8px"}
                    >
                      <Img src={ether} alt="/" w={"30px"} />
                      Ethereum (ERC-721)
                    </ListItem>
                  </ChakraLink>
                  <ChakraLink as={ChakraLink} to={"/morview2"}>
                    <ListItem
                      display={"flex"}
                      alignItems={"center"}
                      gap={"8px"}
                    >
                      <Img src={etherscan} alt="/" w={"30px"} />
                      View on Etherscan
                      <Icon as={FiArrowUpRight} />
                    </ListItem>
                  </ChakraLink>
                  <ChakraLink as={ChakraLink} to={"/morview2"}>
                    <ListItem
                      display={"flex"}
                      alignItems={"center"}
                      gap={"8px"}
                    >
                      <Img src={eye} alt="/" w={"30px"} />
                      Open original
                      <Icon as={FiArrowUpRight} />
                    </ListItem>
                  </ChakraLink>
                </List>
                <List
                  pt={"15px"}
                  borderTop={"1px solid"}
                  borderColor={"tab.200"}
                >
                  <ChakraLink as={ChakraLink} to={"/morview2"}>
                    <ListItem
                      display={"flex"}
                      alignItems={"center"}
                      gap={"15px"}
                    >
                      <Img src={f5} alt="/" />
                      Refresh Metadata
                    </ListItem>
                  </ChakraLink>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
