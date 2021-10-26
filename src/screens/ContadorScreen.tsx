import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ContadorScreen = () => {

    const [counter, setCounter] = useState(0);



    return (
        <View style={styles.View} >
            <Text style={styles.Text} >Contador: {counter}</Text>

            <Button
                color="#ffbd34"
                onPress={() => setCounter(counter + 1)}
                title="Contador" >
            </Button>
        </View>
    )
}

export default ContadorScreen

const styles = StyleSheet.create({
    View: {
        flex: 1,
        justifyContent: 'center'
    },
    Text: {
        textAlign: 'center',
        fontSize: 26
    }
})
