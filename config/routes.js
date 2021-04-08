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
      <Route path="/welcome" component={Recipes} />
      <Route exact path="/" component={PantryList}/>
      <Route path="/recipe/:id" component={ShowRecipe} />
      <Route exact path="/cookbook" component={Cookbook} />
      <Route path="/cookbook/:id" component={ShowCookbook} />
    </Switch>
  )
}

export default routes