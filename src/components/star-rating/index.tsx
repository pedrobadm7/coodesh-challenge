import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR, SPACING } from '../../styles/themes';

export function StarRating() {
  const [starSelected, setStarSelected] = useState(0);

  function handleStarPress(index: number) {
    if (index + 1 === starSelected) {
      setStarSelected(prevState => prevState - 1);
    } else {
      setStarSelected(index + 1);
    }
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      {[...Array(5)].map((_, index) => {
        const iconName = index < starSelected ? 'star' : 'star-outline';

        return (
          <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
            <Icon
              name={iconName}
              style={{fontSize: SPACING.S1_5, color: COLOR.PURPLE_500, }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
