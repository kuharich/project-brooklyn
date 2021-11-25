import { atom, selector } from "recoil";

export const fetchApi = async(index) => {
    try{
      const response = await fetch("http://data.nba.net/10s/prod/v1/2021/players.json", {
      	"method": "GET"
      })

      const json = await response.json()
      return json.league.standard.map((entry) => ({
        id: entry.personId,
        name: entry.temporaryDisplayName,
        position: entry.pos
      }))
    }
    catch (e){
        console.log(e)
        return []
    }
}

const posFix = {
  Center: 'C',
  Forward: 'F',
  Guard: 'G'
}

export const allPlayersState = atom({
  key: 'allPlayersState',
  default: fetchApi(1)
})

export const positionFilterState = atom({
  key: 'positionFilterState',
  default: [] as String[]
})

export const filteredPlayers = selector({
  key: 'filteredPlayers',
  get: ({ get }) => {
    const players = get(allPlayersState)
    console.log(typeof(players))
    const filters = get(positionFilterState)
    return players.filter(player => filters.length == 0 || filters.includes(player.position))
  }
})
