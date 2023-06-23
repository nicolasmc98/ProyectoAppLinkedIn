import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({value,onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#272d4d',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}