import React, {useState, useReducer, useEffect, Dispatch, SetStateAction} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import Slider from '@react-native-community/slider';

type GuestSliderProps = {
    setNumberOfGuests: Dispatch<SetStateAction<number>>
}

const GuestSlider: React.FunctionComponent<GuestSliderProps> = ({setNumberOfGuests}) => {


    return <Slider
        style={{width: 325, height: 40}}
        minimumValue={2}
        maximumValue={10}
        minimumTrackTintColor='orange'
        maximumTrackTintColor='#1F2041'
        thumbTintColor='orange'
        tapToSeek={true}
        step={1}
        onValueChange= {(value:number) => {setNumberOfGuests(value)}}
    />
};

export default GuestSlider;