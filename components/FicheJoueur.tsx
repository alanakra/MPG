import React, {useState, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';

function FicheJoueur() {

 const idPlayer: string = ``;
 const url: string = `https://api.monpetitgazon.com/stats/player/${idPlayer}?season=2018`;

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