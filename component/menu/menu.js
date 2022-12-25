import React ,{ useState, useEffect} from "react";
import { View ,FlatList,TouchableOpacity,Image,Text} from "react-native";
import ProductItem from "./productItem";
import axios from "axios";
import { btoa } from 'react-native-quick-base64';
const Menu = ({navigation}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`https://coffeebugon.onrender.com/product`).then((res) => {
          setProduct(res.data)
        })
        .catch(error => console.log(error));
      }, [])
      
    return(
        <View>
            {<FlatList 
                data={product}
                renderItem={({item}) => 
                <ProductItem 
                    onPress={()=> {                        
                    navigation.navigate('Chi tiết sản phẩm',{
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        url: btoa(new Uint8Array(item.image.data.data).reduce(function (data, byte) {
                            return data + String.fromCharCode(byte);
                        }, ''))
                    })
                    }}
                    product = {item} 
                    key={item.name}/>
                    }
                keyExtractor={eachProduct => eachProduct.name}
                />
            }
        </View>
    );
}

export default Menu;
