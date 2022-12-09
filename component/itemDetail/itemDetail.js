import React from "react";
import { Text, View } from "react-native";

const ItemDetail = ({route}) => {
    return(
        <View>
            <Text>sản phẩm {route.params.name}</Text>
        </View>
    );
}

export default ItemDetail;
