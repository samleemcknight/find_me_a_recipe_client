const url = 'http://192.168.86.220:4000/api/v1/recipes/'

class RecipeModel {
  static getRecipes = async () => {
    const recipes = await fetch(`${url}/find`)
    return recipes.json()
  }
}

export default RecipeModel