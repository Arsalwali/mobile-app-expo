import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Food App</Text>
      </View>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} />
        <View style={styles.buttonContainer}>
          <Button color="white" title="Login" onPress={() => { }}></Button>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Privacy Policy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // borderColor: 'blue',
    // borderWidth: 1,
    height: 300,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // borderColor: 'green',
    // borderWidth: 1,
    flex: 1,
  },
  footer: {
    // borderColor: 'yellow',
    // borderWidth: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 10,
    height: 50,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    marginHorizontal: 50,
    height: 50,
    justifyContent: 'center',
  }
});