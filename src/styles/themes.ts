import {DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';
import {responsive} from '../utils/general';

export const FONT_FAMILY_REGULAR = 'AzoSans-Regular';
export const FONT_FAMILY_BLACK = 'AzoSans-Black';
export const FONT_FAMILY_BOLD = 'AzoSans-Bold';
export const FONT_FAMILY_MEDIUM = 'AzoSans-Medium';

const PRIMARY = '#034CAD';

export const COLOR = {
  PRIMARY,
  PRIMARY_100: '#F5F8FF',
  PRIMARY_200: '#E2EAFE',
  PRIMARY_300: '#AEBDE3',
  PRIMARY_400: '#0060E6',
  PRIMARY_500: '#034CAD',
  DANGER_500: '#CC0707',
  WHITE: '#ffffff',
  BACKGROUND_COLOR: '#F9FAFA',
  WHITE_400: '#F8F4EF',
  GRAY_30: '#F8FAFB',
  GRAY_80: '#e6e6e6',
  WHITE700: '#F8F4EF',
  GRAY_100: '#F5F6F6',
  GRAY_125: '#f5f7f6',
  GRAY_150: '#F8F6F4',
  GRAY_200: '#E5E5E5',
  GRAY_300: '#aaaaaa',
  GRAY_500: '#B5B5B5',
  GRAY_600: '#BEBEBE',
  GRAY_700: '#818381',
  GRAY_800: '#7B7773',
  GRAY_900: '#4A4A4A',
  BLACK: '#000000',
  BLACK_900: '#2E2E2E',
  GREEN_50: '#EEF9F7',
  GREEN_100: '#C8EAE8',
  GREEN_150: '#ABBBB0',
  GREEN_200: '#a8c5b2',
  GREEN_250: '#96D5D1',
  GREEN_300: '#729B99',
  GREEN_400: '#00A398',
  GREEN_800: '#008179',
  GREEN_900: '#4D5B5A',
  GREEN_LIGHT: '#F3FAF9',
  RED_100: '#FEF3F3',
  RED_200: '#ffe9e9',
  RED_300: '#F4B9B9',
  RED_400: '#9D342D',
  RED_500: '#F05A2C',
  RED_600: '#D05A52',
  RED_700: '#b00020',
  RED_800: '#FF6584',
  RED_900: '#CC0707',
  RED_1000: '#7D1A1A',
  SUCCESS: '#37C55D',
  YELLOW_100: '#F1CA9C',
  YELLOW_200: '#ab6d25',
  YELLOW_300: '#FFC107',
  YELLOW_500: '#EEAC55',
  YELLOW_600: '#C77D1C',
  YELLOW_700: '#FFF4D4',
  YELLOW_800: '#6C4500',
  YELLOW_900: '#ffd26f',
  PURPLE_LIGHT: '#D7D2F3',
  PURPLE_500: '#7B61FF',
  BLUE_GREY50: '#ECEFF1',
  ORANGE: '#FFA184',
};

export const PRODUCT_LIST_PAPER_THEME: Theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.PRIMARY,
    error: COLOR.RED_900,
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
