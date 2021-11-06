import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DesignScreen = () => {
    return (
        <View>
            <Text> Hola mundo! This is BoxObjectModel</Text>
        </View>
    )
}

export default DesignScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    },
})