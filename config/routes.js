import React from "react";
import { Route, Switch } from "react-router-native";

import PantryList from '../components/PantryList'
import Recipes from '../components/Recipes'
import ShowRecipe from '../components/ShowRecipe'
import Cookbook from '../components/Cookbook'

const routes = () => {
  return (
    <Switch>
      <Route path="/welcome" component={Recipes} />
      <Route exact path="/" component={PantryList}/>
      <Route path="/cookbook" component={Cookbook} />
      <Route path="/recipe/:id" component={ShowRecipe} />
    </Switch>
  )
}

export default routes