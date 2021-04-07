import React from 'react'
import {View, Text, Image, ScrollView, Button, TouchableOpacity} from 'react-native'
import useRecipes from '../hooks/useRecipes'

import RecipeCard from './RecipeCard'

export default function ShowRecipes(props) {
  const [recipe] = useRecipes(props.match.params.id)

  const cookTime = (minutes) => {
    let hours = minutes % 2
    let remainingMins = Math.floor(minutes/(hours * 60))
    return `${hours} hours and ${remainingMins} minutes`
  }

  return(
    <View style={styles.view}>
      <ScrollView>
        <RecipeCard {...recipe} />
        <View style={{alignItems: "center"}}>
          <Image style={styles.image} source={{uri: recipe.image}} />
        </View>
        <Text style={styles.text}>Cooktime: {cookTime(recipe.readyInMinutes)}</Text>
        <Text style={styles.text}>{recipe.instructions}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.background}
          onPress={() => {}} >
          <Text style={styles.button}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  view: {
    flex: 1,
    alignItems: "center",
    marginTop: 10
  },
  image: {
    marginTop: 10,
    marginBottom: 30,
    width: "100%",
    height: 200,
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
  },
  button: {
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },
  background: {
    backgroundColor: "#135762",
  }
}