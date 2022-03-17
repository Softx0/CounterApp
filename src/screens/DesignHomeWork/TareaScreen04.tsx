import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TareaScreen04 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />

      <View style={styles.cajaNaranja} />

      <View style={styles.cajaCeleste} />
    </View>
  )
}

export default TareaScreen04

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    alignSelf: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  cajaCeleste: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',

  }
})