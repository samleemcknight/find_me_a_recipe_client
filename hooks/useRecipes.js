import { useState, useEffect } from 'react'
import RecipeModel from '../models/recipes'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])

  function getRecipes() {
    RecipeModel.getRecipes().then(data => {
      setRecipes(data.recipes)
    })
  }

  useEffect(() => {
    getRecipes()
  }, [])
  
  return [recipes, getRecipes]
}