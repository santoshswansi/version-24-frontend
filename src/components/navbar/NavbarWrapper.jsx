import { useState } from "react";

import "./NavbarWrapper.css";

import Navbar from "./Navbar";
import NavbarExpand from "./NavbarExpand";
import LandingOverlay from "../landing/LandingOverlay";

function NavbarWrapper() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="nav-wrapped">
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      <LandingOverlay />
      <NavbarExpand expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
}

export default NavbarWrapper;
