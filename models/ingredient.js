const url = 'http://192.168.86.220:4000//api/v1/recipes/add_ingredient'

class IngredientModel {

  static all = () => {
    console.log('in all function')
    return fetch('https://limitless-atoll-35923.herokuapp.com/api/v1/recipes').then(res => (res.json()));
  }

  // define method for adding ingredient to db
  static addIngredient = (data) => {
    console.log("name: ", data)
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data})
    }).then(res => {
      console.log(res)
      return res.json()
    })
  }
}

export default IngredientModel