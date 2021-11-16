import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexboxAlignItemsScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default FlexboxAlignItemsScreen

//Ahora practicando con 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 300,
        backgroundColor: '#5856D6',
        justifyContent: 'space-evenly'
    },
    caja1: {
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }

})
