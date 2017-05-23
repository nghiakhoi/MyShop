//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create a component
class Contact extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
                <Text>Contact Component</Text>
            </View>
        );
    }
}
export default Contact;
