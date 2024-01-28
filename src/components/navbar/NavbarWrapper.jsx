/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import "./NavbarWrapper.css";

import Navbar from "./Navbar";
import NavbarExpand from "./NavbarExpand";
import LandingOverlay from "../landing/LandingOverlay";

function NavbarWrapper({focus, overlay}) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if(expanded) {
      document.body.classList.add("no-scroll");
    }else {
      document.body.classList.remove("no-scroll");
    }
  }, [expanded])

  return (
    <div id="nav-wrapped">
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      { overlay && <LandingOverlay /> }
      <NavbarExpand expanded={expanded} setExpanded={setExpanded} focus={focus} />
    </div>
  );
}

export default NavbarWrapper;
