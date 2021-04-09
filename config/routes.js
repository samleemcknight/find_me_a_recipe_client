import React from "react";
import { Route, Switch } from "react-router-native";

import PantryList from '../components/PantryList'
import Recipes from '../components/Recipes'
import ShowRecipe from '../components/ShowRecipe'
import Cookbook from '../components/Cookbook'
import ShowCookbook from "../components/ShowCookbook";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/Recipes" component={Recipes} />
      <Route exact path="/Pantry" component={PantryList}/>
      <Route path="/Recipes/:id" component={ShowRecipe} />
      <Route exact path="/Cookbook" component={Cookbook} />
      <Route path="/Cookbook/:id" component={ShowCookbook} />
    </Switch>
  )
}

export default routes