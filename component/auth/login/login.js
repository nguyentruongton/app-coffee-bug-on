import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

const Login = (navigation) => {
  return (
    <View style={{ padding: 16 }}>
      {/* <Text>Trang đăng nhập</Text> */}
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        // onChangeText={onChangeNumber}
        // value={number}
        label="Tên tài khoản"
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        // onChangeText={onChangeNumber}
        // value={number}
        label="Mật khẩu"
        keyboardType="numeric"
      />
      <Button style={{ marginTop: 24, marginBottom: 12 }} mode="contained">
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
