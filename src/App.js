import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Gifts from "./views/Gifts";
import Veracruz from "./views/Veracruz";
import Instagrid from "./views/Instagrid";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/gifts" component={Gifts} />
        <Route exact path="/location" component={Veracruz} />
        {/* <Route exact path="/reserve" component={Reserve} /> */}
        <Route exact path="/insta" component={Instagrid} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
