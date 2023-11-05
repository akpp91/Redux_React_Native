import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Message from './Component/Message'



const App = () => {
  return (
    <Provider store={store}>
      <Message />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})