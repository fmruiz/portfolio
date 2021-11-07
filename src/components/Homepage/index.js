import React from "react";
import "./styles.css";

// components
import { Navbar } from "./Navbar/Navbar";
import { Main } from "./Main/Main";
import { Social } from "./Social/Social";

const Homepage = () => (
  <div className={`homepage__container`}>
    <Navbar color={"black"} />
    <Main color={"black"} />
    <Social color={"black"} />
  </div>
);

export default Homepage;
