import { Box, Flex, Link, Select, Text } from "@chakra-ui/react";
import Inner from "../comm/Inner";

export default function Footer() {
  return (
    <>
      <Box className="footer" h={"70px"}>
        <Inner
          display={"flex"}
          justifyContent={"center"}
          gap={{ base: "10px", md: "40px" }}
        >
          <Text fontSize={"14px"}>© 2021 - 2024 X2Y2</Text>
          <Flex
            className={"center"}
            fontSize={"14px"}
            gap={{ base: "10px", md: "24px" }}
          >
            <Link>
              <Text>Terms</Text>
            </Link>
            <Link>
              <Text>Docs</Text>
            </Link>
            <Link>
              <Text>Privacy</Text>
            </Link>
          </Flex>
          <Select
            variant="filled"
            placeholder="Light"
            display={{ base: "none", md: "block" }}
          >
            <option value="option2">Dark</option>
          </Select>
        </Inner>
      </Box>
    </>
  );
}
