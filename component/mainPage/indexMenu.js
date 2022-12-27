import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../mainPage/mainPage";
import ItemDetail from "../itemDetail/itemDetail";
import NewProducts from "./NewProducts";

const IndexMenu = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang chủ" component={MainPage} options={{headerShown:false}} />
      <Stack.Screen name="Chi tiết" component={ItemDetail} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
};

export default IndexMenu;
