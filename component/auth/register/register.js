import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
const Register = () => {
  const [show, setShow] = useState(true);

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        // onChangeText={setUsername}
        // value={username}
        label="Họ và tên"
      />
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        // onChangeText={setUsername}
        // value={username}
        label="Tên tài khoản"
      />
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        // onChangeText={setUsername}
        // value={username}
        label="Email"
      />
      <TextInput
        mode="outlined"
        // onChangeText={setPassword}
        // value={password}
        label="Mật khẩu"
        secureTextEntry={show}
        right={
          show === true ? (
            <TextInput.Icon icon="eye" onPress={() => setShow(false)} />
          ) : (
            <TextInput.Icon icon="eye-off" onPress={() => setShow(true)} />
          )
        }
      />
      <Button
        style={{ marginTop: 24, marginBottom: 12 }}
        mode="contained"
        onPress={() => loginUser()}
      >
        Tạo tài khoản
      </Button>

      <Button style={{ marginBottom: 12 }} onPress={() => {}}>
        Đăng nhập
      </Button>
    </View>
  );
};
export default Register;
