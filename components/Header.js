import React, {useState, useEffect} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';

import DropDownMenu from '../header/index'
import ShowTheLocation from '../config/routeHistory'

export default function Header(props) {
  console.log(props)
  return(
    <SafeAreaView style={styles.view}>
      <DropDownMenu />
      <ShowTheLocation />
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