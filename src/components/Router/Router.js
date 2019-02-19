import { Switch, Route } from "react-router-dom";
import React from "react";

import Photos from "../Photos";
import Favorites from "../Favorites";

export default function() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Photos} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
}
