import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IFloatingActionButton from '../model/interfaces/IFloatingActionButton'

const FloatingActionButton = ({ title, onPress, position }: IFloatingActionButton) => {
    return 
    
    // position ? 'bottomRight' : 'bottomLeft'
    
    (



        <TouchableOpacity
            style={styles.locationFAB}
            onPress={onPress}
        >
            <View style={styles.botonFAB} >
                <Text style={styles.textFAB} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FloatingActionButton

const styles = StyleSheet.create({

    locationFAB: {
        position: 'absolute',
        bottom: 49
    },
    botonFAB: {
        backgroundColor: '#5236F8',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    textFAB: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    }
})
