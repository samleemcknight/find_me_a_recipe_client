import { useState, useEffect } from 'react'
import AuthModel from '../models/auth'

export default function useAuth() {
  const [user, setUser] = useState()

  function getUser() {
    return fetch('http://192.168.86.220:4000/api/v1/auth/user')
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