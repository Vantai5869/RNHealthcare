import { View, Text,StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { IconDatePicker, IconOClock, IconStar } from '../../assets/theme/icons';
import Button from '../Button';

export default function ApointmentCard() {
    return (
        <View style={styles.wapper}>
            <View style={styles.card}>
                <View style={styles.userInfo}>
                    <View style={styles.info}>
                        <Text style={styles.name}>Dr. Charollette Baker</Text>
                        <Text style={styles.role}>Pediatrician</Text>
                        <View style={styles.rate}>
                            <IconStar />
                            <View style={styles.rateDetail}>
                                <Text>Rating</Text>
                                <Text style={styles.rating}>4.78 out of 5</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Image style={styles.avatar} source={{ uri: 'https://thumbs.dreamstime.com/b/doctora-feliz-y-alegre-mientras-est%C3%A1-de-pie-en-la-oficina-del-hospital-el-fondo-medicina-atenci%C3%B3n-salud-mujer-m%C3%A9dica-servicio-161502208.jpg' }} />
                </View>

            </View>

            <View style={styles.schedule}>
                <View style={styles.date}>
                    <IconDatePicker/>
                    <Text style={styles.txt}>Monday, Dec 23</Text>
                </View>
                <View style={styles.time}>
                    <IconOClock />
                    <Text style={styles.txt}>12:00-13:00</Text>
                </View>
            </View>
            <View style={styles.actions}>
                <View style={styles.btn}>
                    <Button title={'Reshedule'} type={'background'} onPress={() => { }} />
                </View>
                <Button title={'Cancel'} type={'border'} onPress={() => { }} />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      backgroundColor:'#FFFFFF',
    },
    SafeAreaView2: { flex: 1, backgroundColor:'#FFFFFF' },
    productList:{
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap:'wrap'
  
    },
    outerWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#FFFFFF',
    },
    buttonStyle: {
      backgroundColor: '#EEE',
      paddingHorizontal: 40,
      paddingVertical: 30,
      borderWidth: 0.5,
      borderColor: '#F0F0F0',
      borderRadius: 10,
    },
    text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
  
    session2:{
      marginTop:24,
    },
    card:{
      flexDirection:'row',
      justifyContent:'space-between'
      
    },
    titleRecent:{
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 16,
      lineHeight: 20,
      color: '#6A788E',
    },
    userInfo:{
  
    },
    info:{
  
    },
    search:{
      marginTop:10
    },
    name:{
      color:'#091F44',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 16,
    },
    role:{
      marginTop:4,
      color:'#091F44',
      fontFamily: 'Montserrat-Regular',
      fontSize: 12,
    },
    rate:{
      marginTop:12,
      flexDirection:'row'
    },
    rateDetail:{
      marginLeft:10
    },
    ratingTxt:{
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      color:'#394D6D'
    },
    rating:{
      fontSize: 12,
      fontFamily: 'Montserrat-SemiBold',
      color:'#091F44'
    },
    avatar:{
      width: 80,
      height: 80,
      borderRadius:16
    },
  
    schedule:{
      backgroundColor:'#F5FAFF',
      borderRadius:16,
      flexDirection:'row',
      paddingHorizontal:16,
      paddingVertical:18,
      justifyContent:'space-between',
      marginTop:24
    },
    date:{
      flexDirection:'row'
    },
    time:{
      flexDirection:'row'
    },
    txt:{
      marginLeft:8,
      fontSize:12,
      fontFamily: 'Montserrat-SemiBold',
      color:'#091F44',
    },
    wapper:{
      marginTop:8,
      backgroundColor:'#B7B9E8',
      padding:16,
      borderRadius:16,
    },
    actions:{
      marginTop:16,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    btn:{
      width:  Dimensions.get('window').width/2-16*3,
      marginRight:16
    },
    switchBtn:{
      marginTop:24
    },
    headerWelcome:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    nameWelcome:{
      fontFamily: 'Montserrat-Bold',
    },
    iconUser:{
      flexDirection:'column',
      flex:1,
      marginLeft:15
    },
    icon:{
      borderWidth:1,
      padding:10,
      height:40,
      flexDirection:'row',
      alignItems:'center',
      borderRadius:10,
      borderColor:'#DFE0FB'
      
    },
  
  });
  