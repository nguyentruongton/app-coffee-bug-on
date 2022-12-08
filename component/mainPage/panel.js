import React from "react";
import { ScrollView ,Image} from "react-native";
import { Dimensions } from 'react-native';

const MainPage = () => {
    const images = [
        {
          source: 'https://i.imgur.com/TZExxgM.png',
        },
        {
          source: 'https://i.imgur.com/Mr8A0h6.png',
        },
        {
          source: 'https://i.imgur.com/EoMTm4S.png',
        },
      ]
    return(
            <ScrollView 
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            scrollIndicatorInsets={{top: 10, left: 10, bottom: 10,right: 10}} //ios
            >
                {images.map((item) => (
                    <Image
                    style={{width: Dimensions.get('window').width,height:100}} 
                    source={{uri:`${item.source}`}}/>  
                ))}
            </ScrollView>
    );
}

export default MainPage;
