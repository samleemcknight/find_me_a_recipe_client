import React, { useState, useEffect } from 'react'
import {View, Text, Button, Alert, ScrollView} from 'react-native'
import CookbookModel from '../models/cookbook'
import CookbookCard from './CookbookCard'

const styles = require("../style/styles")

export default function ShowCookbook(props) {
  const [recipe, setRecipe] = useState()
  
  useEffect(() => {
    CookbookModel.show(props.match.params.id)
  .then(res => {
      setRecipe(res.recipe)
    })
  }, [])

  const deleteRecipe = () => {
    CookbookModel.deleteRecipe(props.match.params.id)
  }

  const deleteDialog = () => {
    Alert.alert(
      "Delete Recipe?",
      "Are you sure you want to delete this recipe? This cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: deleteRecipe,
        }
      ]
    )
  }

  return (
    <ScrollView style={{flex:1, marginTop: 100}}>
      { recipe 
      ? 
      <>
      <CookbookCard {...recipe} /> 
      <Text style={{padding: 10, fontSize: 18}} >
        <Text style={{fontWeight: "bold"}}>Ingredients: </Text><Text>{recipe.ingredients}</Text>
      </Text>
      <Text style={{padding: 10, fontSize: 18}} >
        <Text style={{fontWeight: "bold"}}>Instructions: </Text><Text>{recipe.instructions}</Text>
      </Text>
      <View style={{marginBottom: 5}} >
        <Button title="Edit" onPress={() => {}} color="blue"/>
      </View>
      <View style={{marginBottom: 20}} >
        <Button title="Remove from Favorites" onPress={deleteDialog} color="red"/>
      </View>
      </>
      :
      <Text>Loading...</Text>
      }
    </ScrollView>
  )
}