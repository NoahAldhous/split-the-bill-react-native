import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CalculatorButtons from './CalculatorButtons';
import ServiceChargeButtons from './ServiceChargeButtons';

const Calculator = () => {

    const [userInput, setUserInput] = useState<string>("100")
    
    const [serviceCharge, setServiceCharge] = useState<number>(10);

    const [bill, setBill] = useState<string>("0.00")

    const buttonArray = ["1","2","3","4","5","6","7","8","9"];

    const calculateBill = () => {
        let billWithoutTip:number = Number(userInput);

        let tip:number = Number(((billWithoutTip / 100) * serviceCharge).toFixed(2))
        
        setBill((billWithoutTip + tip).toFixed(2))
    }

    return <View>
        <Text>User Input : {userInput}</Text>
        <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>1</Text>
                </Pressable>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>2</Text>
                </Pressable>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>3</Text>
                </Pressable>
            </View>
            <View style={styles.buttonRow}>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>4</Text>
                </Pressable>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>5</Text>
                </Pressable>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>6</Text>
                </Pressable>
            </View>
            <View style={styles.buttonRow}>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>7</Text>
                </Pressable>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>8</Text>
                </Pressable>
                <Pressable style= {({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}onPress={() => console.log("Pressed!")}>
                    <Text style={styles.calculatorButtonText}>9</Text>
                </Pressable>
            </View>
            <View style={styles.buttonRow}>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#1F2041'
                            : '#4B3F72'
                    },
                    styles.calculatorButton
                ]}>
                    <Text style={styles.calculatorButtonText}>0</Text>
                </Pressable>
            </View>
        </View>

    </View>
};

const styles = StyleSheet.create({
    buttonContainer: {
    },
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