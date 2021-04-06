import React from "react";
import { Route, Switch } from "react-router-native";

import PantryList from '../components/PantryList'

const routes = () => {
  return (
    <Switch>
      <Route path="/welcome" component={PantryList} />
      <Route path="/" />
    </Switch>
  )
}

export default routes