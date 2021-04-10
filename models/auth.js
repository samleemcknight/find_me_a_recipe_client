const url = 'http://192.168.86.220:4000/api/v1/auth/'

class AuthModel {

  static login = async (username, password) => {

    try {
      const loginUser = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
      })
      return loginUser.json()
    } catch (error) {
      console.log(error)
    }
  }
}

export default AuthModel