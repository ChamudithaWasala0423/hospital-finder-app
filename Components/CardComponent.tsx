// CardComponent.tsx
import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

interface CardComponentProps {
  color?: string;
  width?: string;
  height?: string;
  marginTop?: number;
  marginBottom?: number;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  children?: ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({
  color,
  width,
  height,
  marginTop,
  marginBottom,
  alignItems,
  justifyContent,
  children,
}) => {
  const cardStyles: ViewStyle = {
    backgroundColor: color || 'black',
    width: width || '90%',
    height: height || '25%',
    marginTop: marginTop || 10,
    marginBottom: marginBottom || 10,
    padding: 16,
    borderRadius: 8,
    alignItems: alignItems || 'center',
    justifyContent: justifyContent || 'center',
    elevation: 10,
  };

  return <View style={cardStyles}>{children}</View>;
};

export default CardComponent;
