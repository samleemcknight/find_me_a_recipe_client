const url = 'http://192.168.86.220:4000/api/v1/recipes/'

class RecipeModel {
  static getRecipes = async () => {
    const recipes = await fetch(`${url}/find`)
    return recipes.json()
  }

  static showRecipe = async (id) => {
    const recipe = await fetch(`${url}/show/${id}`)
    return recipe.json()
  }
}

export default RecipeModel