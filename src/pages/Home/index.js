import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  ProductsList,
  ProductBox,
  ProductTitle,
  Price,
  AddToCart,
  ProductAmount,
  ProductAmountText,
  TextAddCart,
  ProductImage,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({
      products: response.data,
    });
  }

  productItem = item => {
    return (
      <ProductBox>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <Price>R$ {item.price}</Price>
        <AddToCart>
          <ProductAmount>
            <Icon name="add-shopping-cart" size={20} color="#fff" />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <TextAddCart>Adicionar</TextAddCart>
        </AddToCart>
      </ProductBox>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductsList
          data={products}
          renderItem={({ item }) => this.productItem(item)}
          keyExtractor={item => String(item.id)}
          horizontal
        />
      </Container>
    );
  }
}
