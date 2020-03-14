import styled from 'styled-components/native';

export const BasketContainer = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: 12px;
  right: 1px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 10px;
  overflow: hidden;
`;
