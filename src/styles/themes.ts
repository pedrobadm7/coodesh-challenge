import {DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';
import {responsive} from '../utils/general';

export const FONT_FAMILY_REGULAR = 'AzoSans-Regular';
export const FONT_FAMILY_BLACK = 'AzoSans-Black';
export const FONT_FAMILY_BOLD = 'AzoSans-Bold';
export const FONT_FAMILY_MEDIUM = 'AzoSans-Medium';

const PRIMARY = '#EE2429';

export const COLOR = {
  PRIMARY,
  PRIMARY99: '#FAF3F3',
  PRIMARY_GRADIENT: '#B20000',
  SECONDARY: '#252C31',
  FOREGROUND_COLOR: '#FFF',
  BACKGROUND_COLOR: '#F9FAFA',
  SOFT_GREY: '#EDEEEF',
  NEUTRAL_10: '#070E13',
  NEUTRAL_40: '#252C31',
  NEUTRAL_50: '#3D4347',
  NEUTRAL_60: '#7B7F81',
  NEUTRAL_70: '#83898D',
  NEUTRAL_80: '#ABB1B5',
  NEUTRAL_90: '#CED3D6',
  NEUTRAL_95: '#EDEEEF',
  NEUTRAL_99: '#F9FAFA',
  NEUTRAL_100: '#FFFFFF',
  ERROR40: '#EE2429',
  SUCCESS40: '#41C74E',
  PRIMARY_BUTTON: PRIMARY,
  PRIMARY_BUTTON_TEXT: '#fff',
  PRIMARY_SMOOTH_BUTTON_TEXT: '#FFB0B5',
  SECONDARY_BUTTON: '#fff',
  SECONDARY_BUTTON_TEXT: PRIMARY,
  TEXT_COLOR: '#252C31',
  NO_COLOR: '#00000000',
  BLACK: '#000000',
  BLACK_OVER_ELEMENTS: '#000000bb',
  BLACK_OVERLAY: '#00000066',
};

export const PRODUCT_LIST_PAPER_THEME: Theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.PRIMARY,
    accent: COLOR.SECONDARY,
    error: COLOR.ERROR40,
  },
  fonts: {
    light: {fontFamily: FONT_FAMILY_REGULAR, fontWeight: '400'},
    medium: {fontFamily: FONT_FAMILY_MEDIUM, fontWeight: '400'},
    regular: {fontFamily: FONT_FAMILY_REGULAR, fontWeight: '400'},
    thin: {fontFamily: FONT_FAMILY_REGULAR, fontWeight: '400'},
  },
};

const DEFAULT_SIZE = 14;

export const DEFAULT_FONT_SIZE: number = responsive(
  DEFAULT_SIZE,
  DEFAULT_SIZE * 0.85,
);
export const DEFAULT_BORDER_RADIUS = 10;

export const SPACING = {
  S0_125: DEFAULT_FONT_SIZE * 0.125,
  S0_25: DEFAULT_FONT_SIZE * 0.25,
  S0_5: DEFAULT_FONT_SIZE * 0.5,
  S0_6: DEFAULT_FONT_SIZE * 0.6,
  S0_75: DEFAULT_FONT_SIZE * 0.75,
  S1: DEFAULT_FONT_SIZE,
  S1_15: DEFAULT_FONT_SIZE * 1.15, // 16
  S1_25: DEFAULT_FONT_SIZE * 1.25, // 17
  S1_5: DEFAULT_FONT_SIZE * 1.5, // 21
  S2: DEFAULT_FONT_SIZE * 2,
  S2_5: DEFAULT_FONT_SIZE * 2.5,
  S2_25: DEFAULT_FONT_SIZE * 2.25,
  S2_85: DEFAULT_FONT_SIZE * 2.85, // 40
  S3: DEFAULT_FONT_SIZE * 3,
  S4: DEFAULT_FONT_SIZE * 4,
  S5: DEFAULT_FONT_SIZE * 5,
  S5_75: DEFAULT_FONT_SIZE * 5.75,
  S6: DEFAULT_FONT_SIZE * 6,
  S7: DEFAULT_FONT_SIZE * 7,
  S8: DEFAULT_FONT_SIZE * 8,
  S9: DEFAULT_FONT_SIZE * 9,
  S10: DEFAULT_FONT_SIZE * 10,
  S11: DEFAULT_FONT_SIZE * 11,
  S12: DEFAULT_FONT_SIZE * 12,
  S14: DEFAULT_FONT_SIZE * 14,
  S15: DEFAULT_FONT_SIZE * 15,
  S18: DEFAULT_FONT_SIZE * 18,
  S21: DEFAULT_FONT_SIZE * 21,
  S23: DEFAULT_FONT_SIZE * 23,
  S25: DEFAULT_FONT_SIZE * 25,
  S28: DEFAULT_FONT_SIZE * 28,
};
