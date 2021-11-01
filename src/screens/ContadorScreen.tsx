import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import FloatingActionButton from '../components/FloatingActionButton';

const ContadorScreen = () => {

    const [counter, setCounter] = useState(0);


    return (
        <View style={styles.view} >
            <Text style={styles.text} >Contador: {counter}</Text>

            <FloatingActionButton
                title="+"
                onPress={() => setCounter(counter + 1)}

            ></FloatingActionButton>

            <FloatingActionButton
                title="-"
                onPress={() => setCounter(counter - 1)}
            ></FloatingActionButton>

            {/* <TouchableOpacity
                style={styles.locationFABL}
                onPress={() => setCounter(counter - 1)}
            >
                <View style={styles.botonFAB} >
                    <Text style={styles.textFAB} >-</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

export default ContadorScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 26
    },
    locationFABR: {
        position: 'absolute',
        bottom: 49,
        right: 49,
    },
    locationFABL: {
        position: 'absolute',
        bottom: 49,
        left: 49,
    },
})
