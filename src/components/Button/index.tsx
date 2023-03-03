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
        padding:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    bg:{
        backgroundColor:'#585CE5',

    },
    bgTitle:{
        backgroundColor:'#585CE5',
        color:'#fff'
    },
    border:{
        backgroundColor:'#fff',
        borderColor:'#585CE5',
        borderWidth:1
    },
    borderTitle:{
        color:'#585CE5',
    }
})