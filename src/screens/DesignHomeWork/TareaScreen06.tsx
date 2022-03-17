import { SafeAreaView, StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'

const TareaScreen06 = () => {

  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{
          ...styles.cajaMorada, 
          width: width
          }} />

        <View style={{
          ...styles.cajaNaranja, 
          width: width
          }} />

        <View style={{
          ...styles.cajaCeleste, 
          width: width
          }} />
      </View>
    </SafeAreaView>
  )
}

export default TareaScreen06

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cajaNaranja: {
    height: 200,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaMorada: {
    height: 200,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaCeleste: {
    height: 350,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  }
})