import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import {Route} from 'react-router-native'
import { NativeRouter } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

import AuthModel from './models/auth'

import useAuth from './hooks/useAuth'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, getUser] = useAuth()

  useEffect(() => {
    if (user) {
      console.log("user object? ", user)
      setLoggedIn(true)
    } 
  }, [user])

  const authenticate = (username, password) => {
    if (!user) {
      AuthModel.login(username, password)
      .then(response => {
        if (response.username) {
          console.log("Username: ", response.username)
          
          console.log('redirect')
          setLoggedIn(true)
        }
      }).catch(error => {})
    } else {
      return Alert.alert("You are already logged in")
    }
  }

  const logout = () => {
    AuthModel.logout()
    .then(res => {
      setLoggedIn(false)
    })
  }

  return (
    <NativeRouter>
        <StatusBar barStyle="light-content" translucent={true} />
        <Route exact path="/" render={() => <Login authenticate={authenticate}  />} />
        <Route exact path="/Signup" render={() => <Signup />} />
        {/* <Header user={user} /> */}
        {loggedIn ? <Header logout={logout} /> : <></> }
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
