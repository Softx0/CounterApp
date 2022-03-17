import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TareaScreen10 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />

            <View style={styles.cajaNaranja} />

            <View style={styles.cajaCeleste} />
        </View>
    )
}

export default TareaScreen10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50,
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        top: 100,
        right: 100,
    },
    cajaCeleste: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        left: 100,
        bottom: 100,
    }
})