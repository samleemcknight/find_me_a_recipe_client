import React, {useState, useEffect} from 'react'
import { Text, Alert, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import { Link, Redirect } from 'react-router-native'

import AuthModel from '../../models/auth'
import useAuth from '../../hooks/useAuth'
const styles = require('../../style/styles')

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
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

  const authenticate = () => {
    props.authenticate(username, password)
    getUser()
    setRedirect(true)
  }

  return(
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 35, marginTop: -20, marginBottom: 50}} >Login:</Text>
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
      {redirect ? <Redirect to="/Pantry" /> : <></>}
    </SafeAreaView>
  )
}