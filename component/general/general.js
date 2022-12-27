import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity} from "react-native";
import jwtDecode from 'jwt-decode';
const General = ({navigation}) => {
    var token;
    const InputData = async () => {
        token = await AsyncStorage.getItem('token');
        console.log(token);
    }
    const logout = () => {
        AsyncStorage.clear();
        navigation.navigate('Đăng nhập')
    }
    useEffect(()=>{
        InputData();
    },[])
        return(
            <View>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Đăng nhập')
                }}
                >
                <Text>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => logout()}
                    >
                        <Text>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
            );
}

export default General;
