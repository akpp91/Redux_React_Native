import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const Button = (props) => {

  return (    
        <TouchableHighlight activeOpacity={0.6}
            underlayColor="red"
            onPress={()=>{props.onButtonPress()} }
            style={styles.buttonStyle}
        >
      <Text 
      style={styles.textStyle}
      >
        {props.value}
      </Text>
      </TouchableHighlight>
    
  )
}

export {Button} 

const styles = StyleSheet.create({
textStyle:{
alignSelf:'center',
color:'#007aff',
fontSize:16,
// fontWeight:'600',
marginTop:6
},
    buttonStyle:{

    // flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#007aff',
    height:40
}
})