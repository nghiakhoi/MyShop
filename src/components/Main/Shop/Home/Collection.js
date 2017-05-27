import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import bannerImage from '../../../../media/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>HOT GAMING GEAR</Text>
                </View>
                <View style={{ flex: 4 }} >
                    <Image source={bannerImage} style={imageStyle} />
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
        width: imageWidth
    }
});

export default Collection;
