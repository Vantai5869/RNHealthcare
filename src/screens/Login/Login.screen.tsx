import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TextInput
} from 'react-native';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUser, selectAll } from '../../stores/user.reducer';
import styles from './Login.style';
const Login = ({ navigation }: any) => {
  const dispatch= useAppDispatch();
  const [text, setText] = useState('')
  const onChangeText=(text)=>{

  }
  const handleLogin=()=>{
    dispatch(fetchUser())
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
            onChangeText={onChangeText}
            value={text}
            placeholder={'Email'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
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
