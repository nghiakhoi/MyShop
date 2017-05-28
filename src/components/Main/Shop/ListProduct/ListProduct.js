import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet, TouchableOpacity,
    ScrollView
} from 'react-native';

import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

// create a component
class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    goToDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const { container, header, wrapper,
            backStyle, titleStyle,
            productContainer, productImage, productInfo,
            lastRowInfo, txtName, txtPrice, txtMaterial, txtColor,
            txtShowDetail } = styles;
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material Silk</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbd8',
        padding: 10
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5,
        paddingHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    backStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#b10d65',
        fontSize: 30
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopColor: '#f0f0f0',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1,
        paddingVertical: 15
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1,
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#bcbcbc',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#b10d65',
    },
    txtMaterial: {
        fontFamily: 'Avenir',
    },
    txtColor: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#b10d65',
        fontSize: 13
    }
});

//make this component available to the app
export default ListProduct;
