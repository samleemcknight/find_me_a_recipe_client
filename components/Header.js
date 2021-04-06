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
          color='#cdc' 
        />
      </View>
      <View style={styles.li}>
        <Link to="/welcome">
            <Text style={{fontSize: 25}}>Pantry</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#135762",
    alignItems: "center"
  },
  li: {
    justifyContent: "space-around",
    marginLeft: 20
  }
})