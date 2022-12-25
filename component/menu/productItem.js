import React from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import { btoa } from 'react-native-quick-base64';

const ProductItem = (props) => {
    let {
        _id,
        name, 
        price, 
        image, 
    } = props.product //destructuring an object    
    const {onPress} = props
    debugger
    return ( 
    <TouchableOpacity 
        onPress={onPress}
        style={{
        height: 150,                 
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row'
    }}>
        <Image 
            style={{
                width: 100, 
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 15
            }}
            source={{
                uri: `data:image/png;base64,${btoa(new Uint8Array(image.data.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, ''))}`
        }} />
        <View style={{                    
            flex: 1,
            marginRight: 10
        }}>
            <Text style={{
                color: 'black',
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black',                        
            }} />
            <Text>{price} VNĐ</Text>
        </View>                
    </TouchableOpacity>)
}
export default ProductItem