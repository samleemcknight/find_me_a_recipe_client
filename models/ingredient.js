const url = 'http://192.168.86.220:4000/api/v1/recipes/add_ingredient'

class IngredientModel {

  static all = () => {
    return fetch('http://192.168.86.220:4000/api/v1/recipes/ingredients').then(res => (res.json()));
  }

  // define method for adding ingredient to db
  static addIngredient = (data) => {
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data})
    }).then(res => {
      return res.json()
    })
  }

  static delete = (data) => {
    return fetch('http://192.168.86.220:4000/api/v1/recipes/ingredients', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data})
    }).then(res => {
      return res.json()
    })
  }
}

export default IngredientModel