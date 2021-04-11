import React, { useState, useEffect } from 'react'
import {View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import {Redirect, Link} from 'react-router-native'

import CookbookModel from '../models/cookbook'

const styles = require('../style/styles')

export default function EditCookbook(props) {
  const [title, setTitle] = useState(props.title)
  const [ingredients, setIngredients] = useState(props.ingredients)
  const [instructions, setInstructions] = useState(props.instructions)
  const [imageUrl, setImageUrl] = useState(props.image_url)

  useEffect(() => {
    setTitle(title)
  }, [title])

  useEffect(() => {
    setIngredients(ingredients)
  }, [ingredients])

  useEffect(() => {
    setInstructions(instructions)
  }, [instructions])

  useEffect(() => {
    setImageUrl(imageUrl)
  }, [imageUrl])

  const editRecipe = () => {
    console.log("no edit function yet")
  }

  return(
    <ScrollView style={styles.editView}>
      <Text style={{marginTop: 10, marginBottom: 30, fontSize: 25, textAlign: "center"}}>Edit Recipe:</Text>
      <Text style={styles.labelText}>Name:</Text>
      <TextInput
        style={styles.editForm}
        autoCapitalize="none"
        onChangeText={(text) => {setTitle(text)}}
        multiline={true}
        value={title}/>
      <Text style={styles.labelText}>Ingredients:</Text>
      <TextInput
        style={styles.editForm}
        autoCapitalize="none"
        onChangeText={(text) => {setIngredients(text)}}
        multiline={true}
        value={ingredients}/>
      <Text style={styles.labelText}>Instructions:</Text>
      <TextInput
        style={styles.editForm}
        autoCapitalize="none"
        onChangeText={(text) => {setInstructions(text)}}
        multiline={true}
        value={instructions}/>
      <Text style={styles.labelText}>Image Url:</Text>
      <TextInput
        style={styles.editForm}
        autoCapitalize="none"
        onChangeText={(text) => {setImageUrl(text)}}
        value={imageUrl}/>
      <TouchableOpacity
        style={{backgroundColor: "#1CAAB3", width: "40%", borderRadius: 25, padding: 6, marginTop: 20, alignSelf: "center"}}
        onPress={editRecipe}
        >
        <Text style={styles.button}>Edit</Text>
      </TouchableOpacity>
      <View style={{marginBottom: 50}}></View>
    </ScrollView>
  )
}