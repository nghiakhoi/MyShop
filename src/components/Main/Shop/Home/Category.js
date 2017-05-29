import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { height, width } = Dimensions.get('window');
const url = 'http://localhost:3000/images/type/';

class Category extends Component {
    goToListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        const { types } = this.props;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>BÀN PHÍM CƠ</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        {types.map(e => (
                            <TouchableOpacity onPress={this.goToListProduct.bind(this)} key={e.id}>
                                <Image source={{ uri: `${url}${e.image}` }} style={imageStyle}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
            </View >
        );
    }
}

const imageWidth = width - 40;
const imageHeight = ((imageWidth / 933) * 465) - 20;
const styles = StyleSheet.create({
    wrapper: {
        height: imageHeight + 50,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        paddingBottom: height * 0.01,
        elevation: 5
    },
    textStyle: {
        fontSize: 20,
        color: '#afaeaf'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9a9a9a'
    }
});

export default Category;
