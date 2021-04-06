import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import IngredientModel from '../models/ingredient'

export default function PantryForm() {
  const [ingredient, setIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])

  function handleText(event) {
    
    event.preventDefault()
    
    IngredientModel.addIngredient(ingredient)
    .then(data => {
        console.log(data)
        
      })
  }

  return (
    <View>
      <TextInput 
        style={styles.form} 
        placeholder="add your ingredients here!" 
        onChangeText={(text) => setIngredient(text)}
        onSubmitEditing={handleText}
        value={ingredient}/>
      
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
  }
})