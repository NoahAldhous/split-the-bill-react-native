import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const CalculatorButtons = () => {

    const handleButtonPress = (value: { buttonValue: string; }) => {
        console.log(value.buttonValue)
    }

    const buttonArray:string[][] = [["1","2","3"],["4","5","6"],["7","8","9"],["0"],["C", ".", "del"]];

    return <View>
        {buttonArray.map( 
            (arrayOfButtonValues:string[]) => {
                return <View style={styles.buttonRow}>
                    {arrayOfButtonValues.map((buttonValue:string) => {
                    return <Pressable
                    style= {({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#1F2041'
                                : '#4B3F72'
                        },
                        styles.calculatorButton
                    ]}onPress={() => {handleButtonPress({buttonValue})}}>
                        <Text style={styles.calculatorButtonText}>{buttonValue}</Text>
                    </Pressable>
                })}
                </View>
            }
        )}
    </View>
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        height: 100,
        width: 300,
    },
    calculatorButton: {
        borderRadius:50,
        padding:1,
        width:85,
        height:85,
        justifyContent:"center",
        alignItems:"center",
    },
    calculatorButtonText: {
        color:"orange",
        fontSize:40,
    }
});

export default CalculatorButtons;