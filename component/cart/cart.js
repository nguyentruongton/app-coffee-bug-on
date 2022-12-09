import react,{useContext, useEffect} from 'react';
import { ListProductContext } from '../../context/listProductContext';
import { Button, ScrollView, Text, View } from "react-native";

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
                    <Button title='Xóa toàn bồ' onPress={() => clearCart()}/>
                    {
                        products.map((n) => (
                            <View>
                                <Text>{n.name}</Text>
                                <Text>{n.price}</Text>
                                <Button title='+' onPress={()=>upAmount(n.id)}/>
                                <Text>{n.amount}</Text>
                                <Button title='-' onPress={()=>downAmount(n.id)}/>
                                <Button title='Xóa' onPress={()=>delProduct(n.id)}/>
                            </View>
                        ))
                    }
                    <Text>Tổng đơn hàng: {sum}</Text>
                </View>
        </ScrollView>
            :
            <Text>Giỏ hàng rỗng</Text>
            }
        </View>
    )
};
export default Cart
