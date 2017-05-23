//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class ChangeInfo extends Component {

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1053AC' }}>
                <Text>Change Info</Text>
                <TouchableOpacity onPress={() => { this.goBackToMain(); }}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ChangeInfo;
