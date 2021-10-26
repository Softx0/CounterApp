import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react';

const HolaMundoScreen = () => {

    const [nombre, setnombre] = useState('Shirley');

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }} >
            <Text style={{
                fontSize: 45,
                textAlign: 'center',
            }} >Hola {nombre}</Text>
        </View>
    )
}

export default HolaMundoScreen


const styles = StyleSheet.create({})
