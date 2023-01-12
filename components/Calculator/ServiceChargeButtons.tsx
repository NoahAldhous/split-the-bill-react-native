import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Pressable} from 'react-native';


const ServiceChargeButtons = (props: { 
        setServiceCharge: (arg0: number) => void; 
        calculateBill: () => void; 
    }) => {

    const { setServiceCharge , calculateBill } = props;

    function changeServiceCharge(button:string) {
        setServiceCharge(Number(button));
        calculateBill();
    }

    const serviceChargeButtonArray:string[] = [
        "0",
        "10",
        "12",
        "15",
        "20",
    ]

    return <View style={styles.serviceChargeButtonContainer}>
        {serviceChargeButtonArray.map(
            (buttonValue:string) => {
                return <Pressable
                    style= {({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#1F2041'
                                : '#4B3F72'
                        },
                        styles.serviceChargeButton
                    ]}onPress={() => console.log("!")}>
                        <Text style={styles.serviceChargeButtonText}>{buttonValue}</Text>
                    </Pressable>
            }
        )}
    </View>

};

const styles = StyleSheet.create({
    serviceChargeButtonContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    serviceChargeButton: {
        borderRadius:50,
        padding:1,
        width:55,
        height:25,
        justifyContent:"center",
        alignItems:"center",
    },
    serviceChargeButtonText: {
        color:"#F0EFF4",
        fontSize:20,
    }
});

export default ServiceChargeButtons;