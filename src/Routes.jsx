import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Members from "./pages/members/Members";
import Groups from "./pages/groups/Groups";
import Finance from "./pages/finance/Finance";
import School from "./pages/school/School";
import Setting from "./pages/school/School";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />{" "}
      </Route>
      <Route exact path="/members">
        <Members />
      </Route>
      <Route exact path="/groups">
        <Groups />
      </Route>
      <Route exact path="/finance">
        <Finance />
      </Route>
      <Route exact path="/school">
        <School />
      </Route>
      <Route exact path="/setting">
        <Setting />
      </Route>
    </Switch>
  );
};

export default Routes;
