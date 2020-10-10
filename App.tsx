import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import List from './components/List.tsx';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [playerValue, onPlayerChange] = React.useState('Neymar JR');

  return (
    <View>
      <Text style={styles.goat}>🐐 MPG</Text>
      <Text style={styles.textInput}>Nom joueur:</Text>
      <TextInput style={styles.inputJoueur} onChangeText={text => onPlayerChange(text)} value={playerValue}></TextInput >
      <Text style={styles.textInput}>Poste:</Text>

      <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      placeholder={{
        label: 'Selectionner un poste',
        value: null,
      }}
      items={[
        { label: 'Gardien', value: 'Gardien' },
        { label: 'Defenseur', value: 'Defenseur' },
        { label: 'Lateral', value: 'Lateral' },
        { label: 'Lateral', value: 'Lateral' },
        { label: 'Milieu défensif', value: 'Milieu défensif' },
        { label: 'Milieu offensif', value: 'Milieu offensif' },
        { label: 'Attaquant', value: 'Attaquant' },
      ]}
      />
      
      <Text style={styles.description}>Joueur - Club - Poste</Text>
      <List/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
  marginLeft: 10,
  marginTop: 5,
  marginBottom: 5,
  fontSize: 18
  },

  description:{
   textAlign: 'center',
   fontSize: 20,
   fontWeight: 'bold',
   marginBottom: 10
  },

  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },

  goat: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: '#45c945',
    color: 'white'
  },

  inputJoueur: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  }
})

