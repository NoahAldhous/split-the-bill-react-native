import React, {useState, useReducer, useEffect, Dispatch, SetStateAction} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import Slider from '@react-native-community/slider';

type GuestSliderProps = {
    setNumberOfGuests: Dispatch<SetStateAction<number>>
}

const GuestSlider: React.FunctionComponent<GuestSliderProps> = ({setNumberOfGuests}) => {


    return <Slider
        style={{width: 300, height: 40}}
        minimumValue={1}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        tapToSeek={true}
        step={1}
        onValueChange= {(value:number) => {setNumberOfGuests(value)}}
    />
};

export default GuestSlider;