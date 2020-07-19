import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./views/Home";
import About from "./views/About";
import Veracruz from "./views/Veracruz";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/veracruz" component={Veracruz} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
