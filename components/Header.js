import React, {useState, useEffect} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import DropDownMenu from '../header/index'

export default function Header() {

  return(
    <SafeAreaView style={styles.view}>
      <DropDownMenu />
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