import { useState, useEffect } from 'react'
import AuthModel from '../models/auth'

const url = `https://limitless-atoll-35923.herokuapp.com/api/v1/auth/user`
// const url = `http://192.168.86.220:4000/api/v1/auth/user`

export default function useAuth() {
  const [user, setUser] = useState()

  function getUser() {
    return fetch(url)
    .then(res => {
      return res.json().then(data => {
        if (data.status === 200) {
          
          setUser({username: data.user.username})
        }
        else {
          setUser(null)
        }
      }).catch(err => error)
    })
  }
  
  useEffect(() => {
    getUser()
  }, [])

  return [user, getUser]
}