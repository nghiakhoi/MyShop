import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet, TouchableOpacity,
    ListView, RefreshControl
} from 'react-native';
import getListProduct from '../../../../api/getListProduct';
import backList from '../../../../media/appIcon/backList.png';

const url = 'http://192.168.1.87:3000/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// create a component
class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProduct: ds,
            refreshing: false,
            page: 1
        };
        this.arr = [];
    }

    componentDidMount() {
        const idType = this.props.category.id;
        getListProduct(idType, 1)
            .then(arrProduct => {
                this.arr = arrProduct;
                this.setState({ listProduct: this.state.listProduct.cloneWithRows(this.arr) });
            })
            .catch(err => console.log(err));
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    goToDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const { container, header, wrapper,
            backStyle, titleStyle,
            productContainer, productImage, productInfo,
            lastRowInfo, txtName, txtPrice, txtMaterial, txtColor,
            txtShowDetail } = styles;
        const { category } = this.props;
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView
                        removeClippedSubviews={false}
                        dataSource={this.state.listProduct}
                        renderRow={product => (
                            <View style={productContainer}>
                                <Image source={{ uri: `${url}${product.images[0]}` }} style={productImage} />
                                <View style={productInfo}>
                                    <Text style={txtName}>{toTitleCase(product.name)}</Text>
                                    <Text style={txtPrice}>{product.price}$</Text>
                                    <Text style={txtMaterial}>{toTitleCase(product.material)}</Text>
                                    <View style={lastRowInfo}>
                                        <Text style={txtColor}>{product.color}</Text>
                                        <View style={{ backgroundColor: product.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
                                        <TouchableOpacity onPress={() => this.goToDetail(product)}>
                                            <Text style={txtShowDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = this.props.category.id;
                                    getListProduct(idType, newPage)
                                        .then(arrProduct => {
                                            this.arr = arrProduct.concat(this.arr);
                                            this.setState({
                                                listProduct: this.state.listProduct.cloneWithRows(this.arr),
                                                refreshing: false
                                            });
                                        });
                                }}
                            />
                        }
                    />
                </View>
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
        paddingHorizontal: 10,
        flex: 1
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
