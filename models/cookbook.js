import {Alert} from 'react-native'

const url = 'https://limitless-atoll-35923.herokuapp.com/api/v1/cookbook/'
// const url = 'http://192.168.86.220:4000/api/v1/cookbook/'

class CookbookModel {

  static getCookbook = async () => {
    try {
      const recipes = await fetch(url)
      return recipes.json()
    } catch (error) {
      return error
    }
  }

  static show = async (id, title) => {
    try {
      const recipe = await fetch(`${url}/show/${id}?title=${title}`)
      return recipe.json()
    } catch (error) {
      return error
    }
  }

  // edit recipe in cookbook
  static edit = async (data) => {
    try {
      const recipe = await fetch(`${url}/edit/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return recipe.json()
    } catch (error) {
      return error
    }
  }

  // remove recipe from cookbook 
  static deleteRecipe = async (id) => {
    try {
      const recipe = await fetch(`${url}/delete/${id}`, {method: "DELETE"})
      return Alert.alert(
        "Deleted",
        "Recipe deleted."
      )
    } catch (error) {
      return error
    }
  }

}

export default CookbookModel