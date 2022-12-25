import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import Panel from "./panel";
import { Appbar } from "react-native-paper";
import NewProducts from "./NewProducts";

const MainPage = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <View>
      <StatusBar currentHeight />
      <Appbar.Header>
        <Appbar.Content title="Cà phê BUG ỔN" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView centerContent={true} showsVerticalScrollIndicator={false}>
        <Panel />
        <NewProducts />
        <View
          style={{
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#3D685E",
              marginBottom: 16,
            }}
          >
            Giới thiệu
          </Text>
          <View>
            <Image
              style={{
                width: "100%",
                height: 110,
                // height: height / 7,
                resizeMode: "contain",
                marginBottom: 4,
              }}
              source={{
                uri: `https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png`,
              }}
            />
            <Image
              style={{
                width: "100%",
                height: 400,
                // height: height / 3,
                resizeMode: "contain",
              }}
              source={{
                uri: `https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png`,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                textAlign: "justify",
                marginTop: 12,
                lineHeight: 20,
                marginBottom: 60,
              }}
            >
              Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, Trà Sữa CloudTea Hương
              Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là bồng
              bềnh, càng thêm đậm đà nhờ topping vụn bánh quy phô mai hoặc bột
              ca cao thơm lừng.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainPage;
