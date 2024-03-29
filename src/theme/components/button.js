import { mode } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "20px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        bg: "tab.100",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
        _hover: {
          bg: "tab.200",
        },
      },
      variants: {
        a: () => ({
          color: "white",
          fontSize: "14px",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: "14px",
          bg: "black",
          _hover: {
            bg: "black.800",
          },
        }),
        b: () => ({
          borderRadius: "10px",
          bg: "tab.100",
          fontSize: "14px",
          color: "txt",
          fontWeight: "medium",
          _hover: {
            bg: "tab.200",
          },
        }),
        c: () => ({
          borderRadius: "1rem",
          bg: "white",
          fontSize: "14px",
          color: "txt",
          fontWeight: "medium",
          padding: "23px 15px",
          minW: "110px",
          _hover: {
            bg: "white.800",
          },
        }),
        d: () => ({
          borderRadius: "1rem",
          bg: "white.200",
          fontSize: "14px",
          color: "white",
          fontWeight: "medium",
          padding: "23px 15px",
          minW: "110px",
          lineHeight: 0,
          _hover: {
            bg: "white.300",
          },
        }),
        e: () => ({
          borderRadius: "10px",
          bg: "black.200",
          fontSize: "14px",
          color: "txt",
          fontWeight: "medium",
          padding: "12px",
          _hover: {
            bg: "black.300",
          },
        }),
        f: () => ({
          borderRadius: "10px",
          bg: "black",
          fontSize: "14px",
          color: "white",
          fontWeight: "medium",
          _hover: {
            bg: "black.800",
          },
        }),
        icon0: () => ({
          borderRadius: "40px",
          width: "40px",
          bg: "tab.100",
          fontSize: "14px",
          padding: 0,
          color: "txt",
          fontWeight: "medium",
          _hover: {
            bg: "tab.200",
          },
        }),
        icon: () => ({
          borderRadius: "10px",
          color: "black",
          fontSize: "24px",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: "14px",
          bg: "rgba(0,0,0,0)",
          _hover: {
            // bg: "tab.200",
            // dropFilter: "blur(5px)",
          },
        }),
        outline: () => ({
          borderRadius: "0",
          bg: ["red", "brand.200", "brand.900", "white"],
          // color: ['white', null, null, 'brand.500'],
          color: { sm: "white", lg: "brand.500" },
        }),
        brand: (props) => ({
          bg: mode("brand.500", "brand.400")(props),
          color: "yellow.500",
          _focus: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.600", "brand.400")(props),
          },
        }),
        darkBrand: (props) => ({
          bg: mode("brand.900", "brand.400")(props),
          // color: 'white',
          color: "yellow.500",
          _focus: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.800", "brand.400")(props),
          },
        }),
        lightBrand: (props) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        light: (props) => ({
          bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        action: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.400")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.400")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.200", "brand.400")(props),
          },
        }),
        setup: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.400")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("secondaryGray.400", "transparent")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.400")(props),
          },
          _active: { bg: mode("transparent", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.100", "brand.400")(props),
          },
        }),
      },
    },
  },
};
