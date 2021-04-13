import React, {useState, useEffect} from 'react'
import { StyleSheet, Button, TouchableOpacity, Text, View, TextInput } from 'react-native';
import {Redirect} from 'react-router-native'
import IngredientModel from '../models/ingredient'
import PantryItem from '../components/PantryItem'

const styles = require('../style/styles')

export default function PantryForm() {
  const [ingredient, setIngredient] = useState("")
  // for passing as prop to child component in handleText function. this will trigger a re-render
  const [pantryItem, setPantryItem] = useState("")
  // to redirect to recipes (home) page after buton is pressed
  const [redirect, setRedirect] = useState(false)

  const handleText = (event) => {
    event.preventDefault() 
    IngredientModel.addIngredient(ingredient)
    .then(data => {
      setPantryItem(ingredient)
      setIngredient("")
    })
  }

  useEffect(() => {
    setIngredient(ingredient)
  }, [ingredient])

  const generateRecipes = (recipes) => {
    setRedirect(true)
  }

  return (
    <>
    <View style={styles.pantryContainer}>
      <TextInput 
        style={styles.form} 
        placeholder="add your ingredients here!" 
        onChangeText={(text) => setIngredient(text)}
        onSubmitEditing={handleText}
        value={ingredient}
        enablesReturnKeyAutomatically={true}
        clearButtonMode="while-editing"/>
      <PantryItem ingredient={pantryItem} />
      { redirect ? <Redirect to="/Recipes" /> : <></>}
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.background}
          onPress={generateRecipes} >
          <Text style={styles.button}>Get Cooking</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}