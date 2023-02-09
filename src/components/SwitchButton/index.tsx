import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Button'

export default function SwitchButton({ title1 = '', title2 = '', currentActive = 2, onPress }) {
    
    return (
        <View style={styles.container}>
            <Button 
                onPress={()=>onPress(1)}
                title={title1} type={currentActive == 1 ? 'background' : 'border'} style={{ borderWidth: 0 }} />
            <Button title={title2} type={currentActive == 2 ? 'background' : 'border'} onPress={()=>onPress(2)}  style={{ borderWidth: 0 }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 4,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },

})