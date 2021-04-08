import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Octicons';

export default function Header() {

  const dropDown = () => {
    Alert.alert("nice", "hamburger pressed")
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
      <View style={styles.li}>
        <Link to="/">
          <Text style={styles.text}>Pantry</Text>
        </Link>
        <Link to="/welcome">
          <Text style={styles.text}>Find Recipes</Text>
        </Link>
        <Link to="/cookbook">
          <Text style={styles.text}>Cookbook</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    height: 100,
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