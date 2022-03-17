import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView } from 'react-native'
import React from 'react'

const TareaScreen05 = () => {

    const { width, height } = useWindowDimensions();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    height: height * 0.9,
                }} />

                <View style={{
                    ...styles.cajaNaranja,
                    height: height * 0.9,
                }} />

                <View style={{
                    ...styles.cajaCeleste,
                    height: height * 0.9,
                }} />
            </View>
        </SafeAreaView>
    )
}

export default TareaScreen05

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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