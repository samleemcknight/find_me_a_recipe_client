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

}

export default CookbookModel