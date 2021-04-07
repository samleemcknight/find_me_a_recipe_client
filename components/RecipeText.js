import React, { useState } from 'react'
import {Text} from 'react-native'

const styles = require('../style/styles')

export default function RecipeText(props) {

  const cookTime = (minutes) => {
    let hours = minutes % 2
    let remainingMins = Math.floor(minutes/(hours * 60))
    return `${hours} hours and ${remainingMins} minutes`
  }

  return (
    <>
    <Text style={{textAlign: "left", marginLeft: 10}}>
      <Text style={styles.boldText}>Cooktime: </Text><Text style={styles.text}>{cookTime(props.readyInMinutes)}</Text>
    </Text>
    <Text style={{textAlign: "left", marginLeft: 10}}>
      <Text style={styles.boldText}>Servings: </Text><Text style={styles.text}>{props.servings}</Text>
    </Text>
    <Text style={{textAlign: "left", marginLeft: 10, marginTop: 10 }} >
      {props.glutenFree 
        ? 
        <><Text style={styles.dietText}>✅ gluten free</Text><Text style={styles.text}></Text></>
        :
        <><Text style={styles.dietText}>❌ gluten free</Text><Text style={styles.text}></Text></>}
      {props.dairyFree 
        ? 
        <><Text style={styles.dietText}> ✅ dairy free </Text><Text style={styles.text}></Text></>
        :
        <><Text style={styles.dietText}> ❌ dairy free </Text><Text style={styles.text}></Text></>}
      {props.vegan 
        ? 
        <><Text style={styles.dietText}> ✅ vegan </Text><Text style={styles.text}></Text></>
        :
        <><Text style={styles.dietText}> ❌ vegan </Text><Text style={styles.text}></Text></>}
    </Text>
    </>
  )
}