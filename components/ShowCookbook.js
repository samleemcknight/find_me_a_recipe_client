import React, { useState, useEffect } from 'react'
import {View, Text, Button, Alert, ScrollView} from 'react-native'
import {Redirect} from 'react-router-native'

import CookbookModel from '../models/cookbook'
import CookbookCard from './CookbookCard'

const styles = require("../style/styles")

export default function ShowCookbook(props) {
  const [redirect, setRedirect] = useState(false)
  const [recipe, setRecipe] = useState()
  
  useEffect(() => {
    setRedirect(false)
    CookbookModel.show(props.match.params.id, "title")
  .then(res => {
      setRecipe(res.recipe)
    })
  }, [])

  const deleteRecipe = () => {
    CookbookModel.deleteRecipe(props.match.params.id)
    // automatically redirects after 700ms
    setTimeout(() => {
      setRedirect(true)
    }, 700);
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
      {redirect ? <Redirect to="/Cookbook" /> : <></>}
    </ScrollView>
  )
}