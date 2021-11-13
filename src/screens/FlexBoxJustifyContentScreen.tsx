import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexBoxJustifyContentScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>

            <Text style={styles.caja2}>Caja 2</Text>

            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

export default FlexBoxJustifyContentScreen

//Ahora practicando con justifyContent

// Cuando hacemos un justifyContent: 'center', se refiere a que los 
// hijos de ese componente estaran en el medio pero en el medio del componente padre no de la pantalla
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
