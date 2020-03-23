import styled from 'styled-components';

export const Container = styled.View`
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductsList = styled.FlatList`
  height: 300px;
`;

export const TotalInfo = styled.View`
  align-items: center;
  margin: 20px 0;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999999;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const FinalizeButton = styled.TouchableOpacity`
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-radius: 4px;
`;

export const FinalizeButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;

export const ProductItem = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDescription = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfRows: 2,
})`
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #eee;
  padding: 0px 15px;
  border-radius: 4px;
  margin-top: 5px;
`;

export const ProductQtdControl = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BtnMinusQtd = styled.TouchableOpacity`
  padding: 4px;
`;

export const ProductQtd = styled.Text`
  background-color: #fff;
  border-radius: 4px;
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const ProductSubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const BtnPlusQtd = styled.TouchableOpacity`
  padding: 4px;
`;
