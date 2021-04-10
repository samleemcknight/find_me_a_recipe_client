import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Route} from 'react-router-native'
import { NativeRouter } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

export default function App() {
  return (
    <NativeRouter>
        <StatusBar barStyle="light-content" translucent={true} />
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/Signup" render={() => <Signup />} />
        <Header />
        <Routes />
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
