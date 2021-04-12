
const url = 'https://limitless-atoll-35923.herokuapp.com/api/v1/recipes'

class IngredientModel {

  static all = () => {
    return fetch(`${url}/ingredients`).then(res => {
      return res.json()
    }).catch(err => err)
  }

  // define method for adding ingredient to db
  static addIngredient = (data) => {
    return fetch(`${url}/add_ingredient`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data})
    }).then(res => {
      return res.json()
    }).catch(err => err)
  }

  static delete = (data) => {
    return fetch(`${url}/ingredients`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data})
    }).then(res => {
      return res.json()
    }).catch(err => err)
  }
}

export default IngredientModel