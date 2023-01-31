import {Image} from 'react-native';
import styled from 'styled-components/native';
import {COLOR, DEFAULT_BORDER_RADIUS, SPACING} from '../../styles/themes';

export const ProductImage = styled(Image)`
  width: 100%;
  height: 50%;
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

export const ProductDetailContainer = styled.View`
  margin-top: ${SPACING.S5}px;
`;

export const ProductDetail = styled.View`
  background-color: ${COLOR.GRAY_200};
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  padding: 5px 25px;
  margin: 5px 10px;
  align-items: center;
`;
