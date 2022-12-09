import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import MainPage from './component/mainPage/mainPage'
import Menu from './component/menu/indexMenu'
import General from './component/general/general'


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon:({focused,size,color}) =>{
          let iconName;
          if(route.name === 'Trang chủ'){
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            size = focused ? size + 10:size + 3;
          }else if(route.name === 'Đặt hàng'){
            iconName = focused ? 'cart' : 'cart-outline';
            size = focused ? size + 10:size + 3;
          }else if(route.name === 'Khác'){
            iconName = focused ? 'menu' : 'menu-outline';
            size = focused ? size + 10:size + 3;
          }
          return <Ionic name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:'#3D685E',
        tabBarBadgeStyle:`#3D685E`,
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: true,
        tabBarStyle:{
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor:'#EFF1F0',
          height: 60,
        }
      })}
      >
        <Tab.Screen name='Trang chủ' component={MainPage} 
        options={{headerShown: true,headerTintColor:'#3D685E',headerStyle:{backgroundColor:'#EFF1F0',}}}/>
        <Tab.Screen name='Đặt hàng' component={Menu} 
        options={{headerShown: false,headerTintColor:'#3D685E',headerStyle:{backgroundColor:'#EFF1F0',}}}/>
        <Tab.Screen name='Khác' component={General} 
        options={{headerShown: true,headerTintColor:'#3D685E',headerStyle:{backgroundColor:'#EFF1F0',}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}