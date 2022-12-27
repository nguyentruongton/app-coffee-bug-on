import React from "react";
import { Text, View, Dimensions } from "react-native";
import { Button, Card } from "react-native-paper";
import { btoa } from "react-native-quick-base64";
import styles from "../../BugOnStyles";

const NewProducts = () => {
  const { width } = Dimensions.get("window");

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          paddingTop: 16,
          paddingLeft: 16,
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#444149",
        }}
      >
        Sản phẩm mới
      </Text>
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 16,
          flexDirection: "row",
          flexWrap: "wrap",
          // display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card
          mode="outlined"
          style={{
            width: width / 2 - 25,
            marginBottom: 16,
          }}
        >
          <Card.Cover
            resizeMode="center"
            source={{
              uri: "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg",
            }}
          />
          <View style={{ padding: 16 }}>
            <Text style={styles.namePro}>Cà phê sữa đá</Text>
            <Text style={styles.nameCategory}>Cà phê Việt Nam</Text>
            <Text style={styles.price}>25.000 đ</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default NewProducts;
