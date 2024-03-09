// import { mode } from "@chakra-ui/theme-tools";
export const selectStyles = {
  components: {
    Select: {
      baseStyle: {
        field: {
          // w: "90px",
          _hover: {
            bg: "black.800",
          },
        },
      },
      variants: {
        filled: () => ({
          field: {
            // w: "90px",
            bg: "tab.100",
            fontSize: "14px",
            cursor: "pointer",
            _focusVisible: {
              borderColor: "none",
              bg: "tab.100",
            },
            _hover: {
              bg: "tab.200",
            },
          },
          icon: {
            color: "black",
            size: "md",
          },
        }),
      },
    },
  },
};
