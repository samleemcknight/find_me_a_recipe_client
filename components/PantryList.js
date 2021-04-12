import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';

import PantryForm from '../forms/PantryForm'

//hooks
import useAuth from '../hooks/useAuth'

export default function PantryList(props) {
  const [user, getUser] = useAuth()

  useEffect(() => {
    if (!user) {
      
    } 
    
  }, [user])

  return(
    <View style={styles.view}>
      <Text style={{fontSize: 25, marginTop: 10}}>Welcome!</Text>
      <Text style={{padding:20, textAlign: "center", fontSize: 20}}>Before you get your first recipes, we need an idea of what ingredients you have on-hand</Text>
      <PantryForm />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 6,
    alignItems: "center",
    marginTop: 100
  },
})