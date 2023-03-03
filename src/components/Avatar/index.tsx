import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const URL='https://haycafe.vn/wp-content/uploads/2022/02/Anh-avatar-ngau-chat-hinh-dai-dien-ngau.jpg'
export default function Avatar({url=URL}) {
    return (
        <View>
            <Image style={styles.avatar} source={{ uri: url }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        backgroundColor:'#fff',
        borderRadius:16
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
    }})