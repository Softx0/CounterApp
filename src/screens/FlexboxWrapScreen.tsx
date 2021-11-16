import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexboxWrapScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
        </View>
    )
}

export default FlexboxWrapScreen

//Le dice al component padre como quiere que manejen el caso en el que los 
//hijos se manejen del tamaño que ellos disponen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 300,
        backgroundColor: '#5856D6',
        flexWrap: 'wrap',
        // flexDirection: 'row'
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja4: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }

})
