//import liraries
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,
    Image, StyleSheet
} from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';

import SignIn from './SignIn';
import SignUp from './SignUp';


class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    gotoSignIn() {
        this.setState({ isSignIn: true });
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
            inactiveStyle, activeStyle } = styles;
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
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
    }
});

export default Authentication;
