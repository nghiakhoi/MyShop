//import liraries
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Image, StyleSheet, TextInput
} from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';


class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const { row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            inactiveStyle, activeStyle,
            inputStyle, bigButton, buttonText } = styles;
        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" />
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TextInput style={inputStyle} placeholder="Re-enter your password" />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;

        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Sign In</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34b089',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    inactiveStyle: {
        color: '#d7d7d7'
    },
    activeStyle: {
        color: '#34b089'
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 1
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 25,
        paddingLeft: 30
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

export default Authentication;
