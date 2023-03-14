import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function NotiItem({ title, content, icon }) {
    return (
        <View style={styles.container}>
            <Image source={{uri:icon}} style={styles.icon} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.contentText}>{content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      marginHorizontal: 16,
      marginVertical: 8,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    icon: {
      width: 32,
      height: 32,
      marginRight: 16,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    contentText: {
      fontSize: 14,
    },
  });
  