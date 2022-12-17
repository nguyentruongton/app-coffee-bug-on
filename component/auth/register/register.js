import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
const Register = () => {
    return (
        <View>
            <Text>Trang đăng ký</Text>
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            <TouchableOpacity>
                <Text>Đăng ký</Text>
            </TouchableOpacity>
        </View>
    )
};
export default Register;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });