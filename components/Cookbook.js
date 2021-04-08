import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
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
      { cookbook 
      ? 
      cookbook.map((item, key) => (
        <>
        <Link to={`cookbook/${item.id}`} key={key} component={TouchableOpacity} activeOpacity={0.3}>
          <CookbookCard {...item} /> 
        </Link>
        </>
      ))
      :
      <Text>Loading...</Text>}
    </SafeAreaView>
  )
}