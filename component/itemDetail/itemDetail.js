import React,{useContext, useState} from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { ListProductContext } from "../../context/listProductContext";
const ItemDetail = ({route}) => {
    const { addProduct } = useContext(ListProductContext)
    const [size,setSize] = useState(`S`);
    const sizeproduct = [
        {
            id:1,
            name: `S`
        },
        {
            id:2,
            name: `M`
        },
        {
            id:3,
            name: `L`
        },
    ];
    const add = (e) => {
    e.preventDefault()
    var id = route.params.id
    var name = route.params.name + ` Size: (${size})`
    var price = route.params.price 
    var amount = 1
    var product = { id, name, price, amount }
    addProduct(product)
    }
    return(
        <View>
            <Text>Mã sản phẩm: {route.params.id}</Text>
            <Text>Tên sản phẩm: {route.params.name}</Text>
            <Text>Giá: {route.params.price}</Text>
            <Text>Chọn size:</Text>
            {sizeproduct.map((item) => (
                <TouchableOpacity
                key={item.id}
                onPress={()=> setSize(item.name)}
                >
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                onPress={add}
                >
                    <Text>Thêm giỏ hàng</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ItemDetail;
