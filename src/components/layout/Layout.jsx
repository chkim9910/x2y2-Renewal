import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Card from "../card/Card";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Box className="wrap" display={"flex"} flexDir={"column"} minH={"100svh"}>
        <Header />
        <Box className="main" flex={1}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
