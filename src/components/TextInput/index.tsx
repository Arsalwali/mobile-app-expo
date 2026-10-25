import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

export default function TextInput(props: any) {
  // const { style, value } = props;
  return (
    <RNTextInput
      {...props}
      placeholderTextColor="#9CA3AF"
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#dbd1d2',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
});