import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CalculatorButtons from './CalculatorButtons';
import ServiceChargeButtons from './ServiceChargeButtons';

const Calculator = () => {

    const [userInput, setUserInput] = useState<string>("0")
    
    const [serviceCharge, setServiceCharge] = useState<number>(10);

    const [bill, setBill] = useState<string>("0.00")

    const buttonArray = ["1","2","3","4","5","6","7","8","9"];

    const calculateBill = () => {

        let billWithoutTip:number = Number(userInput);

        let tip:number = Number(((billWithoutTip / 100) * serviceCharge).toFixed(2))
        
        setBill((billWithoutTip + tip).toFixed(2))
    }

    const handleButtonPress = (buttonValue:string) => {

        setUserInput(userInput + buttonValue);
    }

    return <View>
        <Text>User Input : {userInput}</Text>
        <CalculatorButtons/>
    </View>
};

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

export default Calculator;