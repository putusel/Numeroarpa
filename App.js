import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [result, setData] = useState('');
  var counter = 0;
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  
  const buttonPressed = () => { 
    counter = counter + 1;
    if (Number(text) > randomNumber) {
      const result = (`Your guess ${text} is too high`);
      setData(result);
    } else if (Number(text) < randomNumber) {
      const result = (`Your guess ${text} is too low`);
    } else {
      Alert.alert('You guessed the number in ' + counter + ' guesses'); 
    }
  };
    
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess a number between 1-100</Text>
      <TextInput 
          style={styles.input} 
          keyboardType={'numeric'}
          onChangeText={text => setText(text)} value={text}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
          <Button onPress={buttonPressed} title="MAKE A GUESS" />
        </View>
        <Text style={styles.text}>{result} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 20,
  },
  input : {
    width: 65, 
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 20,
  },
  text : {
    fontSize: 20,
  }
});
