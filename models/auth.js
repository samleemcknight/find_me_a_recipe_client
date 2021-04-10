import {Alert} from 'react-native'
const url = 'http://192.168.86.220:4000/api/v1/auth/'

class AuthModel {

  static register = async (data) => {
    try {
      const registerUser = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password
        })
      })
      if (registerUser) {
        // 
        return registerUser.json()
      }
      else {
        return Alert.alert("Registration Error", "Please Try Again")
      }
    } catch(error) {
      console.log(error)
    }
  }

  static login = (username, password) => {
    return fetch(`${url}/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
      })
    .then(res => {
      return res.json()
    })

  }
}

export default AuthModel