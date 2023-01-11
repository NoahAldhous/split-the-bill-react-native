import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


const ServiceChargeButtons = (props: { 
        setServiceCharge: (arg0: number) => void; 
        calculateBill: () => void; 
    }) => {

    const { setServiceCharge , calculateBill } = props;

    function changeServiceCharge(button:string) {
        setServiceCharge(Number(button));
        calculateBill();
    }

    return <View>
        <Button title="calculate bill" onPress={calculateBill}></Button>
        <Button title="10%" onPress={() => {changeServiceCharge("10")}}></Button>
        <Button title="20%" onPress={() => {changeServiceCharge("20")}}></Button>
    </View>

};

export default ServiceChargeButtons;