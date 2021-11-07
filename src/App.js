import React, { Fragment } from "react";
// layout
import Layout from "./components/Layout/Layout";
// components
import Homepage from "./components/Homepage";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Homepage/>
        <Skills />
        <Experience />
      </Layout>
    </Fragment>
  );
};

export default App;
