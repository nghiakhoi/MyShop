//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

// create a component
class HomeView extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <ScrollView style={{ backgroundColor: '#dbdbd8', flex: 1 }}>
                <Collection navigator={this.props.navigator} types={types} />
                <Category navigator={this.props.navigator} types={types} topProducts={topProducts} />
                <TopProduct navigator={this.props.navigator} types={types} topProducts={topProducts} />
            </ScrollView>
        );
    }
}
export default HomeView;
