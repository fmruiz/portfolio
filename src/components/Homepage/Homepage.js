import React from "react";
import "./styles.css";

// components
import { Navbar } from "./Navbar/Navbar";
import { Main } from "./Main/Main";

export const Homepage = () => (
  <div className={`homepage__container`}>
    <Navbar color={"black"} />
    <Main color={"black"} />
  </div>
);
