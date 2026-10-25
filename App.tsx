import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import TextInput from './src/components/TextInput';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Food Delivery App</Text>
      </View>
      <View style={styles.content}>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email'></TextInput>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Password'></TextInput>
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
    backgroundColor: 'white',
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
