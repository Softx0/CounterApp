import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.cajaVerde} ></View>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja} ></View>
        </View>
    )
}

export default PositionScreen

const styles = StyleSheet.create({
    //Por defacto todo es relativo al padre
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0, // el punto cero del padre
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        bottom: 0,
        position: 'absolute',
        right: 0,

    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // top: 0,
        // position: 'absolute',
        // left: 0,
        ...StyleSheet.absoluteFillObject // left, right, bot y top en 0 una propiedad
    },
})
