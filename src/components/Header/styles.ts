import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {COLOR, FONT_FAMILY_BLACK, SPACING} from '../../styles/themes';

export const Header = styled.View`
  margin: ${SPACING.S1}px;
`;

export const HeaderTitle = styled(Text)`
  color: ${COLOR.PURPLE_500};
  font-family: ${FONT_FAMILY_BLACK};
  font-size: ${SPACING.S2}px;
`;
