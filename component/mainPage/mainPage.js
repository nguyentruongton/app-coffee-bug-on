import React from "react";
import { Text, View, ScrollView ,Image} from "react-native";
import Panel from "./panel";

const MainPage = () => {
    return(
        <View>
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <Panel/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{
                            width: 300,
                            height: 75,
                            marginTop: 20, 
                            flex:1 ,
                            resizeMode:'cover'
                        }}
                        source={{uri:`https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png`}}
                    />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{ 
                            flex: 1, 
                            width: 200,
                            height: 200,
                            resizeMode:'cover'
                        }}
                        source={{uri:`https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png`}}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default MainPage;
