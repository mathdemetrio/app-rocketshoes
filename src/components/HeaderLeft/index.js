import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { LogoContainer, Logo } from './styles';

export default function HeaderLeft() {
  const navigation = useNavigation();

  return (
    <LogoContainer
      onPress={() => {
        navigation.navigate('Home');
      }}
    >
      <Logo />
    </LogoContainer>
  );
}
