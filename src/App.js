import React, { Fragment } from "react";
import AnimatedCursor from "react-animated-cursor";
// layout
import Layout from "./components/Layout/Layout";
// components
import Homepage from "./components/Homepage";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <AnimatedCursor
          innerSize={10}
          outerSize={8}
          color="35, 35, 35"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Homepage />
        <Skills />
        <Experience />
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default App;
