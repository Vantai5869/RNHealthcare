import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const truncate = (str, maxLen) => {
    if (str.length <= maxLen) {
      return str;
    }
    return str.substring(0, maxLen - 3) + '...';
  };

const ConversationItem = ({ avatar, name, message, time }) => {
 const truncatedMessage = truncate(message, 60);
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{truncatedMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default ConversationItem;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding:16,
      backgroundColor:'#FAFAFA',
      marginTop:2
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 20,
      marginRight: 10,
    },
    content: {
      flex: 1,
      flexDirection: 'column',
    },
    name: {
      fontWeight: 'bold',
      color:'#35364F',
      fontSize:14
    },
    message: {
      marginTop: 5,
      color:'rgba(53, 54, 79, 0.62)'
    },
    time: {
      fontSize: 12,
      color: '#999999',
      marginLeft: 10,
    },
  });
  