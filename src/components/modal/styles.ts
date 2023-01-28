import {Image} from 'react-native';
import styled from 'styled-components/native';
import {SPACING} from '../../styles/themes';

export const ProductImage = styled(Image)`
  width: 100%;
  height: 70%;
  border-top-right-radius: ${SPACING.S0_57}px;
  border-top-left-radius: ${SPACING.S0_57}px;
`;

export const ModalContainer = styled.View`
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${SPACING.S1}px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
