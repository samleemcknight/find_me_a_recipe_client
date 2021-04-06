import React from 'react';
import { StyleSheet, StatusBar, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Header from './components/Header'
import Routes from './config/routes'

export default function App() {
  return (
    <NativeRouter>
        <StatusBar barStyle="light-content" translucent={true} />
        <Header />
        <Routes style={styles.container} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {

  }
});
