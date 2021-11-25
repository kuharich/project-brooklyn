import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { PlayerItem } from "../types";
import { useRecoilState, useRecoilValue } from "recoil";
import { MyPlayersState, MyFormationState } from "../atoms/MyTeam";

interface Props {
  player: PlayerItem
}

const PlayerListItem = ({ player }: Props) => {
  const [myPlayers, setMyPlayers] = useRecoilState(MyPlayersState)
  const myFormation = useRecoilValue(MyFormationState)

  const numberOfPlayersOnPos = myPlayers.filter((p) => p.position == player.position).length

  const onPress = () => {
    setMyPlayers((curPlayers) => {
      if(curPlayers.some((p: Player) => p.id === player.id)){
        return curPlayers.filter((p) => p.id !== player.id)
      }
      if(numberOfPlayersOnPos < myFormation[player.position]){
        return [...curPlayers, player]
      }
      return curPlayers
    })
  }

  const isSelected = myPlayers.some((p: Player) => p.id === player.id)
  return (
    <Pressable onPress = {onPress} style = {[styles.container, {backgroundColor: isSelected ? '#ffc266' : 'white'}]}>
      <Image source = {{uri: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`}}
             style = {styles.image} />

      <View style = {{flexGrow: 1}}>
        <Text  style = {[styles.name,{maxWidth: 180}]} numberOfLines={1} ellipsizeMode={'tail'}>{player.name}</Text>
      </View>

      <View style = {styles.position}>
        <Text>{player.position}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#eee'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  points: {
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 10
  },
  image: {
    height: 60,
    width: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 40,
    marginRight: 10
  },
  price: {
    marginHorizontal: 10,
    alignItems: 'flex-end'
  }
})

export default PlayerListItem
