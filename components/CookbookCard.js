import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'


export default function CookbookCard(props) {
  return(
    <ScrollView>
      <View style={styles.view}>
        <Text style={{fontSize:20, textAlign: "center", padding: 10}}>{props.title}</Text>
        <Image style={styles.image} source={{uri: props.image_url}}/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, 
    marginTop: 10
  },
  image: {
    width: "80%",
    height: 150,
  },
})