import React, {useState, useCallback} from 'react'
import {RefreshControl, View, Image, SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {Link} from 'react-router-native'
import useRecipes from '../hooks/useRecipes'
import RecipeCard from '../components/RecipeCard'

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
    if (recipes[0] === null) {
      return <Text style={{textAlign: "center", fontSize: 18, marginTop: 30}}>You need to add ingredients before you can get recipe suggestions.</Text>
    }
    return recipes.map((recipe, index) => (
      <View style={styles.view} key={index}>
        <Link to={`Recipes/${recipe.id}`} component={TouchableOpacity} activeOpacity={0.3}>
          <RecipeCard {...recipe} />
        </Link>
        <Image style={styles.image} source={{uri: recipe.image}} />
        <Text style={{textAlign: "center", marginBottom: 20, padding: 10}}>You have {recipe.usedIngredientCount} ingredients in your pantry of the {(recipe.usedIngredientCount + recipe.missedIngredientCount)} this recipe calls for.</Text>
      </View>
    ))
  }

  return(
    <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}/>}>
      <SafeAreaView style={{marginTop: 100, marginBottom: 30, alignItems: "center" }}>
        <Text style={{fontSize: 25, marginTop: 10}}>Recipes</Text>
        {recipes.length ? renderRecipes(recipes) : <Text>Loading...</Text> }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    marginTop: -60,
    marginBottom: 10,
    width: 150,
    height: 100,
  },
})