import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import List from './components/List';
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
         { label: 'Gardien', value: 10 },
         { label: 'Defenseur', value: 20 },
         { label: 'Lateral', value: 21 },
         { label: 'Milieu défensif', value: 31 },
         { label: 'Milieu offensif', value: 32 },
         { label: 'Attaquant', value: 40 },
       ]}
       />

       {/* Importation du component list */}
       <List/>
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