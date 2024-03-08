import { mode } from "@chakra-ui/theme-tools";

const Card = {
  baseStyle: (props) => ({
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("#ffffff", "navy.800")(props),
    backgroundClip: "border-box",
    "--card-shadow": "--chakra-shadows-none",
  }),
  variants: {
    inner: () => ({
      p: ["1rem", null, "28px", "2rem", null, null],
      // p: { sm: "1rem", md: "28px", lg: "2rem" },
      m: "0px auto",
    }),
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
