import React from "react";
import styles from "../../BugOnStyles";
import { View, ScrollView, StatusBar } from "react-native";
import Panel from "./Panel";
import { Appbar } from "react-native-paper";
import NewProducts from "./NewProducts";
import Introduce from "./Introduce";

const MainPage = () => {
  return (
    <View>
      <StatusBar currentHeight />
      <Appbar.Header>
        <Appbar.Content titleStyle={styles.titleAppBar} title="Cà phê BUG ỔN" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView centerContent={true} showsVerticalScrollIndicator={false}>
        <Panel />
        <NewProducts />
        <Introduce />
      </ScrollView>
    </View>
  );
};

export default MainPage;
