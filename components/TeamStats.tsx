import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { useRecoilValue } from "recoil";
import { numberOfPlayers, valueOfPlayers } from "../atoms/MyTeam";

const TeamStats = () => {
  const numPlayers = useRecoilValue(numberOfPlayers)
  const value = useRecoilValue(valueOfPlayers)

  return (
    <View style = {styles.container}>
      <View style = {styles.valueContainer}>
        <Text style = {styles.label}>Players</Text>
        <Text style = {styles.value}>{numPlayers} / 5</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    borderColor: '#38abd1',
    borderWidth: 4,
    padding: 10,
    marginTop: 30,
    flexDirection: 'row',
  },
  label: {
    color: '#333',
    fontSize: 15
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  valueContainer: {
    marginRight: 25
  }
})

export default TeamStats
