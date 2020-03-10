import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
`;

export const ProductsList = styled.FlatList`
  padding-top: 20px;
`;

export const ProductBox = styled.View`
  width: 220px;
  margin: 10px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text.attrs({ numberOfLines: 2 })`
  font-size: 16px;
`;

export const Price = styled.Text`
  margin: 10px 0;
  font-size: 21px;
  font-weight: bold;
`;

export const AddToCart = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  color: #fff;
  border-radius: 4px;
  height: 42px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ProductAmountText = styled.Text`
  font-size: 14px;
  margin-left: 5px;
  color: #fff;
`;

export const TextAddCart = styled.Text`
  flex: 1;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 42px;
`;
