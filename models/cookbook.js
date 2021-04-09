import {Alert} from 'react-native'

const url = 'http://192.168.86.220:4000/api/v1/cookbook/'

class CookbookModel {

  static getCookbook = async () => {
    const recipes = await fetch(url)
    return recipes.json()
  }

  static show = async (id) => {
    const recipe = await fetch(`${url}/${id}`)
    return recipe.json()
  }

  // edit recipe in cookbook

  // remove recipe from cookbook 
  static deleteRecipe = async (id) => {
    const recipe = await fetch(`${url}/delete/${id}`, {method: "DELETE"})
    return Alert.alert(
      "Deleted",
      "Recipe deleted."
    )
  }

}

export default CookbookModel