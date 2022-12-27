import React, { useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import jwtDecode from 'jwt-decode';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = async () => {
        const Auth = await axios.post(`https://coffeebugon.onrender.com/auth/login`, {
          username,
          password,
        }).catch(err => {
          alert('Bạn đã nhập sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại!');
        })
        if (Auth.data.confirmemail == true) {
          alert('Đăng nhập thành công!')
          await AsyncStorage.setItem('token', Auth.data.accessToken)
          setUsername('')
          setPassword('')
        } else{
          alert('Vui lòng xác thực tài khoản để đăng nhập.')
        }
  }
  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        onChangeText={setUsername}
        value={username}
        label="Tên tài khoản"
      />
      <TextInput
        mode="outlined"
        onChangeText={setPassword}
        value={password}
        label="Mật khẩu"
      />
      <Button style={{ marginTop: 24, marginBottom: 12 }} mode="contained" onPress={() => loginUser()}>
        Đăng nhập
      </Button>

      <Button style={{ marginBottom: 12 }} onPress={() => {}}>
        Tạo tài khoản
      </Button>
      <Button onPress={() => {}}>Quên mật khẩu?</Button>
    </View>
  );
};
export default Login;
