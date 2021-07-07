import React from "react";
import { Navigation } from "../../components/components_index";
import { Route, Switch, Redirect } from "react-router-dom";

import { StocksPage } from "../StocksPage/StocksPage";
import { FindingsPage } from "../FindingsPage/FindingsPage";
import { HypothesisPage } from "../HypothesisPage/HypothesisPage";
import { IntroPage } from "../IntroPage/IntroPage";

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/hypothesis" component={HypothesisPage} />
          <Route exact path="/stocks">
            <Redirect to="/stocks/GME" />
          </Route>
          <Route path="/stocks/:symbol" component={StocksPage} />
          <Route exact path="/findings" component={FindingsPage} />
        </Switch>
      </div>
    </div>
  );
};
