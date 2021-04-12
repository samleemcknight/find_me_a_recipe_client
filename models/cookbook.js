import {Alert} from 'react-native'

const url = 'https://limitless-atoll-35923.herokuapp.com/api/v1/cookbook/'


class CookbookModel {

  static getCookbook = async () => {
    const recipes = await fetch(url)
    return recipes.json()
  }

  static show = async (id, title) => {
    const recipe = await fetch(`${url}/show/${id}?title=${title}`)
    return recipe.json()
  }

  // edit recipe in cookbook
  static edit = async (data) => {
    const recipe = await fetch(`${url}/edit/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      return res.json()
    }).catch(err => error)
    // return logic:
  }

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