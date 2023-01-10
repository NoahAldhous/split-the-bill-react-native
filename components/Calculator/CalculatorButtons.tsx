import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const CalculatorButtons = () => {


    const buttonArray = ["1","2","3","4","5","6","7","8","9"];
    return <View>
        {buttonArray.map( 
            (item) => {
                return <Button title = {item}></Button>
            }
        )}
    </View>
}

export default CalculatorButtons;