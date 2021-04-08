import React, {useState} from 'react'
import { View, StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import { Link } from 'react-router-native'

export default function DropDownMenu() {
  return(
    <View style={styles.li}>
      <Link to="/">
        <Text style={styles.text}>Pantry</Text>
      </Link>
      <Link to="/welcome">
        <Text style={styles.text}>Find Recipes</Text>
      </Link>
      <Link to="/cookbook">
        <Text style={styles.text}>Cookbook</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  li: {
    position: "absolute",
    backgroundColor: "#000",
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    top: 80,
    opacity: 1,
  },
  text: {
    fontSize: 18, 
    marginLeft: 20, 
    color: "#fef"
  }
})