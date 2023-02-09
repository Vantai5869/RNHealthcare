import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { IconDateBirth, IconPenEdit, IconPhone } from '../../assets/theme/icons';
import Avatar from '../../components/Avatar';

const Profile = ({ navigation }: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView >
        <View style={styles.card}>
          <Avatar />
          <View style={styles.info}>
            <Text style={styles.name}> Liza Trass</Text>
            <View style={styles.dateBirth}>
                <IconDateBirth/> 
                <Text > 01.01.2022</Text>
            </View>
            <View style={styles.dateBirth}>
                <IconPhone/> 
                <Text > +1234567889</Text>
            </View>
          
          </View>
          
          <View style={styles.action}>
            <IconPenEdit/>
          </View>

        </View>
        <View >

        </View>

      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    marginTop:24,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius:16,
    flexDirection:'row'
  },
  info:{
    marginLeft:16,
    flex:1
  },
  action:{
    
  },
  name:{
    fontFamily:'Montserrat-SemiBold',
    color:'#091F44',
    fontSize:16
  },
  phone:{
    
  },
  dateBirth:{
    flexDirection:'row',
    alignItems:'center'
  },

})