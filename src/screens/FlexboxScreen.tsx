import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexboxScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default FlexboxScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0A23B'
    },
    caja1: {
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }

})
