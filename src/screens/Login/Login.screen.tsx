import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput
} from 'react-native';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUser, selectAll, setUser } from '../../stores/user.reducer';
import {LOGIN} from './../../gql/auth.gql';
import styles from './Login.style';
const Login = ({ navigation }: any) => {
  const [startLogin,{data,error, loading}]= useMutation(LOGIN)
  const dispatch= useAppDispatch();
  const [text, setText] = useState('');
  const [inputLogin, setInputLogin] = useState({

  });

  if (error) {
    console.log('====================================');
    console.log({error});
    console.log('====================================');
  }

  if(loading){
    return <>
    <Text>
      loading...
    </Text>
    </>
  }else{
    console.log({data})
  }
  const onChangeText=(text, key)=>{
    setInputLogin({
      ...inputLogin,
      [key]:text
    })
  }
  console.log('====================================');
  console.log({inputLogin});
  console.log('====================================');
  const handleLogin=()=>{
    startLogin({
      variables:{
        inputLogin
      }
    })
    // dispatch(setUser('xxx'))
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />

      <SafeAreaView>
        <View style={styles.title}>
          <Text style={styles.loginTitle}>Xin Chào,</Text>
          <Text style={styles.loginTitle}>Bắt đầu đăng nhập!</Text>
        </View>
        <Text style={styles.welcome}>Chào mừng trở lại</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(txt)=>onChangeText(txt, 'email')}
            value={inputLogin['email']}
            placeholder={'Email'}
          />
          <TextInput
            style={styles.input}
            onChangeText={(txt)=>onChangeText(txt, 'password')}
            value={inputLogin['password']}
            placeholder={'Password'}
          />
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </View>

        <View style={styles.login}>
          <Button title='Login' onPress={handleLogin}/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Login;
