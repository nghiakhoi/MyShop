import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProductDetail;
