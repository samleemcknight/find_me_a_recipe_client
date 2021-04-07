import React from "react";
import { Route, Switch } from "react-router-native";

import PantryList from '../components/PantryList'
import Recipes from '../components/Recipes'
import ShowRecipe from '../components/ShowRecipe'

const routes = () => {
  return (
    <Switch>
      <Route path="/welcome" component={PantryList} />
      <Route exact path="/" component={Recipes}/>
      <Route path="/cookbook" />
      <Route path="/recipe/:id" component={ShowRecipe} />
    </Switch>
  )
}

export default routes