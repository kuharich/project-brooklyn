import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Player = (props) => {

  const {player, position} = props

  return (
    <View style = {styles.player}>
      <FontAwesome5 name={'tshirt'} size={35} color={player ? '#d170db' : '#5c5c5cbb'} />
      <Text style = {styles.names}>{player ? player.name : position}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  player: {
    alignItems: 'center'
  },
  names: {
    backgroundColor: '#333333bb',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 2,
    paddingHorizontal: 7
  }
});

export default Player
