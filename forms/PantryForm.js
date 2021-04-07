import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import IngredientModel from '../models/ingredient'
import PantryItem from '../components/PantryItem'

export default function PantryForm() {
  const [ingredient, setIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])

  // useEffect(() => {
  //   // function
  //   IngredientModel.all()
  //   .then(data => {
  //     setIngredients(data.ingredients.reverse())
  //   })
  // }, [JSON.stringify(ingredients)])

  const handleText = (event) => {
    event.preventDefault()
    // setIngredients(arr => [...arr, {key: (ingredients.length+1).toString(), name: ingredient}])
    // setIngredient("")
    IngredientModel.addIngredient(ingredient)
    .then(data => {
        
        setIngredient("")
      })
  }

  return (
    <View style={styles.pantryContainer}>
      <TextInput 
        style={styles.form} 
        placeholder="add your ingredients here!" 
        onChangeText={(text) => setIngredient(text)}
        onSubmitEditing={handleText}
        value={ingredient}
        enablesReturnKeyAutomatically={true}
        clearButtonMode="while-editing"/>
        <PantryItem />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    width: 300,
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
    textAlign: "center",
    padding: 5,
    fontSize: 18
  },
  pantryContainer : {
    marginBottom: 15
  }
})