import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import jwtDecode from "jwt-decode";
import { List } from "react-native-paper";

const General = ({ navigation }) => {
  const token = AsyncStorage.getItem("token");
  console.log(token);
  const logout = () => {
    AsyncStorage.removeItem("token");
  };
  console.log(token);
  return (
    <View>
      {token._z != null ? (
        <View>
          <List.Item
            title="Thông tin tài khoản"
            left={(props) => <List.Icon {...props} icon="account" />}
            onPress={() => {
              navigation.navigate("Thông tin tài khoản", {
                id: profileuser.id,
                name: profileuser.name,
              });
            }}
          />
          <List.Item
            title="Lịch sử mua hàng"
            left={(props) => <List.Icon {...props} icon="history" />}
            onPress={() => {
              navigation.navigate("Đơn hàng đã đặt", {
                id: profileuser.id,
                name: profileuser.name,
              });
            }}
          />
          <List.Item
            title="Đăng xuất"
            left={(props) => <List.Icon {...props} icon="logout" />}
            onPress={() => logout()}
          />
        </View>
      ) : (
        <View>
          <List.Item
            title="Đăng nhập"
            left={(props) => <List.Icon {...props} icon="login" />}
            onPress={() => {
              navigation.navigate("Đăng nhập");
            }}
          />
          {/* <TouchableOpacity
            onPress={() => {
                navigation.navigate('Đăng ký')
            }}
            >
                <Text>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Trang Quên mật khẩu')
            }}
            >
                <Text>Trang Quên mật khẩu</Text>
            </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
};

export default General;
