//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import HomeView from '../Home/HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

// create a component
class Home extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} />;
                        case 'LIST_PRODUCT': return <ListProduct navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
                configureScene={route => {
                    if (route.name === 'AUTHENTICATION') {
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
                    }
                    return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}
export default Home;
