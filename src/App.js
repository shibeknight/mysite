import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Gifts from "./views/Gifts";
import Veracruz from "./views/Veracruz";
import Reserve from "./views/Reserve";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/gifts" component={Gifts} />
        <Route path="/location" component={Veracruz} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
