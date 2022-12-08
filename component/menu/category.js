import React from "react";
import { Text, TouchableOpacity ,FlatList ,Image} from "react-native";
const Category = () => {
    const categories =[
    {
        name: 'Coffee',
        url: 'https://toshiko.vn/wp-content/uploads/2021/12/loi-ich-cua-viec-uong-cafe-dung-cach-5.jpg'
    },
    {
        name: 'Trái cây',
        url: 'https://bloganchoi.com/wp-content/uploads/2018/06/cac-loai-trai-cay.jpg'
    },
    {
        name: 'Nước giải khát',
        url: 'https://cdnmedia.baotintuc.vn/2017/11/23/13/07/2901large_w_550.jpg'
    }
]
    return(
            <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={categories}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => {
                        return <TouchableOpacity
                            onPress={()=>{
                                alert(`press ${item.name}`)
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            >
                            <Image
                                style={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'cover',
                                    borderRadius: 25,
                                    margin: 10
                                }}
                                source={{
                                    uri: item.url
                                }} />
                            <Text 
                            style={{
                                color: 'black',
                            
                            }}
                            >{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    style={{flex: 1}}>
                </FlatList>
    );
}

export default Category;
