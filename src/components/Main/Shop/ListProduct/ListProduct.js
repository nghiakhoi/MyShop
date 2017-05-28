import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    goToDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToDetail.bind(this)}>
                    <Text>Go to Detail</Text>
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
export default ListProduct;
