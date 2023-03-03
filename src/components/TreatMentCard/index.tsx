import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

const URL='https://haycafe.vn/wp-content/uploads/2022/02/Anh-avatar-ngau-chat-hinh-dai-dien-ngau.jpg'
export default function TreatMentCard({item}) {
    return (
        <View style={[styles.container, {backgroundColor:item.bg}]}>
            {/* <Image style={styles.avatar} source={{ uri: url }} /> */}
            <Text style={styles.title}>{item.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:16,
        borderRadius:16,
        width:120,
        height:120,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize:16
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
    }
})