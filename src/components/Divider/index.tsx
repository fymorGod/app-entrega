import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface DividerProps {
  color?: string;
  opacity?: number;
  thickness?: number;
  marginVertical?: number;
  orientation?: 'horizontal' | 'vertical'; 
  marginHorizontal?: number;
}

export const Divider: React.FC<DividerProps> = ({
  color = 'gray',
  opacity = 0.3,
  thickness = 1,
  marginVertical = 16,
  orientation = 'horizontal',
  marginHorizontal = 0,
}) => {
  return (
    <View
      style={[
        styles.divider,
        orientation === 'horizontal'
          ? {
              backgroundColor: color,
              opacity: opacity,
              height: thickness,
              marginVertical: marginVertical,
            }
          : {
              backgroundColor: color,
              opacity: opacity,
              width: thickness,
              height: '100%',
              marginHorizontal: marginHorizontal,
            },
      ]}
    />
  );
};

