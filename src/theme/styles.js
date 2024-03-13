import { mode } from "@chakra-ui/theme-tools";
import { lighten } from "polished";

export const globalStyles = {
  colors: {
    yellow: {
      base: "#FFB547",
      100: lighten(0.2, "#FFB547"),
    },
    brand: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#11047A",
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#7551FF",
      300: "#7551FF",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    brandTabs: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#422AFB",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "rgba(21, 22, 26, 0.1)",
      200: "rgba(21, 22, 26, 0.2)",
    },
    txt: "#121212",
    tab: {
      color: "#545454",
      100: "rgba(18, 18, 18, 0.04)",
      200: "rgba(22, 22, 26, 0.1)",
      300: "rgba(22, 22, 26, 0.4)",
      400: "rgba(22, 22, 26, 0.6)",
      500: "rgba(22, 22, 26, 0.9)",
      600: "rgba(22, 22, 26)",
    },
    white: {
      100: "rgba(255, 255, 255, 0.1)",
      200: "rgba(255, 255, 255, 0.2)",
      300: "rgba(255, 255, 255, 0.3)",
      400: "rgba(255, 255, 255, 0.4)",
      500: "rgba(255, 255, 255, 0.5)",
      600: "rgba(255, 255, 255, 0.6)",
      700: "rgba(255, 255, 255, 0.7)",
      800: "rgba(255, 255, 255, 0.8)",
      900: "rgba(255, 255, 255, 0.9)",
      default: "rgba(255, 255, 255)",
    },
    black: {
      100: "rgba(0, 0, 0, 0.1)",
      200: "rgba(0, 0, 0, 0.2)",
      300: "rgba(0, 0, 0, 0.3)",
      400: "rgba(0, 0, 0, 0.4)",
      500: "rgba(0, 0, 0, 0.5)",
      600: "rgba(0, 0, 0, 0.6)",
      700: "rgba(0, 0, 0, 0.7)",
      800: "rgba(0, 0, 0, 0.8)",
      900: "rgba(0, 0, 0, 0.9)",
      default: "rgba(0, 0, 0)",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        minW: "330px",
        bg: mode("white", "navy.900")(props),
        fontFamily: "pretendard",
        // fontFamily: '"Noto Sans KR", "sans-serif"',
        // letterSpacing: "-0.5px",
        fontSize: "16px",
        lineHeight: "1.5",
        color: mode("gray.900", "white")(props),
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: '"Noto Sans KR", "sans-serif"',
      },
      "ul > li": {
        listStyle: "none",
      },
      ".chakra-container": {
        maxWidth: "calc(1280px + var(--chakra-space-4) * 2) !important",
      },
      ".footer .css-1ora5w9": {
        width: "auto !important",
      },
      ".sect2 .css-42b2qy": {
        width: "auto !important",
      },
      ".sect1 .swiper-horizontal": {
        padding: { base: 0, lg: "0 50px" },
      },
      ".sect1 .swiper-button-next": {
        width: "35px",
        height: "100%",
        marginTop: 0,
        top: 0,
        right: 0,
        zIndex: 10,
        bgColor: { base: "transparent", lg: "rgba(255, 255, 255, .3)" },
        backdropFilter: { base: "none", lg: "saturate(180%) blur(15px)" },
        borderRadius: "20px",
        // display: { base: "none", lg: "flex" },
      },
      ".sect1 .swiper-button-prev": {
        width: "35px",
        height: "100%",
        marginTop: 0,
        top: 0,
        left: 0,
        bgColor: { base: "transparent", lg: "rgba(255, 255, 255, .3)" },
        backdropFilter: { base: "none", lg: "saturate(180%) blur(15px)" },
        borderRadius: "20px",
        // display: { base: "none", lg: "flex" },
      },
      ".sect1 .swiper-button-next::after": {
        color: "#3B82F6",
        fontSize: "30px",
        fontWeight: "bold",
      },
      ".sect1 .swiper-button-prev::after": {
        color: "#3B82F6",
        fontSize: "30px",
        fontWeight: "bold",
      },
      ".sect2 .hot-collections .css-1qe9ypl": {
        padding: "15px 10px",
      },
      ".sect2 .hot-collections .css-1zts0j": {
        padding: "15px 10px",
      },
      ".sect2 .hot-collections .css-xumdn4": {
        padding: "20px 10px",
        fontSize: { base: "14px", md: "1rem" },
        fontWeight: "medium",
      },
      ".sect5 .swiper-button-next:after": {
        color: "white",
        fontSize: { base: "30px", md: "36px" },
      },
      ".sect5 .swiper-button-prev:after": {
        color: "white",
        fontSize: { base: "30px", md: "36px" },
      },
      ".bottom .css-s6lr1x": {
        width: "auto !important",
      },
      ".bottom .css-42b2qy": {
        width: "auto !important",
      },
      ".bottom .css-sjcmc2": {
        margin: "0 !important",
      },
      ".bottom .css-uttm9k:hover": {
        bg: "transparent",
      },
      ".bottom .css-uttm9k": {
        p: { base: "12px", lg: "16px" },
      },
    }),
  },
};
