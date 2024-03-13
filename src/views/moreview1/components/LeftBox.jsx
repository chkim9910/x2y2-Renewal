import { SearchIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";

export default function LeftBox() {
  return (
    <>
      <Flex
        w={{ base: "100%", lg: "20%" }}
        mt={"20px"}
        p={{ base: "10px", lg: "20px 16px" }}
        border={"1px solid"}
        borderColor={"tab.200"}
        borderRadius={"20px"}
        flexDir={"column"}
      >
        <Accordion allowMultiple={true}>
          <AccordionItem
            border={"none"}
            borderBottom={"1px solid"}
            borderColor={"tab.200"}
            className="Status"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"18px"}
                  fontWeight={600}
                >
                  Status
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={12}
              display={"flex"}
              gap={"10px"}
              flexWrap={"wrap"}
            >
              <Button variant={"f"}>All</Button>
              <Button variant={"b"}>Buy now</Button>
              <Button variant={"b"}>Live auction</Button>
              <Button variant={"b"}>Not for sale</Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            border={"none"}
            borderBottom={"1px solid"}
            borderColor={"tab.200"}
            className="Price"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"18px"}
                  fontWeight={600}
                >
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={12} display={"flex"} flexDir={"column"}>
              <Flex alignItems={"center"} gap={"10px"} mb={"10px"}>
                <Input variant={"filled"} placeholder="Min" flex={1} minW={0} />
                <Text>to</Text>
                <Input variant={"filled"} placeholder="Max" flex={1} minW={0} />
                <Select
                  variant={"filled"}
                  placeholder="ETH"
                  borderRadius={"16px"}
                  h={"42px"}
                >
                  <option>wETH</option>
                  <option>RARI</option>
                  <option>DAI</option>
                  <option>USDC</option>
                  <option>ASH</option>
                </Select>
              </Flex>
              <Button variant={"f"} h={"47px"}>
                Apply
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            border={"none"}
            borderBottom={"1px solid"}
            borderColor={"tab.200"}
            className="Marketplace"
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"18px"}
                  fontWeight={600}
                >
                  Marketplace
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={12}
              display={"flex"}
              flexDir={"column"}
              gap={"12px"}
            >
              <Checkbox>Rarible</Checkbox>
              <Checkbox>OpenSea</Checkbox>
              <Checkbox>x2y2</Checkbox>
              <Checkbox>LookRare</Checkbox>
              <Checkbox>SudoSwap</Checkbox>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none"} className="Properties">
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"18px"}
                  fontWeight={600}
                >
                  Properties
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={12}>
              <InputGroup
                className="search"
                minW={"250px"}
                flex={1}
                mr={"16px"}
                mb={"16px"}
              >
                <InputLeftElement pointerEvents="none">
                  <Icon as={SearchIcon} color="tab.300" />
                </InputLeftElement>
                <Input
                  paddingLeft={"40px"}
                  variant="filled"
                  placeholder="Search by traits"
                />
              </InputGroup>

              <AccordionItem
                border={"none"}
                borderBottom={"1px solid"}
                borderColor={"tab.200"}
              >
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Body
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border={"none"}
                borderBottom={"1px solid"}
                borderColor={"tab.200"}
              >
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Head
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border={"none"}
                borderBottom={"1px solid"}
                borderColor={"tab.200"}
              >
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Right Flipper
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border={"none"}
                borderBottom={"1px solid"}
                borderColor={"tab.200"}
              >
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Skin
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </>
  );
}
