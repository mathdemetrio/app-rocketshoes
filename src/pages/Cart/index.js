import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductsList,
  TotalInfo,
  TotalText,
  TotalPrice,
  FinalizeButton,
  FinalizeButtonText,
  ProductItem,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  ProductBar,
  ProductQtdControl,
  BtnMinusQtd,
  ProductQtd,
  ProductSubTotal,
  BtnPlusQtd,
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
    ],
  };

  productItem = item => {
    return (
      <ProductItem>
        <ProductImage source={{ uri: item.image }} />
        <ProductDescription>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.price}</ProductPrice>
        </ProductDescription>
        <ProductBar>
          <ProductQtdControl>
            <BtnMinusQtd>
              <Icon name="remove-circle-outline" size={20} color="#000" />
            </BtnMinusQtd>
            <ProductQtd>3</ProductQtd>
            <BtnPlusQtd>
              <Icon name="add-circle-outline" size={20} color="#000" />
            </BtnPlusQtd>
          </ProductQtdControl>
          <ProductSubTotal>R$ 552,00</ProductSubTotal>
        </ProductBar>
      </ProductItem>
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
        />
        <TotalInfo>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>R$ 1325,92</TotalPrice>
        </TotalInfo>
        <FinalizeButton>
          <FinalizeButtonText>Finalizar Pedido</FinalizeButtonText>
        </FinalizeButton>
      </Container>
    );
  }
}
