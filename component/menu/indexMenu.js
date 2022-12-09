import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from "./menu";
import ItemDetail from "../itemDetail/itemDetail";
const IndexMenu = () => {
     const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name='Menu nước uống' component={Menu} options={{headerShown: true,headerTintColor:'#3D685E',headerStyle:{backgroundColor:'#EFF1F0',}}}/>
            <Stack.Screen name='Chi tiết sản phẩm' component={ItemDetail} options={{headerShown: true,headerTintColor:'#3D685E',headerStyle:{backgroundColor:'#EFF1F0',}}}/>
        </Stack.Navigator>
    );
}

export default IndexMenu;
