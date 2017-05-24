import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { height, width } = Dimensions.get('window');

class Category extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>BÀN PHÍM CƠ</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        <Image source={littleIcon} style={imageStyle}>
                            <Text style={cateTitle}>Razer BWU</Text>
                        </Image>
                        <Image source={maxiIcon} style={imageStyle}>
                            <Text style={cateTitle}>Corsair K95</Text>
                        </Image>
                        <Image source={partyIcon} style={imageStyle}>
                            <Text style={cateTitle}>Fuhlen SM890</Text>
                        </Image>
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
        paddingBottom: height * 0.01
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
