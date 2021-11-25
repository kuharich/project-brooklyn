import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { positionFilterState } from "../atoms/Players";

const positions = ['C', 'F', 'G']

const Filters = () => {
  const [ positionFilter, setPositionFilter ] = useRecoilState(positionFilterState)

  const onFilterPress = (position: string) => {
    setPositionFilter((curPositionFilter) => {
      if(curPositionFilter.includes(position)){
        return curPositionFilter.filter((pos) => pos !== position)
      }
      else{
        return [...curPositionFilter, position]
      }
    })
  }

  const isSelected = (position) => {
    return positionFilter.includes(position)
  }

  return (
    <View style = {styles.container}>
    {positions.map((position) => (
      <Pressable onPress = {() => onFilterPress(position)}
                 style = {[styles.filterContainer, {backgroundColor: isSelected(position) ? 'orange' : '#ddd'}]}>
        <Text style = {styles.text}>{position}</Text>
      </Pressable>
    ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  text: {
    fontWeight: 'bold'
  },
  filterContainer: {
    backgroundColor: '#ddd',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Filters
