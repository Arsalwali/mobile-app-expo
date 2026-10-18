import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Food Delivery App</Text>
      </View>
      <View style={styles.content}>
        <TextInput style={styles.input} value="Email"></TextInput>
        <TextInput style={styles.input} value="Password"></TextInput>
        <View style={styles.buttonContainer}>
          <Button
            color='blue'
            title="Login"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text>Privacy Policy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 200,
    // borderColor: 'green',
    // borderWidth: 1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  bottom: {
    height: 200,
    // borderColor: 'red',
    // borderWidth: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: 'blue'
  },
  buttonContainer: {
    padding: 20,
    width: 250,
    // borderColor: 'red',
    // borderWidth: 1,
  }
});
