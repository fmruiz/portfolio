import React from "react";
import "./styles.css";

// components
import { Navbar } from "./Navbar/Navbar";

export const Homepage = () => (
  <div className={`homepage__container`}>
    <Navbar color={"black"} />
  </div>
);
