import React, { Fragment } from "react";
import { Homepage } from "./components/Homepage/Homepage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Homepage color={"black"}/>
      </Layout>
    </Fragment>
  );
};

export default App;
