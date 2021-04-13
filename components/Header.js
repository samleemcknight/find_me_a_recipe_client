import React, {useState, useEffect} from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { Redirect } from 'react-router-native'
import DropDownMenu from '../header/index'
import ShowTheLocation from '../config/routeHistory'

import useAuth from '../hooks/useAuth'
import AuthModel from '../models/auth';

export default function Header(props) {
  const [redirect, setRedirect] = useState(false)

  const logout = () => {
    props.logout()
    setRedirect(true)
    // AuthModel.logout()
    // .then(res => {
    //   setRedirect(true)
    // })
  }

  return(
    <SafeAreaView style={styles.view}>
      <DropDownMenu />
       
      <Text 
        style={{ fontSize: 20, color: "#fef", position: "absolute", marginLeft: 300, bottom: 20}}
        onPress={logout}>
        Logout
      </Text>
      
      <ShowTheLocation />
      { redirect ? <Redirect to="/" /> : <></>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    height: 80,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#135762",
    alignItems: "center",
    zIndex: 1,
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