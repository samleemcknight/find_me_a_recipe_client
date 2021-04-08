import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, SafeAreaView, View, LayoutAnimation, FlatList, } from 'react-native';
import SwipeRow from '../components/SwipeRow'
import IngredientModel from '../models/ingredient'

export default function PantryItem(props) {
  const [pantry, setPantry] = useState()
  
  // use effect
  useEffect(() => {
    IngredientModel.all()
    .then(data => {
      setPantry(data.ingredients.reverse())
    })
  }, [props.ingredient])

  const deleteItem = async (item) => {
    await IngredientModel.delete(item.name)
    const updatedData = pantry.filter(el => el !== item)
    // Animate list to close gap when item is deleted
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setPantry(updatedData)
  }

  const renderItem = ({item}) => (
    <SwipeRow
          key={item.key}
          item={item}
          swipeThreshold={-100}
          onSwipe={deleteItem} 
        >
      <Text style={styles.listItem}>{item.name}</Text>
    </SwipeRow>
  )
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
       data={pantry}
       renderItem={renderItem}
       ListFooterComponent={
        <>
        <View style={{marginBottom: 100}}></View>
        </>
       }
       />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  listItem : {
    padding: 5,
    fontSize: 20,
    textAlign: "center"
  }
})