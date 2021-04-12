const url = 'http://192.168.86.220:4000/api/v1/recipes'
// const url = 'https://limitless-atoll-35923.herokuapp.com/api/v1/recipes'

class IngredientModel {

  static all = () => {
    return fetch(`${url}/ingredients`).then(res => (res.json()));
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
    })
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
    })
  }
}

export default IngredientModel