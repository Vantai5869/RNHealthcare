import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Title({title}) {
  return (
    <View>
      <Text style={styles.titleSection}>{title}</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    titleSection:{
        fontFamily: 'Montserrat-Bold',
        paddingVertical:10,
        color:'#474C74',
        fontSize:18
      }
})