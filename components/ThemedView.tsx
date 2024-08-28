import React from 'react';
import { View, ViewProps } from 'react-native';

export const ThemedView = (props: ViewProps) => {
  return <View {...props} style={[{ backgroundColor: '#f5f5f5' }, props.style]} />;
};
