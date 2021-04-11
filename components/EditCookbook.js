import React, { useState, useEffect } from 'react'
import {ScrollView} from 'react-native'

import EditRecipe from '../forms/EditRecipe'
import CookbookModel from '../models/cookbook'

const styles = require('../style/styles')

export default function EditCookbook(props) {

  const editRecipe = (data) => {
    CookbookModel.edit(data)
    .then(res => {
      props.history.push("/Cookbook")

    })
  }

  return(
    <ScrollView style={styles.editView}>
      <EditRecipe edit={editRecipe} recipe={props.recipe} />     
    </ScrollView>
  )
}