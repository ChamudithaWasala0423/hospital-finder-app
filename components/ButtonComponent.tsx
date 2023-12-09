/* eslint-disable prettier/prettier */
// ButtonComponent.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonComponentProps {
  backgroundColor: string;
  borderRadius: number;
  marginHorizontal: number;
  fontColor: string;
  borderColor: string;
  onPress: () => void;
  buttonText: string;
  width?: number; // Optional width
  height?: number; // Optional height
  textStyle?: TextStyle; // Optional text style
  buttonStyle?: ViewStyle; // Optional button style
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  backgroundColor,
  borderRadius,
  marginHorizontal,
  fontColor,
  borderColor,
  onPress,
  buttonText,
  width = 150, // Default width
  height = 50, // Default height
  textStyle = {}, // Default empty object for optional customization
  buttonStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor,
        borderRadius,
        marginHorizontal,
        borderColor,
        width,
        height,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        ...buttonStyle, // Apply custom button styles
      }}
      onPress={onPress}>
      <Text style={{color: fontColor, ...textStyle}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
  },
});

export default ButtonComponent;
