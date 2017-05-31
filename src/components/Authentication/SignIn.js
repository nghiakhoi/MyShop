import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class SignIn extends Component {
    render() {
        const {
            inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid="transparent" />
                <TextInput style={inputStyle} placeholder="Enter your password" underlineColorAndroid="transparent" />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 25,
        paddingLeft: 30,
        paddingVertical: 0
    },
    bigButton: {
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});

export default SignIn;
