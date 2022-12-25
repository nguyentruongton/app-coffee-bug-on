import React,{useContext, useState, useEffect} from "react";
import { Button, Text, TouchableOpacity, View, Image } from "react-native";
import { ListProductContext } from "../../context/listProductContext";
import { btoa } from 'react-native-quick-base64';
import axios from "axios";
const ItemDetail = ({route}) => {
    const { addProduct } = useContext(ListProductContext)
    const [size,setSize] = useState(`S`);
    const [sizeProduct,setSizeProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://coffeebugon.onrender.com/sizeproduct`).then((res) => {
          setSizeProduct(res.data)
        })
      }, [])
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
            <Text>Ma: {route.params.id}</Text>
            <Image 
            style={{
                width: 100, 
                height: 50,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 15
            }}
            source={{
                uri: `data:image/png;base64,${route.params.url}`
            }} />
            <Text>Tên sản phẩm: {route.params.name}</Text>
            <Text>Giá: {route.params.price}</Text>
            <Text>Chọn size:</Text>
            {sizeProduct.map((item) => (
                <TouchableOpacity
                key={item._id}
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
