import React, { useRef, Suspense } from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, View } from 'react-native';
import Field from "../components/Field";
import { Feather } from '@expo/vector-icons';
import TeamStats from "../components/TeamStats";
import BottomSheet from "@gorhom/bottom-sheet";
import Filters from "../components/Filters";
import PlayersList from "../components/PlayersList";

export default function TabOneScreen() {

  const playersBottomSheet = useRef<BottomSheet>(null)
  const filtersBottomSheet = useRef<BottomSheet>(null)

  const viewPlayers = () => {
    playersBottomSheet.current.snapToIndex(0)
  }

  const snapPoints = ['65%']

  return (
    <SafeAreaView style={styles.container}>

      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style = {styles.button}>
        <Text style={{fontWeight: 'bold'}}>View Players</Text>
      </Pressable>

      <BottomSheet
        ref={playersBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <Filters />
        <Suspense fallback = {<Feather name="loader" size={40} color="black" style={styles.loader}/>}>
          <PlayersList />
        </Suspense>
      </BottomSheet>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4ccf4d'
  },
  button: {
    backgroundColor: 'orange',
    width: '90%',
    marginTop: 'auto',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50
  },
  loader: {
    alignSelf: 'center',
    marginTop: '20%'
  }
});
