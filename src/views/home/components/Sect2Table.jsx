import {
  Flex,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import checked from "../../../assets/images/comm/checked-blue.svg";

export default function Sect2Table(props) {
  return (
    <>
      <TableContainer
        className="hot-collections"
        w={"100%"}
        m={{ base: "0 auto", "2sm": 0 }}
        display={props.display}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th w={"10%"}>Rank</Th>
              <Th minW={"250px"}>Collection</Th>
              <Th isNumeric>Floor Price</Th>
              <Th isNumeric>Volume</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.content.map((item, index) => (
              <Tr
                key={index}
                transition={"all, 0.3s"}
                _hover={{ background: "tab.100" }}
              >
                <Td>{item.rank}</Td>
                <Td>
                  <Flex alignItems={"center"} gap={{ base: "6px", md: "18px" }}>
                    <Img
                      src={item.profile}
                      alt={item.name}
                      w={"60px"}
                      borderRadius={"50%"}
                    />
                    <ChakraLink as={ReactRouterLink} to="/moreview1">
                      {item.name}
                    </ChakraLink>
                    <Img src={checked} alt="checked" w={"18px"} />
                  </Flex>
                </Td>
                <Td isNumeric>
                  {item.floor}
                  {isNaN(item.floor) ? null : <span> ETH</span>}
                </Td>
                <Td isNumeric>{item.volume} ETH</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
