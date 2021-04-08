import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'

import RecipeModel from '../models/recipes'

export default function CookbookCard(props) {
  const [cookbook, setCookbook] = useState()

  useEffect(() => {
    RecipeModel.getCookbook()
    .then(res => {
      setCookbook(res.recipes)

    })
  }, [])

  return(
    <ScrollView>
    { cookbook 
      ? 
      cookbook.map((item, index) => (
      <View style={styles.view} key={index}>
        <Text style={{fontSize:20, textAlign: "center", padding: 10}}>{item.title}</Text>
        <Image style={styles.image} source={{uri: item.image_url}}/>
      </View>
      )) 
      : 
      <Text>Loading...</Text>}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, 
    marginTop: 10
  },
  image: {
    width: "80%",
    height: 150,
  },
})