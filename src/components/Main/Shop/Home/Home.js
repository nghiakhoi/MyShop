//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';

import Collection from './Collection';
import Category from './Category';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#dbdbd8', flex: 1 }}>
                <Collection />
                <Category />
            </View>
        );
    }
}
export default Home;
