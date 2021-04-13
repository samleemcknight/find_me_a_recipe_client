import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link, Redirect } from 'react-router-native'

import useAuth from '../../hooks/useAuth'

import { useFonts, Raleway_500Medium, Raleway_300Light } from '@expo-google-fonts/raleway';
const styles = require('../../style/styles')

export default function Login(props) {
  let [fontsLoaded] = useFonts({
    Raleway_300Light,
    Raleway_500Medium,
  });

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, getUser] = useAuth()

  useEffect(() => {
    setUsername(username)
  }, [username])

  useEffect(() => {
    setPassword(password)
  }, [password])

  // const setUser = async () => {
  //   await getUser()
  //   setRedirect(true)
  // }

  const authenticate = (event) => {
    if (username === "") return Alert.alert("You must input a valid username")
    if (password === "") return Alert.alert("You must input a valid password")
    event.preventDefault()
    props.authenticate(username, password)
    getUser()
  }

  return(
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize:35, marginBottom: 50, fontFamily: "Raleway_500Medium"}}>Find Me A Recipe!</Text>
      <Text style={{fontSize: 35, marginBottom: 40, fontFamily: "Raleway_300Light"}} >Login:</Text>
      <TextInput 
        style={styles.loginForm}
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(text) => {setUsername(text)}}
        onSubmitEditing={() => {}}
        value={username}/>
      <TextInput 
        style={styles.loginForm}
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => {setPassword(password)}}
        onSubmitEditing={authenticate}
        value={password}/>
      <TouchableOpacity
        style={{backgroundColor: "#AD260A", width: "30%", borderRadius: 25, padding: 6, marginTop: 10}}
        onPress={authenticate}
        >
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: "row", marginTop: 30}}>
        <Text style={{fontSize: 18}}>New? </Text>
        <Link to="/Signup">
          <Text style={{fontSize: 18, textDecorationLine: "underline", color: "#1021f1"}}>Create an Account.</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}