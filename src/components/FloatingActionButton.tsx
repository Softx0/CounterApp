import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'
import IFloatingActionButton from '../model/interfaces/IFloatingActionButton';

const FloatingActionButton = ({ title, onPress, position = 'bottomLeft' }: IFloatingActionButton) => {


    const ios = () => {
        return (
            <TouchableOpacity
                style={[styles.locationFAB,
                (position === 'bottomLeft') ? styles.leftSide : styles.rightSide
                ]}
                activeOpacity={0.7}
                onPress={onPress}
            >
                <View style={styles.botonFAB} >
                    <Text style={styles.textFAB} >{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[styles.locationFAB,
                (position === 'bottomLeft') ? styles.leftSide : styles.rightSide
                ]}
            >
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 40)}
                    onPress={onPress}
                >
                    <View style={styles.botonFAB} >
                        <Text style={styles.textFAB} >{title}</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        )
    }

    return (Platform.OS === 'android') ? ios() : android()
}

export default FloatingActionButton

const styles = StyleSheet.create({

    locationFAB: {
        position: 'absolute',
        bottom: 49,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    rightSide: {
        right: 25
    },
    leftSide: {
        left: 25
    },
    botonFAB: {
        backgroundColor: '#5236F8',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    textFAB: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    }
})
