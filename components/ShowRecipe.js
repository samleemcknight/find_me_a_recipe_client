import React, { useState } from 'react'
import {View, Text, Image, ScrollView, Alert, TouchableOpacity} from 'react-native'
import useRecipes from '../hooks/useRecipes'
import RecipeCard from './RecipeCard'
import RecipeText from './RecipeText'

import RecipeModel from '../models/recipes'

const styles = require('../style/styles')

export default function ShowRecipes(props) {
  const [recipe] = useRecipes(props.match.params.id)

  const alert = () => {
    Alert.alert(
      "Added to Favorites!",
      `You can now find this recipe in your cookbook!`
    )
  }

  const favorite = () => {
    RecipeModel.favorite(recipe)
    .then(response => {
      console.log(response)
    })
    alert()
  }

  return(
    <View style={styles.view}>
      <ScrollView>
        <RecipeCard {...recipe} />
        <View style={{alignItems: "center"}}>
          <Image style={styles.image} source={{uri: recipe.image}} />
        </View>
        <RecipeText {...recipe} />
        <Text style={styles.text}>{recipe.instructions}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.background}
          onPress={favorite} >
          <Text style={styles.button}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}