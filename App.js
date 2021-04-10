import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Route} from 'react-router-native'
import { NativeRouter } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState(null)
  const [updateUser, setUpdateUser] = useState()

  const getUser = () => {
    return fetch('http://192.168.86.220:4000/api/v1/auth/user')
    .then(res => {
      return res.json().then(data => {
        if (data.status === 200) {
          console.log("in setter functions")
          setLoggedIn(true)
          setUsername(data.user.username)
        }
        else {
          setLoggedIn(false)
          setUsername(null)
        }
      }).catch(err => console.log(err))
    })
  }
  
  useEffect(() => {
   getUser()
  }, [])

  useEffect(() => {
    setUpdateUser({
      loggedIn: true,
      username: username
    })
  }, [username])

  return (
    <NativeRouter>
        <StatusBar barStyle="light-content" translucent={true} />
        <Route exact path="/" render={() => <Login updateUser={updateUser}  />} />
        <Route exact path="/Signup" render={() => <Signup updateUser={updateUser} setUpdateUser={setUpdateUser} />} />
        <Header />
        {/* {username ? <Header /> : <></> } */}
        {loggedIn ? <Routes /> : <></> }
        
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
