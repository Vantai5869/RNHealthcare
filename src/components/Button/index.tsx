import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({title='', type='background', style={}, onPress}) {
  return (
    <TouchableOpacity 
        style={[styles.container,type=='background'? styles.bg:styles.border,style ]}
        onPress={onPress}
    >
      <Text style={type=='background'? styles.bgTitle:styles.borderTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        borderRadius:12,
        padding:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    bg:{
        backgroundColor:'#1648CE',

    },
    bgTitle:{
        backgroundColor:'#1648CE',
        color:'#fff'
    },
    border:{
        backgroundColor:'#fff',
        borderColor:'#1648CE',
        borderWidth:1
    },
    borderTitle:{
        color:'#1648CE',
    }
})