// const url = 'http://192.168.86.220:4000/api/v1/recipes/'
const url = 'https://limitless-atoll-35923.herokuapp.com/api/v1/recipes/'

class RecipeModel {
  static getRecipes = async () => {
    try {
      const recipes = await fetch(`${url}/find`)
      return recipes.json()
    } catch (error) {
      return errror
    }
  }

  static showRecipe = async (id) => {
    try {
      const recipe = await fetch(`${url}/show/${id}`)
      return recipe.json()
    } catch (error) {
      return error
    }
  }

  static favorite = async (data) => {
    try {
      let ingredients = []
      // nicely formats the array of ingredients into a string
      const getString = (el) => {
        for (let i = 0; i < el.length; i++) {
          ingredients.push(el[i].name)
        }
        return ingredients.join(', ')
      }
      const ingredientsToString = await getString(data.extendedIngredients)
  
      // some of the recipes don't have instructions, hence the following conditionals:
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
    } catch (error) {
      return error
    }
  }
}

export default RecipeModel