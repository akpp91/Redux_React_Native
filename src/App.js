import { StyleSheet, Text, UIManager, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Message from './Component/Message'
import { Header } from './Component/common'
import LibraryList from './Component/LibraryList'




const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <Header headerText={'Tech Stack'}/>
        <LibraryList></LibraryList>
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})