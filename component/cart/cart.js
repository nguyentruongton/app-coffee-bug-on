import react,{useContext} from 'react';
import { ListProductContext } from '../../context/listProductContext';
import { Text, View } from "react-native";

const Cart = () => {
    const { products, delProduct, upAmount, downAmount, clearCart } = useContext(ListProductContext)

    return (
        <View>
            <Text>Giỏ hàng</Text>
            {
                products.map((n) => (
                    <View>
                            <Text>san pham:</Text>
                           <Text>{n.name}</Text>
                           <Text>{n.price}</Text>
                           <Text>{n.amount}</Text>
                    </View>
                ))
            }
        </View>
    )
};
export default Cart
