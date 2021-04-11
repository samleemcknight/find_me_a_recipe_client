import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CookbookCard from './CookbookCard'
import {Link} from 'react-router-native'
import CookbookModel from '../models/cookbook';

export default function Cookbook() {
  const [cookbook, setCookbook] = useState([])
  const [isEmpty, setIsEmpty] = useState()

  useEffect(() => {
    CookbookModel.getCookbook()
    .then(res => {
      if (typeof res.recipes[0] === "undefined") {
        setIsEmpty(true)
        setCookbook([])
      }
      else {
        setIsEmpty(false)
        setCookbook(res.recipes)
      }
    })
  }, [])

  const renderCookbook = () => {
    if (typeof cookbook[0] === "undefined") {
      return <Text style={{textAlign: "center", fontSize: 18, marginTop: 30}}>No favorite recipes yet</Text>
    } 
    return cookbook.map((item, key) => (
          <View key={key}>
          <Link to={`Cookbook/${item.id}`} component={TouchableOpacity} activeOpacity={0.3}>
            <CookbookCard {...item} /> 
          </Link>
          </View> ))
  }

  return (
    <SafeAreaView style={{flex: 1, marginTop: 100}}>
      <ScrollView>
        { cookbook 
        ? 
        renderCookbook()
        :
        <Text>Loading...</Text>}
      </ScrollView>
    </SafeAreaView>
  )
}