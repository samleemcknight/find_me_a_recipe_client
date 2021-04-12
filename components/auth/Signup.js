import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Redirect, Link } from 'react-router-native'

import useAuth from '../../hooks/useAuth'

import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
const styles = require('../../style/styles')

export default function Signup(props) {
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });

  // user info
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [email, setEmail] = useState("")
  // redirect 'switch'
  const [redirect, setRedirect] = useState(false)
  //user hook
  const [user, getUser] = useAuth()

  //stores user information in state
  useEffect(() => {
    setEmail(email)
  }, [email])

  useEffect(() => {
    setUsername(username)
  }, [username])

  useEffect(() => {
    setPassword(password)
  }, [password])
  //

  const register = () => {
    if (password !== password2) {
      return Alert.alert("Passwords Do Not Match")
    }
    props.register({
      username: username,
      password: password,
      email: email
    })
    setRedirect(true)
  }

  return(
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 35, marginTop: -20, marginBottom: 50, fontFamily: "Raleway_500Medium"}} >Create an Account</Text>
      <TextInput 
        style={styles.loginForm}
        placeholder="email"
        autoCapitalize="none"
        onChangeText={(email) => {setEmail(email)}}
        onSubmitEditing={() => {}}
        value={email}/>
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
        onSubmitEditing={() => {}}
        value={password}/>
      <Text style={{fontSize: 12, marginTop: 10, marginBottom: 10}}>Password must be at least 9 characters long</Text>
      <TextInput 
        style={styles.loginForm}
        placeholder="confirm password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => {setPassword2(password)}}
        onSubmitEditing={() => {}}
        value={password2}/>
      <TouchableOpacity
        style={{backgroundColor: "#1CAAB3", width: "40%", borderRadius: 25, padding: 6, marginTop: 10}}
        onPress={register}
        >
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{flexDirection: "row", marginTop: 30}}>
        <Text style={{fontSize: 18}}>Have an Account? </Text>
        <Link to="/">
          <Text style={{fontSize: 18, textDecorationLine: "underline", color: "#1021f1"}}>Sign In.</Text>
        </Link>
      </View>
      {redirect ? <Redirect to="/" /> : <></>}
    </SafeAreaView>
  )
}