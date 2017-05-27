//import liraries
import React, { Component } from 'react';
//import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

class Main extends Component {

    goToAuthentication() {
        const { navigator } = this.props;
        // tên biến trùng với tên thuộc tính Destructuring Assignment ES6
        navigator.push({ name: 'AUTHENTICATION' });
    }

    goToChangeInfo() {
        const { navigator } = this.props;
        // tên biến trùng với tên thuộc tính Destructuring Assignment ES6
        navigator.push({ name: 'CHANGE_INFO' });
    }

    goToOrderHistory() {
        const { navigator } = this.props;
        // tên biến trùng với tên thuộc tính Destructuring Assignment ES6
        navigator.push({ name: 'ORDERHISTORY' });
    }

    closeControlPanel = () => {
        this._drawer.close();
    };
    openControlPanel = () => {
        this._drawer.open();
    };

    render() {
        const { navigator } = this.props;
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<Menu navigator={navigator} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
export default Main;
