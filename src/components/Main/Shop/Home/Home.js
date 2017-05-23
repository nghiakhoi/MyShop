//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'pink', flex: 1 }}>
                <Text>Home Component</Text>
            </View>
        );
    }
}
export default Home;
