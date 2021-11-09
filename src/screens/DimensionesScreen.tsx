import React from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'

const DimensionesScreen = () => {

    // Sacar las dimensiones del dispositivo, una sencilla y una con hook

    //Manera sencilla | Desestructuramos: 
    // const { width, height } = Dimensions.get('window');

    //Con hook
    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.5
                }} />
                <View style={styles.cajaNaranja} />
            </View>

            <Text style={styles.title} >W: {width}, H: {height}</Text>
        </View>
    )
}

export default DimensionesScreen

const styles = StyleSheet.create({
    container: {
        width: '100%', //mejor trabajar con Flex
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        // width: '50%', //es relativo al padre

        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    }
})
