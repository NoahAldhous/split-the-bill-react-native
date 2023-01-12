import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

type CalculatorButtonsProps = {
    userInput:string,
    setUserInput:Dispatch<SetStateAction<string>>
}

const CalculatorButtons: React.FunctionComponent<CalculatorButtonsProps> = ({userInput, setUserInput}) => {

    const changeServiceCharge = (value:string) => {
        return null;
    }

    const handleButtonPress = (value: { buttonValue: string; }) => {
        //ensures userInput always has a default value of "0", to avoid elements displaying as undefined or null;
        if (!userInput) {
            setUserInput("0");
            return null;
        } else {
            //switch statement handles which value.buttonValue is being clicked;
            switch (value.buttonValue) {
            //if C value.buttonValue is clicked, reset userInput and serviceCharge to 0;
            case "C":
                setUserInput("0");
                changeServiceCharge("0");
                break;
            //if "." value.buttonValue is clicked and userInput does not already contain ".", add ".";
            case ".":
                if (!userInput.includes(".")) {
                setUserInput(userInput + value.buttonValue);
                } else {
                return null;
                }
                break;
            // if del value.buttonValue is clicked, and userInput is not 0,
            //removes last character of string from userInput.
            case "del":
                if (userInput === "0") {
                setUserInput("0");
                } else {
                setUserInput(userInput.slice(0, -1));
                }
                break;
            //default case handles buttons 0-9 being clicked
            default:
                //if userInput is currently 0 when value.buttonValue is clicked,
                //current value.buttonValue value replaces userInput.
                if (userInput === "0") {
                setUserInput(value.buttonValue);
                //if value.buttonValue is clicked and userInput is not already to 2 decimal places
                //or 7 characters in length, value.buttonValue value is added to end of string, otherwise
                //value.buttonValue click has no effect;
                } else if (
                !/^[0-9]+\.[0-9]{2,}/g.test(userInput) &&
                userInput.length <= 6
                ) {
                setUserInput(userInput + value.buttonValue);
                } else {
                return null;
                };
            };
        };
    };

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