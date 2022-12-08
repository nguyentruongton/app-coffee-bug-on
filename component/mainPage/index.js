import React from "react";
import { Text, View, ScrollView ,Image} from "react-native";
import styles from "./index.css";
import Panel from "./panel";

const MainPage = () => {
    return(
        <View style={styles.container}>
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
                {/* <View style={{height:130,marginTop:20}}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator ={false}
                    >
                        <Item key={1}
                        image={`https://www.puncoffee.com/wp-content/uploads/2022/05/c%C3%A0-ph%C3%AA-s%E1%BB%AFa-%C4%91%C3%A1-Vi%E1%BB%87t-Nam-1024x800.jpg`} 
                        name={`San Pham 1`}
                        />
                        <Item key={2}
                        image={`https://www.puncoffee.com/wp-content/uploads/2022/05/c%C3%A0-ph%C3%AA-s%E1%BB%AFa-%C4%91%C3%A1-Vi%E1%BB%87t-Nam-1024x800.jpg`} 
                        name={`San Pham 2`}
                        />
                        <Item key={3}
                        image={`https://www.puncoffee.com/wp-content/uploads/2022/05/c%C3%A0-ph%C3%AA-s%E1%BB%AFa-%C4%91%C3%A1-Vi%E1%BB%87t-Nam-1024x800.jpg`} 
                        name={`San Pham 3`}
                        />
                    </ScrollView>
                </View> */}
            </ScrollView>
        </View>
    );
}

export default MainPage;
