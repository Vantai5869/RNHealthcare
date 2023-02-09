import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Avatar() {
    return (
        <View>
            <Image style={styles.avatar} source={{ uri: 'https://s3-alpha-sig.figma.com/img/88fa/8649/d4e3625eb67f1ed918cafa01599a6efe?Expires=1676851200&Signature=dqznD25OOQ~ULn6UdhjCyTbPakfB296BeZm489u4hk4oYCRwu3aBemHQWDYMeFPpEnT824vahGxhEhBKyjzRCA3skwr7TwTQp7xulS-eXjsv6fSrXHrMcCKf83kRc~uIXBFOVOz0Y~gH3k97Qj8P92zOACN~vqdjyk4av~u6UQF6TjNRmr50A-y9YGWnn5plnQSp2VDGE494hgHK0KGHSQPa1WYFJMfsA68vlyJznGTHe6yIRRpeHJjNW5Q7YmM2a5tADi~gasU6NbGhZWIAWLQxcLh7PFwFQDuTZ8PUuPaugfFt56y4FhO8pFELLGFu6XjkjLUDQ6uNKCYZGtBXmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
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
        width: 80,
        height: 80,
        borderRadius: 16,
    }})