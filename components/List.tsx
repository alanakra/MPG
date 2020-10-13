import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';


const List: React.FC = ({ navigation }) => {
  useEffect(()=>{
    fetchListPlayers()
  },[])
 
 const [listPlayers, setListPlayers] = useState([]);

//  Récupération des données en asyncrone
 const fetchListPlayers = async () => {
  const url: string = 'https://api.monpetitgazon.com/stats/championship/1/2018';
  const data = await fetch(url);
  const items = await data.json();
  setListPlayers(items);
 }
 
 return (
  <ScrollView>
      <Text style={listStyle.description}>Joueur - Club</Text>
      {listPlayers.map( item => (
        <Text 
        style={listStyle.player} 
        // Je coupe l'id en sous-chaine et je récupére l'index 2 qui me récupère l'ID du joueur
        key={item.id.split('player_')[1]}
        //Je change de vue pour la fiche du joueur sélectionné, je lui entre en paramètre l'ID du joueur
        onPress={() => navigation.navigate('FicheJoueur',{idPlayer: item.id.split('player_')[1]})}>
        {item.lastname} - {item.club}
        </Text>
      ))}
  </ScrollView>
 )
}

const listStyle = StyleSheet.create({
 player:{
  textAlign: 'center',
  fontSize: 20
 },

 description:{
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10
 },
})

export default List;