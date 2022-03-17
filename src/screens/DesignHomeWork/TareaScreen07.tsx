import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'

const TareaScreen07 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />

            <View style={styles.cajaNaranja} />

            <View style={styles.cajaCeleste} />
        </View>
    )
}

export default TareaScreen07

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
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaCeleste: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
})