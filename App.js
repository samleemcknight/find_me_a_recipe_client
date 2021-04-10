import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Route} from 'react-router-native'
import { NativeRouter } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import useAuth from './hooks/useAuth'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState(null)
  const [user, getUser] = useAuth()
  
  useEffect(() => {
   getUser()
  }, [])

  useEffect(() => {
    if (user) {
      setUsername(user.username)
      setLoggedIn(true)
    }
  }, [user])

  return (
    <NativeRouter>
        <StatusBar barStyle="light-content" translucent={true} />
        <Route exact path="/" render={() => <Login  />} />
        <Route exact path="/Signup" render={() => <Signup />} />
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
