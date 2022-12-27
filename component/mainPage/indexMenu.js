import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../mainPage/mainPage";
import ItemDetail from "../itemDetail/itemDetail";
import { Appbar } from "react-native-paper";
import styles from "../../BugOnStyles";

const CustomNavigationBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content titleStyle={styles.titleAppBar} title="Chi tiết sản phẩm" />
    </Appbar.Header>
  );
};

const IndexMenu = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Chi tiết sản phẩm"
      screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
    >
      <Stack.Screen name="Trang chủ" component={MainPage} options={{headerShown:false}} />
      <Stack.Screen name="Chi tiết" component={ItemDetail} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
};

export default IndexMenu;
