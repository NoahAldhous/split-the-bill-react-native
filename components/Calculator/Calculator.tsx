import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import CalculatorButtons from './CalculatorButtons';
import ServiceChargeButtons from './ServiceChargeButtons';

const Calculator = () => {

    const [userInput, setUserInput] = useState<string>("100")
    
    const [serviceCharge, setServiceCharge] = useState<number>(10);

    const [bill, setBill] = useState<string>("0.00")

    const calculateBill = () => {
        let billWithoutTip:number = Number(userInput);

        let tip:number = Number(((billWithoutTip / 100) * serviceCharge).toFixed(2))
        
        setBill((billWithoutTip + tip).toFixed(2))
    }

    return <View>
        <Text>User Input : {userInput}</Text>
        <CalculatorButtons/>
        {/* <Text>Service Charge : {serviceCharge}</Text>
        <Text>Bill: {bill}</Text> */}
        {/* <ServiceChargeButtons setServiceCharge = {setServiceCharge} calculateBill = {calculateBill}/> */}
    </View>
};

export default Calculator;