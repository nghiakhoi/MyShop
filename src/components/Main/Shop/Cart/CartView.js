//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
class CartView extends Component {
    goToDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={{ backgroundColor: 'orange', flex: 1 }}>
                <Text>Cart Component</Text>
                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                    <Text>Go to PRODUCT_DETAIL</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default CartView;