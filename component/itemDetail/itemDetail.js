import React,{useContext} from "react";
import { Button, Text, View } from "react-native";
import { ListProductContext } from "../../context/listProductContext";
const ItemDetail = ({route}) => {
    const { addProduct } = useContext(ListProductContext)

    const add = (e) => {
    e.preventDefault()
    const id = route.params.id
    const name = route.params.name
    const price = route.params.price
    const amount = 1
    const product = { id, name, price, amount }
    addProduct(product)
    console.log(product)
    }
    return(
        <View>
            <Text>Mã sản phẩm: {route.params.id}</Text>
            <Text>Tên sản phẩm: {route.params.name}</Text>
            <Text>Giá: {route.params.price}</Text>
            <Button
            title="Thêm sản phẩm"
            onPress={add}
            />
        </View>
    );
}

export default ItemDetail;
