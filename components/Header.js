import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Octicons';

import DropDownMenu from '../header/index'

export default function Header() {
  const [iconPress, setIconPress] = useState()

  useEffect(() => {
   setIconPress(false)
  }, [])

  const dropDown = () => {
    setIconPress(!iconPress)
  }

  return(
    <SafeAreaView style={styles.view}>
      <View style={{paddingLeft:10}}>
        <Icon 
          name='three-bars' 
          size={35} 
          color='#fef'
          onPress={dropDown} 
        />
      </View>
      {iconPress 
      ? 
      <DropDownMenu />  
      : 
      <></> }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    height: 80,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#135762",
    alignItems: "center",
    zIndex: 1,
    opacity: 0.9
  },
  li: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20
  },
  text: {
    fontSize: 18, 
    marginLeft: 20, 
    color: "#fef"
  }
})