import {Dimensions} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const MIN_HEIGHT = 668;

export const responsive = (defaultSize: number, smallDevices: number) => {
  return SCREEN_HEIGHT < MIN_HEIGHT ? smallDevices : defaultSize;
};
