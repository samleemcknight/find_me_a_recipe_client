import React from "react";
import { Route, Switch } from "react-router-native";

import PantryList from '../components/PantryList'
import Recipes from '../components/Recipes'

const routes = () => {
  return (
    <Switch>
      <Route path="/welcome" component={PantryList} />
      <Route exact path="/" component={Recipes}/>
      <Route path="/cookbook" />
    </Switch>
  )
}

export default routes