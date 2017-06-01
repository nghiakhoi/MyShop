//import liraries
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

class MyClass extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': return <Main navigator={navigator} />;
                        case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} user={route.user} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
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
export default MyClass;
