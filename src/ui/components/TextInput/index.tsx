import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

export default function TextInput() {
  return (
    <RNTextInput
      style={styles.textbox}
      placeholder='Email'
    />
  );
}

const styles = StyleSheet.create({
  textbox: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
});