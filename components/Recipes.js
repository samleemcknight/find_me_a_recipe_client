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
    return recipes.map((recipe, index) => (
      <View style={styles.view} key={index}>
        <Link to={`recipe/${recipe.id}`} component={TouchableOpacity} activeOpacity={0.3}>
          <RecipeCard {...recipe} />
        </Link>
        <Image style={styles.image} source={{uri: recipe.image}} />
        <Text style={{textAlign: "center", marginBottom: 20, padding: 10}}>You have {recipe.usedIngredientCount} ingredients in your pantry of the {(recipe.usedIngredientCount + recipe.missedIngredientCount)} necessary for this recipe.</Text>
      </View>
    ))
  }

  return(
    <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}/>}>
      <SafeAreaView style={{marginTop: 100, alignItems: "center"}}>
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
    marginBottom: 30, 
    marginTop: 0
  },
  image: {
    marginTop: -55,
    marginBottom: 10,
    width: 100,
    height: 100,
    
  },
})