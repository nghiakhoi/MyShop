//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

// create a component
class HomeView extends Component {
    render() {
        const { types } = this.props;
        return (
            <ScrollView style={{ backgroundColor: '#dbdbd8', flex: 1 }}>
                <Collection />
                <Category navigator={this.props.navigator} types={types}/>
                <TopProduct navigator={this.props.navigator} />
            </ScrollView>
        );
    }
}
export default HomeView;
