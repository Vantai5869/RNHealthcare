import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { IconRate, IconSuitCase } from '../../assets/theme/icons'

export default function DocterCard() {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: "https://thumbs.dreamstime.com/b/doctora-feliz-y-alegre-mientras-est%C3%A1-de-pie-en-la-oficina-del-hospital-el-fondo-medicina-atenci%C3%B3n-salud-mujer-m%C3%A9dica-servicio-161502208.jpg" }} />
            <View style={styles.info}>
                <Text style={styles.userName}>DocterCard</Text>
            </View>
            <View style={styles.moreInfo}>
                <View style={styles.rate}>
                    <View style={styles.iconW}>
                        <IconRate />
                    </View>
                    <View style={styles.ml5}>
                        <Text style={styles.expTxt}>rating</Text>
                        <Text style={styles.expText}>4.9</Text>
                    </View>
                </View>
                <View style={styles.rate}>
                    <View style={styles.iconW}>
                        <IconSuitCase />

                    </View>
                    <View style={styles.ml5}>
                        <Text style={styles.expTxt}>experi</Text>
                        <Text style={styles.expText}>8 years</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF2FF',
        margin: 10,
        padding: 10,
        borderRadius: 16,
        width: 190,
        flexDirection: 'column',
        alignItems: 'center',
        height: 280,
        justifyContent: 'space-between'
    },
    avatar: {
        width: "100%",
        height: "80%",
        borderRadius: 16,
    },
    userName: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    info: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
    },
    rate: {
        flexDirection: 'row'
    },
    moreInfo: {
        width: "100%",
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    expTxt: {
        fontSize: 12,
    },
    ml5: {
        marginRight: 5
    },
    iconW:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F0DCDF',
        padding:5,
        borderRadius:8,
        width:25,
        height:25,
        marginRight:5
    },
    expText:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:12
    }
})