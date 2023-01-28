import {Image} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {FONT_FAMILY_REGULAR, SPACING} from '../../styles/themes';

export const ProductImage = styled(Image)`
  width: 100%;
  height: 70%;
  margin-top: -${SPACING.S7}px;
  border-top-right-radius: ${SPACING.S0_57}px;
  border-top-left-radius: ${SPACING.S0_57}px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  align-items: flex-start;
  padding: ${SPACING.S1}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${SPACING.S1}px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Title = styled(Text)`
  font-family: ${FONT_FAMILY_REGULAR};
  font-size: ${SPACING.S2}px;
`;

export const Description = styled(Text)`
  font-family: ${FONT_FAMILY_REGULAR};
`;
