import React from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity
} from 'react-native'

const ProductItem = (props) => {
    let { 
        name, 
        price, 
        url, 
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
                uri: url
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