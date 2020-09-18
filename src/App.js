import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import asyncC from "./utils/asyncComponent"

const Index = asyncC(() => import("./pages/Index/Index"))
const Details = asyncC(() => import("./pages/Details/Details"))
const Song = asyncC(() => import("./pages/Song/Song"))


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/song/:id" component={Song}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
