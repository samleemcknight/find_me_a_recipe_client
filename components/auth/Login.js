import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import AuthModel from '../../models/auth'
const styles = require('../../style/styles')

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    setUsername(username)
  }, [username])

  useEffect(() => {
    setPassword(password)
  }, [password])


  const authenticate = () => {
    AuthModel.login(username, password)
    .then(response => {
      console.log(response)
    }).catch(error => {})
  }

  return(
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 35, marginTop: -20, marginBottom: 50}} >Login:</Text>
      <TextInput 
        style={styles.loginForm}
        placeholder="username"
        onChangeText={(text) => {setUsername(text)}}
        onSubmitEditing={() => {}}
        value={username}/>
      <TextInput 
        style={styles.loginForm}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => {setPassword(password)}}
        onSubmitEditing={() => {}}
        value={password}/>
      <TouchableOpacity
        style={{backgroundColor: "#AD260A", width: "30%", borderRadius: 25, padding: 6, marginTop: 10}}
        onPress={authenticate}
        >
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}