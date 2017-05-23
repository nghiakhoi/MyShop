//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class OrderHistory extends Component {

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FE762E' }}>
                <Text>OrderHistory</Text>
                <TouchableOpacity onPress={() => { this.goBackToMain(); }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default OrderHistory;
