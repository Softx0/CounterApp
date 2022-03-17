import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TareaScreen03 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />

            <View style={styles.cajaNaranja} />

            <View style={styles.cajaCeleste} />
        </View >
    )
}

export default TareaScreen03

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
        // position: 'absolute',
        alignSelf: 'flex-start',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // position: 'absolute',
        alignSelf: 'flex-end',
    },
    cajaCeleste: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // position: 'absolute',
        
    }

})