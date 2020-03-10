import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BasketContainer, ItemCount } from './styles';

export default function HeaderRight() {
  return (
    <BasketContainer onPress={() => {}}>
      <Icon name="shopping-basket" color="#FFF" size={24} />
      <ItemCount>0</ItemCount>
    </BasketContainer>
  );
}
