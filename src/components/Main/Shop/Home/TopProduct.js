import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet, Dimensions,
    TouchableOpacity, ListView
} from 'react-native';

const url = 'http://192.168.1.87:3000/images/product/';

class TopProduct extends Component {
    goToDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const { container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>EXCELLENT PRODUCTS</Text>
                </View>

                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({
                        rowHasChanged: (r1, r2) => r1 !== r2
                    }).cloneWithRows(topProducts)}
                    renderRow={(product) => (
                        <TouchableOpacity
                            style={productContainer}
                            onPress={() => this.goToDetail(product)} key={product.id}
                        >
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={productImage} />
                            <Text style={productName}>{product.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                    renderSeparator={(sectionid, rowid) => {
                        if (rowid % 2 === 1) {
                            return <View style={{ width, height: 10 }} />;
                        }
                        return null;
                    }}
                />
            </View >
        );
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        color: '#d3d3cf',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5,
        backgroundColor: '#fff',
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#d3d3cf',
        fontWeight: '500',
        marginVertical: 5
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662f90',
        marginBottom: 5
    }
});

export default TopProduct;

/*<View style={body}>
                    {this.props.topProducts.map(e => (
                        <TouchableOpacity
                            style={productContainer}
                            onPress={() => this.goToDetail(e)} key={e.id}>
                            <Image source={{ uri: `${url}${e.images[0]}` }} style={productImage} />
                            <Text style={productName}>{e.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{e.price}$</Text>
                        </TouchableOpacity>
                    ))}
                </View>*/