import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import IngredientModel from '../models/ingredient'
import PantryItem from '../components/PantryItem'

export default function PantryForm() {
  const [ingredient, setIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    if (!ingredients.length) {
      IngredientModel.all()
      .then(data => {
        // if the DB returns ingredients, then make an object to be passed to PantryItem component
        if (data) {
          for (let i = 0; i < data.ingredients.length; i++) {
            setIngredients(arr => [...arr, {key: (i+1).toString(), name: data.ingredients[i].name}])
          }
        }
      })
    } 
  }, [])

  function handleText(event) {
    event.preventDefault()
    setIngredients(arr => [...arr, {key: (ingredients.length+1).toString(), name: ingredient}])
    setIngredient("")
    // IngredientModel.addIngredient(ingredient)
    // .then(data => {
    //     setIngredients(arr => [...arr, ingredient])
    //     setIngredient("")
        
    //   })
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
        { ingredients.length ? <PantryItem ingredients={ingredients} /> : <Text>Loading...</Text>}
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
  },
  pantryContainer : {
    marginBottom: 15
  }
})