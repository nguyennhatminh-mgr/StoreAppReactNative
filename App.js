import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './components/ProductList'; 
import christmas from './assets/christmas.png';
import holidays from './assets/holidays.png';
import ski from './assets/ski.png';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductList imageSource={christmas}></ProductList>
      <ProductList imageSource={holidays}></ProductList>
      <ProductList imageSource={ski}></ProductList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
