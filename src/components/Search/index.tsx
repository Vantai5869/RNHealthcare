import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { IconSearch } from '../../assets/theme/icons'

export default function Search() {
  return (
    <View style={styles.container}>
      <IconSearch fill={"#A5BCE7"}/>
      <TextInput style={styles.searchPla} placeholder="Tìm kiếm..." />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:"#ECF2FF",
    flexDirection:'row',
    paddingHorizontal:14,
    paddingVertical:8,
    borderRadius:10,
    alignItems:'center'
  },
  searchPla:{
    fontFamily: 'Montserrat',
    fontWeight: "400",
    fontSize:16,
    color:'#343965',
    marginLeft:13,

  }
})