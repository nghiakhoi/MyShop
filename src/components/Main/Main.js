//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class Main extends Component {

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
            <View style={{ flex: 1, backgroundColor: '#F22672' }}>
                <Text>Main Component</Text>
                <TouchableOpacity onPress={() => { this.goToAuthentication(); }}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.goToChangeInfo(); }}>
                    <Text>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.goToOrderHistory(); }}>
                    <Text>Go to Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Main;
