import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CookbookCard from './CookbookCard'
import {Link} from 'react-router-native'
import CookbookModel from '../models/cookbook';

export default function Cookbook() {

  const [cookbook, setCookbook] = useState()

  useEffect(() => {
    CookbookModel.getCookbook()
    .then(res => {
      setCookbook(res.recipes)
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1, marginTop: 100}}>
      <ScrollView>
        { cookbook 
        ? 
        cookbook.map((item, key) => (
          <View key={key}>
          <Link to={`Cookbook/${item.id}`} component={TouchableOpacity} activeOpacity={0.3}>
            <CookbookCard {...item} /> 
          </Link>
          </View>
        ))
        :
        <Text>Loading...</Text>}

      </ScrollView>
    </SafeAreaView>
  )
}