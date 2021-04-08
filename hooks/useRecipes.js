import { useState, useEffect } from 'react'
import RecipeModel from '../models/recipes'
import RecipeData from '../recipeData.json'
import showRecipe from '../showRecipe.json'

export default function useRecipes(recipeId) {
  const [recipes, setRecipes] = useState([])

  function getRecipes(id) {
    if (id) {
      // RecipeModel.showRecipe(id).then(data => {
      //   setRecipes(data.recipe)
      // })
      setRecipes(showRecipe[0].recipe)
    }
    else {
      // commented out for the moment to prevent unecessary calls to API

    // RecipeModel.getRecipes().then(data => {
    //   setRecipes(data.recipes)
    // })

    // sorting function to favor fewest missed ingredients over used ingredients
    function sortByMissed(a, b) {
      let missedA = a.missedIngredientCount
      let missedB = b.missedIngredientCount
      let usedA = a.usedIngredientCount
      let usedB = b.usedIngredientCount
      if (missedA > missedB || usedA > usedB ) {
        return 1
      }
      if (missedA < missedB || usedA < usedB ) {
        return -1
      }
      return 0
    }

    // const newRecipes = recipes.sort(sortByMissed)
    // setRecipes(recipes)

    const newRecipes = RecipeData.sort(sortByMissed)
    setRecipes(newRecipes)
    }
  }

  useEffect(() => {
    getRecipes(recipeId)
  }, [recipeId])
  
  return [recipes, getRecipes]
}