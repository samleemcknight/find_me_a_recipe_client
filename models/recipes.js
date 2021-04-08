const url = 'http://192.168.86.220:4000/api/v1/recipes/'

class RecipeModel {
  static getRecipes = async () => {
    const recipes = await fetch(`${url}/find`)
    return recipes.json()
  }

  static getCookbook = async () => {
    const recipes = await fetch(url)
    return recipes.json()
  }

  static showRecipe = async (id) => {
    const recipe = await fetch(`${url}/show/${id}`)
    return recipe.json()
  }

  static favorite = async (data) => {
    let ingredients = []

    const getString = (el) => {
      for (let i = 0; i < el.length; i++) {
        ingredients.push(el[i].name)
      }
      return ingredients.join(', ')
    }
    const ingredientsToString = await getString(data.extendedIngredients)

    const addedRecipe = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: data.title,
        instructions: data.instructions,
        image_url: data.image,
        ingredients: ingredientsToString
      })
    })
    return addedRecipe.json()
  }
}

export default RecipeModel