//import liraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

// create a component
class Cart extends Component {
    render() {
        const { cartArray } = this.props;
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} cartArray={cartArray} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}
export default Cart;
