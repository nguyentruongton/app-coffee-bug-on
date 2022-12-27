import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import jwtDecode from 'jwt-decode';
const General = ({navigation}) => {
    const token = AsyncStorage.getItem('token');
    console.log(token);
    const logout = () => {
        AsyncStorage.removeItem('token');
    }
    console.log(token);
    return(
        <View>
            {token._z != null ? 
            <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Thông tin tài khoản',{
                        id: profileuser.id,
                        name: profileuser.name
                    })
                }}
                >
                    <Text>Thông tin tài khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Đơn hàng đã đặt',{
                    id: profileuser.id,
                    name: profileuser.name
                })
            }}
            >
                <Text>Đơn hàng đã đặt</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => logout()}
            >
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
            </View>
            : 
            <View>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Đăng nhập')
            }}
            >
            <Text>Đăng nhập</Text>
            </TouchableOpacity>
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
            }
            
        </View>
    );
}

export default General;
