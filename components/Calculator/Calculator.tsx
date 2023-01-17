import React, {useState, useReducer, useEffect} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import CalculatorButtons from './CalculatorButtons';
import GuestSlider from './GuestSlider';
import ServiceChargeButtons from './ServiceChargeButtons';

const Calculator = () => {

    const [serviceChargeButtonArray, setServiceChargeButtonArray] =
    useState<{value:string, isActive:boolean}[]>([
        {
            value: "0",
            isActive: true,
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
        },
    ]);

    const [remainder, setRemainder] = useState<number>(0)

    const [evenSplit, setEvenSplit] = useState<boolean>(true)
    
    const [oddOneOut, setOddOneOut] = useState<string>("")
    
    const [userInput, setUserInput] = useState<string>("0")
    
    const [serviceCharge, setServiceCharge] = useState<number>(0);
    
    const [bill, setBill] = useState<string>("0.00")
    
    const [numberOfGuests, setNumberofGuests] = useState<number>(2)
    
    const [amountToPay, setAmountToPay] = useState<string>("0.00")


    const calculateAmountToPay = () => {
        setAmountToPay(Number(Number(bill) / numberOfGuests).toFixed(
          2
        ));
      }

      const calculateBill = () => {

        let billWithoutTip:number = Number(userInput);

        let tip:number = Number(((billWithoutTip / 100) * serviceCharge).toFixed(2))
        
        setBill((billWithoutTip + tip).toFixed(2));
        
        // calculateAmountToPay();

        setAmountToPay(Number(Number(bill) / numberOfGuests).toFixed(
            2
          ));
    }

    const checkIfEvenSplit = () => {
        if (
            Number(amountToPay) * Number(numberOfGuests) !==
            Number(bill)
          ) {
            setEvenSplit(false);
          } else {
            //evenSplit set back to true to trigger conditional render.
            setEvenSplit(true);
          }
    }

    const calculateUnevenSplit = () => {

        setRemainder(
          Number(Number(Number(bill) -
          Number(amountToPay) * Number(numberOfGuests)).toFixed(2)));
    }

    const calculateOddOneOut = () => {
        setOddOneOut(Number(
            Number(amountToPay) + Number(remainder)
            ).toFixed(2));
  
          if (oddOneOut === amountToPay) {
            setEvenSplit(true);
          }
        }

    useEffect(() => {
        calculateBill();
    }, [userInput, serviceCharge, numberOfGuests, bill]);

    useEffect(() => {
        checkIfEvenSplit();
    });

    useEffect(() => {
        calculateUnevenSplit();
    }, [evenSplit, amountToPay]);

    useEffect(() => {
        calculateOddOneOut();
    });

    return <View style={styles.calculatorContainer}>
        <View style={styles.billTextContainer}>
            <Text style={styles.billText}>{bill}</Text>
        </View>
        <CalculatorButtons 
            userInput = {userInput}
            setUserInput = {setUserInput}
            setBill = {setBill}
            serviceCharge = {serviceCharge}
            setServiceCharge= {setServiceCharge}
            setServiceChargeButtonArray={setServiceChargeButtonArray}
        />
        <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Add a Tip?</Text>
        </View>
        <ServiceChargeButtons 
            setServiceCharge={setServiceCharge} 
            calculateBill={calculateBill}
            serviceChargeButtonArray={serviceChargeButtonArray}
            setServiceChargeButtonArray={setServiceChargeButtonArray}
            checkIfEvenSplit={checkIfEvenSplit}

        />
        { evenSplit 
            ? <View style={styles.amountToPayTextContainer}>
                <Text style={styles.amountToPayText}>Each Pays: £{amountToPay}</Text>
            </View>
            : <View style={styles.amountToPayTextContainer}>
                <Text style={styles.amountToPayText}> One Pays: {oddOneOut}</Text> 
                <Text style={styles.amountToPayText}> Rest Pays: {amountToPay}</Text>  
            </View>
        }
        <GuestSlider
            setNumberOfGuests={setNumberofGuests}
        />
        <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Split Between:{numberOfGuests}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    calculatorContainer: {
        justifyContent: "space-between",
        alignItems:"center",
        height:700,
        width:325
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
    },
    billTextContainer: {
        alignItems:"flex-end",
        backgroundColor:"#ADA3CC",
        borderRadius:50,
        padding:5,
        width:300
    },
    billText: {
        fontSize:35,
        color:"#1F2041"
    },
    amountToPayTextContainer: {
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        height: 70,
        width: 325,
    },
    amountToPayText: {
        fontSize:28,
        color:"#1F2041"
    },
    infoTextContainer: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ADA3CC",
        borderRadius:50,
        width: 325
    },
    infoText: {
        fontSize:25,
        color:"#1F2041",
    }
  });

export default Calculator;