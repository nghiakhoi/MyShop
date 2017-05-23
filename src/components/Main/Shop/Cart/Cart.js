//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create a component
class Cart extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'orange', flex: 1 }}>
                <Text>Cart Component</Text>
            </View>
        );
    }
}
export default Cart;
