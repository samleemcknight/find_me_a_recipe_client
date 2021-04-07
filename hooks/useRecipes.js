import { useState, useEffect } from 'react'
import RecipeModel from '../models/recipes'
import RecipeData from '../recipeData.json'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])

  function getRecipes() {
    // RecipeModel.getRecipes().then(data => {
    //   setRecipes(data.recipes)
    // })
    setRecipes(RecipeData.json())
  }

  useEffect(() => {
    getRecipes()
  }, [])
  
  return [recipes, getRecipes]
}