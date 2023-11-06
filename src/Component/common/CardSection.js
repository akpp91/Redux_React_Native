import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardSection = (props) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export {CardSection} 

const styles = StyleSheet.create({
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#000',
        flexDirection:'row',
        justifyContent:'flex-start',

        borderColor:'red',
        position:'relative'
    }
})