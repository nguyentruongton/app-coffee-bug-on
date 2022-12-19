import React from "react";
import { Text, View, TouchableOpacity} from "react-native"; 
const General = ({navigation}) => {
    const profileuser =
    {
        id: 1,
        name: "Lê Huỳnh Phương Tùng"
    }
    return(
        <View>
            <Text>Cài đặt chung</Text>
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
            {/* <TouchableOpacity
            onPress={() => {
                navigation.navigate('Đơn hàng đã đặt',{
                    id: profileuser.id,
                    name: profileuser.name
                })
            }}
            >
                <Text>Đơn hàng đã đặt</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Đăng nhập')
            }}
            >
                <Text>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
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
            </TouchableOpacity>
        </View>
    );
}

export default General;
