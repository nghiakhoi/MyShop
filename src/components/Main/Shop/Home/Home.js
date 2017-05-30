//import liraries
import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import HomeView from '../Home/HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

// create a component
class Home extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} types={types} topProducts={topProducts} />;
                        case 'LIST_PRODUCT': return <ListProduct navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}
export default Home;
