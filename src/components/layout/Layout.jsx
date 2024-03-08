import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Card from "../card/Card";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Box className="wrap">
        <Header />
        <Box className="main">
          <Card variant="inner" className="inner">
            <Outlet />
          </Card>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
