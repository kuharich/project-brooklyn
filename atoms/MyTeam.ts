import { atom, selector } from "recoil";
import { Player, Positions } from "../types";

export const MyPlayersState = atom({
  key: 'MyPlayersState',
  default: [] as Player[]
})

export const MyFormationState = atom({
  key: 'MyFormationState',
  default: {
    F: 2,
    G: 2,
    C: 1
  }
})

const positions = ['C', 'F', 'G'] as Positions[]

export const myPlayersPosition = selector({
  key: 'myPlayersPosition',
  get: ({ get }) => {
    const players = get(MyPlayersState)
    const groupedPlayers = {}
    const myFormation = get(MyFormationState)

    positions.forEach(position => {
      groupedPlayers[position] = players.filter((p) => p.position == position)
      //fill the additional positions with null values as per formation
      for(var i = groupedPlayers[position].length; i < myFormation[position]; i++){
        groupedPlayers[position].push(null)
      }
    });
    return groupedPlayers
  }
})

export const numberOfPlayers = selector({
  key: 'numberOfPlayers',
  get: ({ get }) => {
    return get(MyPlayersState).length
  }
})

export const valueOfPlayers = selector({
  key: 'valueOfPlayers',
  get: ({ get }) => {
    return get(MyPlayersState).reduce((acc, player) => acc + parseInt(player.price), 0)
  }
})
