import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import CookbookCard from './CookbookCard'

export default function Cookbook() {
  
  return (
    <SafeAreaView style={{flex: 1, marginTop: 100}}>
      <CookbookCard /> 
    </SafeAreaView>
  )
}