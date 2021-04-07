import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Octicons';

export default function Header() {
  return(
    <SafeAreaView style={styles.view}>
      <View style={{paddingLeft:10}}>
        <Icon 
          name='three-bars' 
          size={35} 
          color='#fef' 
        />
      </View>
      <View style={styles.li}>
        <Link to="/welcome">
          <Text style={styles.text}>Pantry</Text>
        </Link>
        <Link to="/">
          <Text style={styles.text}>Home</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    height: 100,
    flexDirection: "row",
    backgroundColor: "#135762",
    alignItems: "center"
  },
  li: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20
  },
  text: {
    fontSize: 25, 
    marginLeft: 20, 
    color: "#fef"
  }
})