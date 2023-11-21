// ButtonComponent.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  backgroundColor: string;
  borderRadius: number;
  marginHorizontal: number;
  fontColor: string;
  borderColor: string;
  onPress: () => void;
  buttonText: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  backgroundColor,
  borderRadius,
  marginHorizontal,
  fontColor,
  borderColor,
  onPress,
  buttonText,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor,
        borderRadius,
        marginHorizontal,
        borderColor,
      }}
      onPress={onPress}
    >
      <Text style={{ color: fontColor }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    elevation: 10,
  },
});

export default ButtonComponent;
