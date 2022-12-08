import React from "react";
import { View,FlatList} from "react-native";
import ProductItem from "./productItem";
const ListProduct = () => {
    const foods =[
        {
            name: 'Cafe phê Việt Nam',
            url: 'https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg',
            price: 25000,
        },
        {
            name: 'Cafe sửa',
            url: 'https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg',
            price: 30000,
        },
        {
            name: 'Bạc xỉu',
            url: 'https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg',
            price: 30000,
        },
        {
            name: 'Trà đào cam xả',
            url: 'https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg',
            price: 50000,
        },
        {
            name: 'Mochi',
            url: 'https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg',
            price: 15000,
        }
    ]
    const searchText ='';
    const filteredFoods = () => foods.filter(eachProduct => eachProduct.name.toLowerCase().includes(searchText.toLowerCase()))
    return(
        <View>
            {<FlatList 
                data={filteredFoods()}
                renderItem={({item}) => 
                <ProductItem 
                    onPress={()=> {                        
                        alert(`Sản phẩm tên là: ${item.name}`)
                    }}
                    product = {item} key={item.name}/>
                }
                keyExtractor={eachProduct => eachProduct.name}
            />}    
        </View>
    );
}

export default ListProduct;
