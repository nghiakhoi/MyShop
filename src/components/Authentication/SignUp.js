import React, { Component } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';

import register from '../../api/register';

// create a component
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        };
    }
    registerUser() {
        const { name, email, password } = this.state;
        register(email, name, password)
            .then(res => {
                if (res.kq === 'THANH_CONG') {
                    return this.onSuccess();
                }
                this.onFail();
            });
    }
    onSuccess() {
        Alert.alert(
            'Thông báo',
            'Đăng ký thành công',
            [
                { text: 'OK', onPress: () => this.setState({ email: '' }) }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Thông báo',
            'Email đã được sử dụng',
            [
                { text: 'OK', onPress: () => this.setState({ email: '' }) }
            ],
            { cancelable: false }
        );
    }

    render() {
        const {
            inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    underlineColorAndroid="transparent"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    underlineColorAndroid="transparent"
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Re-enter your password"
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity
                    onPress={this.registerUser.bind(this)}
                    style={bigButton}
                >
                    <Text style={buttonText}>SIGN UP NOW</Text>
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

export default SignUp;
