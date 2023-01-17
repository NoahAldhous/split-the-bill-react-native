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
    
    const [numberOfGuests, setNumberofGuests] = useState<number>(1)
    
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
          Number(bill) -
          Number(amountToPay) * Number(numberOfGuests));
        console.log(`remainder: ${remainder}`)
    }

    const calculateOddOneOut = () => {
        setOddOneOut(Number(
            Number(amountToPay) + Number(remainder)
            ).toFixed(2));
          console.log(`odd one out:${oddOneOut}`)
  
          if (oddOneOut == amountToPay) {
            setEvenSplit(true);
          }
        }

    useEffect(() => {
        calculateBill();
    }, [userInput, serviceCharge, numberOfGuests, bill]);

    useEffect(() => {
        checkIfEvenSplit();
    }, [amountToPay, serviceCharge, numberOfGuests]);

    useEffect(() => {
        calculateUnevenSplit();
    }, [evenSplit, amountToPay, serviceCharge, numberOfGuests]);

    useEffect(() => {
        calculateOddOneOut();
    }, [remainder, serviceCharge]);

    return <View>
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
        <Text>Add a Tip?</Text>
        <ServiceChargeButtons 
            setServiceCharge={setServiceCharge} 
            calculateBill={calculateBill}
            serviceChargeButtonArray={serviceChargeButtonArray}
            setServiceChargeButtonArray={setServiceChargeButtonArray}

        />
        <Text>Split Between:{numberOfGuests}</Text>
        <GuestSlider
            setNumberOfGuests={setNumberofGuests}
        />
        { evenSplit ? <Text style={styles.amountToPayText}>Each Pays: £{amountToPay}</Text> : <Text style={styles.amountToPayText}> One Pays: {oddOneOut} Rest Pays: {amountToPay}</Text>}  
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
        backgroundColor:"#ADA3CC",
        borderRadius:50,
        padding:5
    },
    billText: {
        fontSize:35,
        color:"#1F2041"
    },
    amountToPayText: {
        fontSize:20,
        color:"#1F2041"
    }
  });

export default Calculator;