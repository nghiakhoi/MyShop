//import liraries
import React, { Component } from 'react';
//import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import refreshToken from '../../api/refreshToken';
import global from '../global';

class Main extends Component {

    componentDidMount() {
        getToken()
            .then(token => checkLogin(token))
            .then(res => global.onSignIn(res.user))
            .catch(err => console.log(err));
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
