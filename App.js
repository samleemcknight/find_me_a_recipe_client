import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Alert } from 'react-native';
import {Route, Redirect} from 'react-router-native'
import { NativeRouter } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

import AuthModel from './models/auth'

import useAuth from './hooks/useAuth'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [user, getUser] = useAuth()

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [user])

  const authenticate = (username, password) => {
    if (!user) {
      AuthModel.login(username, password)
      .then(response => {
        if (response.username) {
          setLoggedIn(true)
          setRedirect(true)
        } 
      }).catch(error => Alert.alert("There was a problem", "Please try again"))
    } else {
      return Alert.alert("You are already logged in")
    }
  }

  const logout = () => {
    AuthModel.logout()
    .then(res => {
      setLoggedIn(false)
      setRedirect(false)
    })
  }

  const register = (data) => {
    
    AuthModel.register({
      username: data.username,
      password: data.password,
      email: data.email
    }).then(res => {
      console.log(res)
      if (res.message === "success") {
        // setLoggedIn(true)
        // setRedirect(true)
      } else {
        Alert.alert("Something went wrong. Please try again")
      }
    }).catch(error => error)
  }

  return (
    <NativeRouter>
        <StatusBar barStyle="light-content" translucent={true} />
        {loggedIn ? <Redirect to="/Pantry" /> : <Route exact path="/" render={() => <Login authenticate={authenticate}  />} />}
        <Route exact path="/Signup" render={() => <Signup register={register} />} />
        {loggedIn ? <Header logout={logout} /> : <></> }
        {loggedIn ? <Routes logout={logout} /> : <></> }
        {redirect ? <Redirect to="/Pantry" /> : <></>}
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
