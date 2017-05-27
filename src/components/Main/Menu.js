//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileIcon from '../../media/temp/profile.png';

// create a component
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogedIn: false };
    }
    goToAuthentication() {
        const { navigator } = this.props;
        // tên biến trùng với tên thuộc tính Destructuring Assignment ES6
        navigator.push({ name: 'AUTHENTICATION' });
    }

    goToChangeInfo() {
        const { navigator } = this.props;
        // tên biến trùng với tên thuộc tính Destructuring Assignment ES6
        navigator.push({ name: 'CHANGE_INFO' });
    }

    goToOrderHistory() {
        const { navigator } = this.props;
        // tên biến trùng với tên thuộc tính Destructuring Assignment ES6
        navigator.push({ name: 'ORDERHISTORY' });
    }

    render() {
        const { container, profile, btnStyle, btnText,
            btnSignInStyle, btnTextSignIn, loginContainer,
            username } = styles;
        const logOutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={this.goToAuthentication.bind(this)}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const logInJSX = (
            <View style={loginContainer}>
                <Text style={username}>Hoàng Nghĩa Khởi</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.goToOrderHistory.bind(this)}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.goToChangeInfo.bind(this)}>
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} >
                        <Text style={btnTextSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
        const mainJSX = this.state.isLogedIn ? logInJSX : logOutJSX;
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                {mainJSX}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34b089',
        borderRightWidth: 3,
        borderColor: '#fff',

        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70,
    },
    btnText: {
        color: '#34b089',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34b089',
        fontSize: 15,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});

export default Menu;
