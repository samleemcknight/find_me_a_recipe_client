import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import PantryForm from '../forms/PantryForm'

export default function PantryList() {
  return(
    <View style={styles.view}>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={{padding:20, textAlign: "center"}}>Before you get your first recipes, we need an idea of what ingredients you have on-hand</Text>
      <PantryForm />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 6,
    alignItems: "center"
  },
  text: {
    fontSize: 20
  }
})