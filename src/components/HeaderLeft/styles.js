import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const LogoContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  margin-left: 10px;
`;
