import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

function List(){
  useEffect(()=>{
    fetchListPlayers()
  },[])
 
 const [listPlayers, setListPlayers] = useState([]);

 const fetchListPlayers = async () => {
  const data = await fetch('https://api.monpetitgazon.com/stats/championship/1/2018');
  const items = await data.json();
  console.log(items);
  setListPlayers(items);
 }

 return (
  <ScrollView>
      {listPlayers.map(item => (
        <Text style={listStyle.player} key={item.id}>{item.lastname} - {item.club} - {item.ultraPosition}</Text>  
      ))}
  </ScrollView>
 )
}

const listStyle = StyleSheet.create({
 player:{
  textAlign: 'center',
  fontSize: 20
 }
})

export default List;