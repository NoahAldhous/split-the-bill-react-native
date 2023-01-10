import {StyleSheet, Text} from 'react-native';
import React from 'react';
import { string } from 'prop-types';

const Header = () => {
    const name:string = 'Tiger'
    return <Text style={styles.header} 
    >Split the Bill</Text>
};

const styles = StyleSheet.create({
    header: {
        fontSize:50,
    }
})

export default Header;