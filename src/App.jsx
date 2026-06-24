import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteFrame from "./components/layout/SiteFrame";
import MotionSetup from "./components/layout/MotionSetup";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <SiteFrame>
        <MotionSetup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case/:slug" element={<CaseStudy />} />
        </Routes>
      </SiteFrame>
    </BrowserRouter>
  );
}