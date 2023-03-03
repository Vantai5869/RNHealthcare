import React from 'react';
import { View,Text, Dimensions, Image,StyleSheet } from 'react-native';
import { IconDateBirth, IconDatePicker, IconPlus } from '../../assets/theme/icons';

export default function ProductCard() {
  return (
    <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: 'https://www.bworldonline.com/wp-content/uploads/2022/04/pills-medicine.jpg' }} />
        <Text style={styles.productName}>Brimofase Synti..</Text>
        <View style={styles.medicineType}>
          <View style={styles.dot}></View> 
          <Text>Tiêu chảy</Text>
        </View>
        <View style={styles.pwaper}>
          <Text style={styles.price}>
            12.00 $
          </Text>
          <View style={styles.addToCartIcon}>
            <IconPlus/>
          </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
      width: Dimensions.get('window').width/2-16*2,
      padding:16,
      backgroundColor:'#ECF2FF',
      borderRadius:16,
      marginVertical:5
  },
  avatar: {
      width: '100%',
      height: 90,
      borderRadius: 16,
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
    marginTop:10,
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
    backgroundColor:'#868AED',
    paddingHorizontal:15,
    paddingVertical:8,
    borderRadius:20
  }

})