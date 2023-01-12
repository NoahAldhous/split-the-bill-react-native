import React, {useState, useReducer} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CalculatorButtons from './CalculatorButtons';
import ServiceChargeButtons from './ServiceChargeButtons';

const Calculator = () => {

    const [userInput, setUserInput] = useState<string>("0")
    
    const [serviceCharge, setServiceCharge] = useState<number>(0);

    const [bill, setBill] = useState<string>("0.00")

    const calculateBill = () => {

        let billWithoutTip:number = Number(userInput);

        let tip:number = Number(((billWithoutTip / 100) * serviceCharge).toFixed(2))
        
        setBill((billWithoutTip + tip).toFixed(2))
    }

    const handleButtonPress = (buttonValue:string) => {

        setUserInput(userInput + buttonValue);
    }

    return <View>
        <View style={styles.billTextContainer}>
            <Text style={styles.billText}>{bill}</Text>
        </View>
        <CalculatorButtons 
            userInput = {userInput}
            setUserInput = {setUserInput}
            setBill = {setBill}
            serviceCharge = {serviceCharge}
        />
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
    },
    billTextContainer: {
        alignItems:"flex-end",
        backgroundColor:"white",
        borderRadius:50,
        padding:5
    },
    billText: {
        fontSize:35,
    }
  });

export default Calculator;