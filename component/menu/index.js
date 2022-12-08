import React from "react";
import { View ,ScrollView} from "react-native";
import styles from "./index.css";
import Category from "./category";
import ListProduct from "./listProduct";
const Menu = () => {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Category/>
                <ListProduct/>
            </ScrollView>
        </View>
    );
}

export default Menu;
