import { useState, useEffect } from 'react'
import CookbookModel from '../models/cookbook'

export default function useCookbook(recipeId, recipeTitle) {
  const [cookbook, setCookbook] = useState([])

  function getCookbook(id, title) {
    CookbookModel.show(id, title).then(data => {
      setCookbook(data.recipe)
    })
    
  }
  useEffect(() => {
    getCookbook(recipeId, recipeTitle)
  }, [recipeTitle])
  
  return [cookbook, getCookbook]
}