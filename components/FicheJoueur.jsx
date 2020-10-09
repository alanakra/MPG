import React from 'react';
import {FicheJoueur, ScrollView, Text} from 'react-native';

function FicheJoueur(props) {
 return (
  <ScrollView>
   <Text>Nom Prénom</Text>
   <Text>Poste</Text>
   <Text>Club</Text>
   <Text>Note Moyenne</Text>
  </ScrollView>
 );
}

export default FicheJoueur;