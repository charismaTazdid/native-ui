import { ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCard from './Components/ElevatedCard'
import FancyCard from './Components/FancyCard'
// import {  } from 'react-native-web'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hello React Developer</Text>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        {/* <ElevatedCard /> */}

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "red",
    margin: 20,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  }
})

export default App