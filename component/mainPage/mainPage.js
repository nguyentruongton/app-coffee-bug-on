import React from "react";
import { Text, View, ScrollView ,Image, Dimensions, TouchableOpacity} from "react-native";
import Panel from "./panel";
const { height, width } = Dimensions.get('window')
const MainPage = () => {
    const { height, width } = Dimensions.get('window')
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
            <View style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', flexWrap:'wrap'}}>
                <TouchableOpacity>
                    <View style={{ width: width / 2 - 30, height: height / 2 - 100, borderWidth: 0.5, borderColor: '#dddddd' ,margin: 5}}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                source={{uri:`https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg`}} />
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 10, color: '#b63838' }}>Cafe viet nam</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Ca phe sua da</Text>
                            <Text style={{ fontSize: 10 }}>25.000$</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ width: width / 2 - 30, height: height / 2 - 100, borderWidth: 0.5, borderColor: '#dddddd' ,margin: 5}}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                source={{uri:`https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg`}} />
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 10, color: '#b63838' }}>Cafe viet nam</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Ca phe sua da</Text>
                            <Text style={{ fontSize: 10 }}>25.000$</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ width: width / 2 - 30, height: height / 2 - 100, borderWidth: 0.5, borderColor: '#dddddd' ,margin: 5}}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                source={{uri:`https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg`}} />
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                            <Text style={{ fontSize: 10, color: '#b63838' }}>Cafe viet nam</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Ca phe sua da</Text>
                            <Text style={{ fontSize: 10 }}>25.000$</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

export default MainPage;
