import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './Button.styles';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({label, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
