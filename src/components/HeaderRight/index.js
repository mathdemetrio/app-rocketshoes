import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BasketContainer, ItemCount } from './styles';

export default function HeaderRight() {
  const navigation = useNavigation();

  return (
    <BasketContainer
      onPress={() => {
        navigation.navigate('Cart');
      }}
    >
      <Icon name="shopping-basket" color="#FFF" size={24} />
      <ItemCount>0</ItemCount>
    </BasketContainer>
  );
}
