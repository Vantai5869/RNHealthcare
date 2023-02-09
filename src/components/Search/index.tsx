import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconSearch } from '../../assets/theme/icons'

export default function Search() {
  return (
    <View style={styles.container}>
      <IconSearch fill={"#A5BCE7"}/>
      <Text style={styles.searchPla}>Search</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flexDirection:'row',
    paddingHorizontal:14,
    paddingVertical:17,
    borderRadius:10,
    alignItems:'center'
  },
  searchPla:{
    fontFamily: 'Montserrat',
    fontWeight: "400",
    fontSize:14,
    color:' #A5BCE7',
    marginLeft:13
  }
})