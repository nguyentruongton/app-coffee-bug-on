import React from 'react';
import { View,Text } from 'react-native';
const Profile = ({route}) => {
    return(
    <View>
        <Text>thông tin cá nhân của {route.params.name}</Text>
    </View>
    )
};
export default Profile;