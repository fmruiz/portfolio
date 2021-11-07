import React, { Fragment } from "react";
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
        <Homepage/>
        <Skills />
        <Experience />
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default App;
