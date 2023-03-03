import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { IconPlus } from '../../assets/theme/icons'

export default function ProductHoriCard({ item }) {
    return (
        <View style={[styles.container]}>
            {/* <Image style={styles.avatar} source={{ uri: url }} /> */}
            <View style={styles.card}>
                <View style={styles.productImg}>
                    <Image style={styles.avatar} source={{ uri: "https://www.bworldonline.com/wp-content/uploads/2022/04/pills-medicine.jpg" }} />
                </View>
                <View style={styles.productContent}>
                    <Text style={styles.title}>{item.text}</Text>
                    <View style={styles.medicineType}>
                        <View style={styles.dot}></View>
                        <Text>Tiêu chảy</Text>
                    </View>
                    <View style={styles.pwaper}>
                        <Text style={styles.price}>
                            12.00 $
                        </Text>
                        <View style={styles.addToCartIcon}>
                            <Text style={styles.buyTxt}>
                                Mua
                            </Text>
                           
                        </View>
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
        padding: 16,
        borderRadius: 16,
        width: 300,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        flexDirection: 'row'
    },
    title: {
        color: '#595E84',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    productImg: {

    },
    productContent: {
        marginLeft:10
    },

    medicineType:{
        flexDirection:'row',
        alignItems:'center'
      },
      dot:{
        padding:3,
        marginRight:5,
        backgroundColor:'green'
      },
      pwaper:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      productName:{
        marginTop:5,
        fontFamily:'Montserrat-SemiBold',
      },
      price:{
        fontFamily:'Montserrat-SemiBold',
      },
      addToCartIcon:{
        backgroundColor:'#585CE5',
        paddingHorizontal:15,
        paddingVertical:8,
        borderRadius:20
      },
      buyTxt:{
        color:'#fff'
      }
})