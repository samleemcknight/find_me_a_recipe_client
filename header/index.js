import React, {useEffect, useState, useRef} from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native';
import { set } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Octicons';
import { Link } from 'react-router-native'

export default function DropDownMenu() {
  const animatedValue = useRef(new Animated.Value(0)).current
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    setIsOn(false)
  }, [])


  const dropDown = () => { 
    if (isOn === false) {
      setIsOn(!isOn)
      Animated.timing(animatedValue, {
        toValue: 80,
        duration: 300,
        useNativeDriver: false
      }).start()
    }
    if (isOn === true) {
      setIsOn(!isOn)
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start()
    }
  }

  return(
    <>
    <View style={{paddingLeft:10}}>
        <Icon 
          name='three-bars' 
          size={40} 
          color='#fef'
          onPress={dropDown} 
        />
      </View>
    <Animated.View 
      style={{
        position: "absolute",
        flex: 1,
        backgroundColor: "#000", 
        width: "100%",
        height: animatedValue,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center", 
        top: 80 }}>
      <Link to="/Pantry" onPress={dropDown}>
        <Text style={styles.text}>Pantry</Text>
      </Link>
      <Link to="/Recipes" onPress={dropDown} >
        <Text style={styles.text}>Find Recipes</Text>
      </Link>
      <Link to="/Cookbook" onPress={dropDown}>
        <Text style={styles.text}>Cookbook</Text>
      </Link>
    </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18, 
    marginLeft: 20, 
    color: "#fef"
  }
})