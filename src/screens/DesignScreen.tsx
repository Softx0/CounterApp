import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DesignScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} > Hola mundo! This is BoxObjectModel</Text>
        </View>
    )
}

export default DesignScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20
    },
    text: {
        fontSize: 20,
        // width: 150,
        color: 'white',
        padding: 10,
        margin: 20,
        borderWidth: 10,
        backgroundColor: 'blue'
    },

})