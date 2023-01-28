import {Platform, StatusBar} from 'react-native';
import {Image} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {
  COLOR,
  DEFAULT_BORDER_RADIUS,
  FONT_FAMILY_BOLD,
  SPACING,
} from '../../../styles/themes';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  height: 100%;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background-color: ${COLOR.BACKGROUND_COLOR};
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardContainer = styled.TouchableOpacity`
  margin: ${SPACING.S1}px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  background-color: green;
`;

export const ProductImage = styled(Image)`
  width: ${SPACING.S9}px;
  height: ${SPACING.S9}px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

export const CardDetails = styled.View`
  flex: 1;
  padding-left: ${SPACING.S0_75}px;
  margin: 0 ${SPACING.S0_25}px;
  justify-content: space-between;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

export const RatingAndPriceContainer = styled.View`
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
`;

export const Price = styled(Text)`
  color: ${COLOR.PURPLE_500};
  font-family: ${FONT_FAMILY_BOLD};
  padding-left: ${SPACING.S0_125}px;
  font-weight: 600;
`;
