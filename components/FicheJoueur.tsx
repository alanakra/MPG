import React, {useState} from 'react';
import {Button, StyleSheet,Text, View} from 'react-native';


function FicheJoueur({ route, navigation }) {  
  const {idPlayer}:string = route.params;

  // L'idPlayer de Gianluigi Buffon
  // const idPlayer:string = `4126`;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avgRate, setAvgRateName] = useState('');

  fetch(`https://api.monpetitgazon.com/stats/player/${idPlayer}?season=2018`)
  .then((response) => response.json())
  .then(player=>{
    setFirstName(player.firstname)
    setLastName(player.lastname)
    setAvgRateName(player.stats.avgRate)
  })
  .catch(function(error) {
   console.log(error.message);
  });

 return (
  <View>
    {/* Retour à la page d'accueil */}
   <Button title="Retour" onPress={() => navigation.goBack()} />
    {/* récupération des données contenues dans l'objet JSON */}
   <Text style={ficheStyle.description}>Fiche Joueur de {firstName} {lastName}</Text>
   <Text style={ficheStyle.description}>Poste</Text>
   <Text style={ficheStyle.description}>Note moyenne: {avgRate}</Text>
  </View>
 );
}

const ficheStyle = StyleSheet.create({
 description:{
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 10
 },
})

export default FicheJoueur;