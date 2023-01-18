import React, {SetStateAction, useState, Dispatch} from 'react';
import {View, StyleSheet, Text, Button, Pressable} from 'react-native';

type ServiceChargeButtonsProps = {
    setServiceCharge:Dispatch<SetStateAction<number>>, 
    calculateBill:() => void,
    serviceChargeButtonArray:{value: string, isActive:boolean}[],
    setServiceChargeButtonArray:Dispatch<SetStateAction<{value:string, isActive:boolean}[]>>,
    checkIfEvenSplit:() => void
}

const ServiceChargeButtons: React.FunctionComponent<ServiceChargeButtonsProps> = (props) => {

        const {
            setServiceCharge, 
            calculateBill, 
            serviceChargeButtonArray, 
            setServiceChargeButtonArray,
            checkIfEvenSplit
        } = props;

        function changeServiceCharge(button:string) {
            setServiceCharge(Number(button));
            setActiveButton(button);
            checkIfEvenSplit();
        }
    
        const setActiveButton = (button:string) => {
                let array = [     {
                    value: "0",
                    isActive: false,
                },
                {
                    value:"10",
                    isActive: false
                },
                {
                    value:"12",
                    isActive: false
                },
                {
                    value:"15",
                    isActive: false
                },
                {
                    value:"20",
                    isActive: false
                },];
                for(let i = 0 ; i < array.length; i++){
                    if (button === array[i].value){
                        array[i] = {value:button, isActive:true}
                        setServiceChargeButtonArray(array);
                    };
              };}

    return <View style={styles.serviceChargeButtonContainer}>
        {serviceChargeButtonArray.map(
            (buttonValue:{value:string, isActive:boolean}) => {
                return <Pressable
                    style= {({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'orange'
                                : '#4B3F72'
                        },
                        {
                            backgroundColor: buttonValue.isActive
                                ? 'orange'
                                : '#4B3F72'
                        },
                        {
                            borderTopLeftRadius: buttonValue.value === "0"
                                ? 50
                                : 0
                        },
                        {
                            borderBottomLeftRadius: buttonValue.value === "0"
                                ? 50
                                : 0
                        },
                        {
                            borderTopRightRadius: buttonValue.value === "20"
                                ? 50
                                : 0
                        },
                        {
                            borderBottomRightRadius: buttonValue.value === "20"
                                ? 50
                                : 0
                        },
                        styles.serviceChargeButton
                    ]}onPress={() => changeServiceCharge(buttonValue.value)}>
                        <Text style={[
                            {
                                color: buttonValue.isActive
                                    ? '#4B3F72'
                                    : 'orange'
                            }, 
                            styles.serviceChargeButtonText]}>
                            {buttonValue.value}%
                        </Text>
                    </Pressable>
            }
        )}
    </View>

};

const styles = StyleSheet.create({
    serviceChargeButtonContainer: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: 300,
    },
    serviceChargeButton: {
        padding:1,
        width:65,
        height:30,
        justifyContent:"center",
        alignItems:"center",
    },
    serviceChargeButtonText: {
        fontSize:23,
    }
});

export default ServiceChargeButtons;