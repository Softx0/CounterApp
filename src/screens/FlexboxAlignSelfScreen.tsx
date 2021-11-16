import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexboxAlignSelfScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>

            <Text style={styles.caja4}>Caja 4</Text>
        </View>
    )
}

export default FlexboxAlignSelfScreen

//AlignSelf se aplica en los hijos para definir unas propiedades especificas para ese solo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 300,
        backgroundColor: '#5856D6',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end'
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'stretch'
    },
    caja4: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start'
    }

})
