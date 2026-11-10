import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const name = 'Arsal';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>My App</Text>
      </View>
      <View style={styles.content}>
        <TextInput style={styles.textbox} placeholder='Email' value={email} onChangeText={setEmail} />
        <TextInput style={styles.textbox} placeholder='Password' value={password} onChangeText={setPassword} />
        <View style={styles.buttonContainer}>
          <Button title='Login' onPress={() => Alert.alert(`${email} - ${password}`)} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Privacy Policy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    borderColor: 'red',
    borderWidth: 1,
  },
  logo: {
    margin: 10,
    height: 200,
    //borderColor: 'green',
    //borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    margin: 10,
    //borderColor: 'blue',
    //borderWidth: 1,
  },
  footer: {
    height: 200,
    margin: 10,
    //borderColor: 'yellow',
    //borderWidth: 1,
    alignItems: 'center',
  },
  textbox: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  logoText: {
    fontSize: 40,
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 20,
  }
});
