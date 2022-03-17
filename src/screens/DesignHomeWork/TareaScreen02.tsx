import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const TareaScreen02
    = () => {

        const { width } = useWindowDimensions();

        return (
            <View style={styles.container}>
                <View style={styles.cajaMorada} />

                <View style={styles.cajaNaranja} />

                <View style={{
                    ...styles.cajaCeleste,
                    width: width,
                }} />
            </View >
        )
    }

export default TareaScreen02

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
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
        backgroundColor: '#5856D6'
    },
    cajaCeleste: {
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
})
