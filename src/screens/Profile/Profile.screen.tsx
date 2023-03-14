import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconDateBirth, IconPenEdit, IconPhone } from '../../assets/theme/icons';
import Avatar from '../../components/Avatar';
import useCurrentUser from '../../stores/actions/useCurrentUser';

const Profile = ({ navigation }: any) => {
  const {resetAuth, currentUser}= useCurrentUser();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView >
        <View style={styles.card}>
          <Avatar />
          <View style={styles.info}>
            <Text style={styles.name}> Liza Trass</Text>
            <View style={styles.dateBirth}>
              <IconDateBirth />
              <Text > 01.01.2022</Text>
            </View>
            <View style={styles.dateBirth}>
              <IconPhone />
              <Text > +1234567889</Text>
            </View>

          </View>

          <View style={styles.action}>
            <IconPenEdit />
          </View>

        </View>
        <View >

        </View>

        <TouchableOpacity style={styles.button} onPress={resetAuth}>
          <Text style={styles.buttonText}>Đăng Xuất</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row'
  },
  info: {
    marginLeft: 16,
    flex: 1
  },
  action: {

  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#091F44',
    fontSize: 16
  },
  phone: {

  },
  dateBirth: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

})