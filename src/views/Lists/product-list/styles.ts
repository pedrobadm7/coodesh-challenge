import {Platform, StatusBar} from 'react-native';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {COLOR, DEFAULT_BORDER_RADIUS, SPACING} from '../../../styles/themes';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background-color: ${COLOR.BACKGROUND_COLOR};
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardContainer = styled.View`
  margin: ${SPACING.S1}px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

export const ProductImage = styled(Image)`
  width: ${SPACING.S9}px;
  height: ${SPACING.S9}px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

export const CardDetails = styled.View`
  flex: 1;
  padding: ${SPACING.S0_75}px;
  margin: 0 ${SPACING.S0_25}px;
  justify-content: space-between;

  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

export const RatingAndPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;