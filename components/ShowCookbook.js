import React, { useState, useEffect } from 'react'
import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native'
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
        <Button title="Remove from Favorites" onPress={() => {}} color="red"/>
      </View>
      </>
      :
      <Text>Loading...</Text>
      }
    </ScrollView>
  )
}