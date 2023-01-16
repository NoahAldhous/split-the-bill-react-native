import React, {useState, useReducer, useEffect} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import Slider from '@react-native-community/slider';


const GuestSlider = () => {
    return <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
    />
};

export default GuestSlider;