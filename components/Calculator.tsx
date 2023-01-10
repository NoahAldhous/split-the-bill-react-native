import { number } from 'prop-types';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Calculator = () => {

    const [userInput, setUserInput] = useState<string>("100")
    
    const [serviceCharge, setServiceCharge] = useState<number>(10);

    const [bill, setBill] = useState<string>("0")

    const calculateBill = () => {
        let billWithoutTip = Number(userInput);
        let tip:number = Number(((billWithoutTip / 100) * serviceCharge).toFixed(2))
        setBill((billWithoutTip + tip).toFixed(2))
    }

    return <View>
        <Text>User Input : {userInput}</Text>
        <Text>Service Charge : {serviceCharge}</Text>
        <Text>Bill: {bill}</Text>
        <Button title="calculate bill" onPress={calculateBill}></Button>
        <Button title="10%" onPress={() => {setServiceCharge(10)}}></Button>
        <Button title="20%" onPress={() => {setServiceCharge(20)}}></Button>
    </View>
};

export default Calculator;