import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import court from "../assets/images/court.jpg";
import Player from "./Player";
import { useRecoilValue } from "recoil";
import { myPlayersPosition } from "../atoms/MyTeam";
import { FontAwesome5 } from "@expo/vector-icons";

const Field = () => {
  const players = useRecoilValue(myPlayersPosition)

  return (
    <ImageBackground
      source={court}
      style={styles.background}
      resizeMode={'contain'} >
    {Object.keys(players).map(position => (
      <View style={styles.position}>
        {players[position].map((player) => (
          <Player player={player} position={position} />
        ))}
      </View>
    ))}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    aspectRatio: 2/3,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  position: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default Field
