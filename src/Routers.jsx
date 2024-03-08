import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Layout from "./components/layout/Layout";
import Moreview1 from "./views/moreview1/Moreview1";
import Moreview2 from "./views/moreview2/Moreview2";
// import LayoutNone from "./components/layout/LayoutNone";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/moreview1" element={<Moreview1 />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/moreview2" element={<Moreview2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
