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

//La opcion por default de alignItems es streecth, igual que el justifyContent varia si estamos en row o column

//la opcion baseLine, nos permite especificar dimensiones, en contra de flex-start
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 300,
        backgroundColor: '#5856D6',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: "row"
        // alignItems: 'center',
        //alignItems: 'flex-start', // flex-end
        //alignItems: 'baseline'
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
