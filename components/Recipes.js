import React, {useState, useCallback} from 'react'
import {RefreshControl, View, Image, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native'
import useRecipes from '../hooks/useRecipes'

export default function Recipes() {
  const [recipes, getRecipes] = useRecipes()
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderRecipes = (recipes) => {
    return recipes.map((recipe, index) => (
      <View>
        <Text key={index} style={{fontSize:20}}>{recipe.title}</Text>
        <Image style={styles.image} source={{uri: recipe.image}} />
      </View>
    ))
  }

  return(
    <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}/>}>
      <SafeAreaView style={styles.view}>
        <Text style={{fontSize: 25, marginTop: 10}}>Recipes</Text>
        {recipes.length ? renderRecipes(recipes) : <Text>Loading...</Text> }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 66,
    height: 58,
  },
})