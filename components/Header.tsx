import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = () => {
    return <Text style={styles.header} 
    >Split the Bill</Text>
};

const styles = StyleSheet.create({
    header: {
        fontSize:40,
    }
})

export default Header;