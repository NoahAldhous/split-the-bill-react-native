import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Calculator = () => {

    const [bill, setBill] = useState(0);

    return <View>
        <Text>Bill:{bill}</Text>
    </View>
};

export default Calculator;