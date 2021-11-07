import React, { Fragment } from "react";
import Experience from "./components/Experience";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Homepage/>
        <Experience />
      </Layout>
    </Fragment>
  );
};

export default App;
