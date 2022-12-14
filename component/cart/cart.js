import react,{useContext, useEffect} from 'react';
import { ListProductContext } from '../../context/listProductContext';
import { Button, ScrollView, Text, View , TextInput, TouchableOpacity} from "react-native";

const Cart = () => {
    const { products, delProduct, upAmount, downAmount, clearCart } = useContext(ListProductContext);
    var sum = 0;
    products.forEach(item =>{
        sum += item.amount * item.price;
    });
    return (
        <View>
            {products.length > 0?
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => clearCart()}>
                        <Text>Xóa toàn bộ</Text>
                    </TouchableOpacity>
                    {
                        products.map((n) => (
                            <View key={n.name}>
                                <Text>{n.name}</Text>
                                <Text>{n.price}</Text>
                                <TouchableOpacity
                                    onPress={()=>upAmount(n.name)}
                                    >
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{n.amount}</Text>
                                <TouchableOpacity
                                    onPress={()=>downAmount(n.name)}
                                    >
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>delProduct(n.name)}
                                    >
                                    <Text>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                    <Text>Tổng đơn hàng: {sum}</Text>
                </View>    
                <View>
                    <Text>Nhập mã giảm giá</Text>
                    <TextInput
                        style={{height: 40,margin: 12,borderWidth: 1,padding: 10}}
                    />
                    <TouchableOpacity>
                        <Text>Gửi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Xóa mã</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Gửi</Text>
                    </TouchableOpacity>
                </View> 
        </ScrollView>
            :
            <Text>Giỏ hàng rỗng</Text>
            }
        </View>
    )
};
export default Cart
