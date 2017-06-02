import React, { Component } from 'react';
import {
    View, Text, TextInput,
    Image, TouchableOpacity, Dimensions, StyleSheet
} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';
import search from '../../../api/searchProduct';

import global from '../../global';

const { height } = Dimensions.get('window');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }
    onSearch() {
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        search(txtSearch)
            .then(arrProduct => global.setSearchArray(arrProduct))
            .catch(err => console.log(err));
    }
    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Thế Giới Gaming Gear</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="Bạn muốn mua gì?"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ txtSearch: text })}
                    onFocus={() => global.gotoSearch()}
                    onSubmitEditing={this.onSearch.bind(this)}
                    value={this.state.txtSearch}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingVertical: 0
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});

export default Header;
