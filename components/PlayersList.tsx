import React from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import PlayerListItem from "../components/PlayerListItem";
import { useRecoilState } from "recoil";
import { filteredPlayers, allPlayersState, fetchApi } from "../atoms/Players";

const PlayersList = () => {
  const [players] = useRecoilState(filteredPlayers)
  const [allPlayers, setAllPlayers] = useRecoilState(allPlayersState)

  const fetchNewPlayers = async() => {
    const currIndex = allPlayers[allPlayers.length-1].currentPage
    const totalPages = allPlayers[allPlayers.length-1].totalPages
    console.log(currIndex+' '+totalPages)
    if(currIndex < totalPages){
      const newPlayers = await fetchApi(currIndex+1)
      return newPlayers
    }
  }
  const addPlayers = () => {
    fetchNewPlayers().then((newPlayers) => {
      setAllPlayers((currPlayers) => {
        return typeof(newPlayers)!='undefined' ? currPlayers.concat(newPlayers) : currPlayers
      })
    })
  }

  return (
    <BottomSheetFlatList
      data={players}
      onEndReached = {addPlayers}
      onEndReachedThreshold = {0.4}
      renderItem={({item}) => (<PlayerListItem player={item}/>)}
    />
  )
}

export default PlayersList
