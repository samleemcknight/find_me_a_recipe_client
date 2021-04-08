import React, {useEffect, useState, useRef} from 'react'
import { View, StyleSheet, Text, Animated } from 'react-native';
import { set } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Octicons';
import { Link } from 'react-router-native'

export default function DropDownMenu() {
  const dropAnim = useRef(new Animated.Value(0)).current
  const foldAnim = useRef(new Animated.Value(80)).current
  const [height, setHeight] = useState("f")
  const [x, setX] = useState(0)

  useEffect(() => {
    console.log(height)
    if (height === "t") {
      
      Animated.timing(
        dropAnim,
        {
          toValue: 80,
          duration: 300,
          useNativeDriver: false,
        },
        ).start();
    }
    else if (height === "f") {
      Animated.timing(
        foldAnim,
        {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        },
        ).start();
    }
  }, [height])

  const dropDown = () => { 
    if (height === "t") {
      setHeight("f")
      setX(foldAnim)
    }
    else if (height === "f") {
      setHeight("t")
      setX(dropAnim)
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
        height: x,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center", 
        top: 80 }}>
      <Link to="/" >
        <Text style={styles.text}>Pantry</Text>
      </Link>
      <Link to="/welcome" >
        <Text style={styles.text}>Find Recipes</Text>
      </Link>
      <Link to="/cookbook" >
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