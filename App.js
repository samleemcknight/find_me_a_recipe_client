import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NativeRouter } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'

export default function App() {
  return (
    <NativeRouter>
      <StatusBar barStyle="light-content" translucent={true} />
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
  statusBar: {

  }
});
