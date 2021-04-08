import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function RecipeCard(props) {

  return(
    <View style={styles.view}>
      <Text style={{fontSize:20, textAlign: "center", padding: 10}}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, 
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100,
  },
})