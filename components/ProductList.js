import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const ProductList = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>This is ProductList</Text>
            <Image style={style.categoryImage} source={props.imageSource}></Image>
        </View>     
    );
}

const style = StyleSheet.create({
    container:{
        alignItems:"center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor:'#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width:0, height:2},
        elevation: 5,
        marginBottom: 16
    },
    categoryImage:{
        width: 64,
        height: 64
    },
    title:{
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: '700'
    }
});

export default ProductList;