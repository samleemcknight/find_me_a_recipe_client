import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Redirect } from 'react-router-native'

import AuthModel from '../../models/auth'

import useAuth from '../../hooks/useAuth'
const styles = require('../../style/styles')

export default function Signup(props) {
  // user info
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
  // uses hook to get user, then redirect
  const setUser = async () => {
    await getUser
    setRedirect(true)
  }

  const register = () => {
    props.register({
      username: username,
      password: password,
      email: email
    })
    setUser()
  }

  return(
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 35, marginTop: -20, marginBottom: 50}} >Create an Account:</Text>
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
      <TouchableOpacity
        style={{backgroundColor: "#1CAAB3", width: "40%", borderRadius: 25, padding: 6, marginTop: 10}}
        onPress={register}
        >
        <Text style={styles.button}>Sign Up</Text>
        {redirect ? <Redirect to="/Pantry" /> : <></>}
      </TouchableOpacity>
    </SafeAreaView>
  )
}