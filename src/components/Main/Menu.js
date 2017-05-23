//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
class Menu extends Component {
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
        return (
            <View style={{ flex: 1, backgroundColor: '#167AC6' }}>
                <Text>Component Menu</Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeInfo.bind(this)}>
                    <Text>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
                    <Text>Go to Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Menu;
