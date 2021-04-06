import React, {useState} from 'react'
import { StyleSheet, Text, SafeAreaView, LayoutAnimation, FlatList, Button, Alert } from 'react-native';
import SwipeRow from '../components/SwipeRow'
import IngredientModel from '../models/ingredient'

export default function PantryItem(props) {
  const [pantry, setPantry] = useState(null)

  const propRender = async () => {
    await props.ingredients
    if (!pantry) {
      setPantry(props.ingredients)
    }
  }

  propRender()

  const deleteItem = async (item) => {
    // await IngredientModel.delete(item.name)
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
        <Button 
          title="Get Cooking" 
          color="red" 
          onPress={() => Alert.alert('Pressed')}
        />
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