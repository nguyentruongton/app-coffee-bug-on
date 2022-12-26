import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const NewProducts = () => {
  const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    namePro: { fontSize: 22, fontWeight: "600", marginBottom: 2 },
    nameCategory: { fontSize: 14, fontWeight: "200", marginBottom: 12 },
    price: { fontSize: 18, fontWeight: "500" },
  });

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          paddingTop: 16,
          paddingLeft: 16,
          fontWeight: "600",
          textTransform: "uppercase",
          // color: "#3D685E",
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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card
          mode="outlined"
          style={{
            width: width / 2 - 25,
            height: height / 2 - 126,
            marginBottom: 16,
          }}
        >
          <Card.Cover
            source={{
              uri: "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg",
            }}
          />
          <View style={{ padding: 16 }}>
            <Text style={styles.namePro}>Cà phê sữa đá</Text>
            <Text style={styles.nameCategory}>Cà phê Việt Nam</Text>
            <Text style={styles.price}>25.000 đ</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {}} icon={"cart"} mode="outlined">
              Thêm
            </Button>
          </Card.Actions>
        </Card>
        <Card
          mode="outlined"
          style={{
            width: width / 2 - 25,
            height: height / 2 - 126,
            marginBottom: 16,
          }}
        >
          <Card.Cover
            source={{
              uri: "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg",
            }}
          />
          <View style={{ padding: 16 }}>
            <Text style={styles.namePro}>Cà phê sữa đá</Text>
            <Text style={styles.nameCategory}>Cà phê Việt Nam</Text>
            <Text style={styles.price}>25.000 đ</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {}} icon={"cart"} mode="outlined">
              Thêm
            </Button>
          </Card.Actions>
        </Card>
        <Card
          mode="outlined"
          style={{
            width: width / 2 - 25,
            height: height / 2 - 126,
            marginBottom: 16,
          }}
        >
          <Card.Cover
            source={{
              uri: "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg",
            }}
          />
          <View style={{ padding: 16 }}>
            <Text style={styles.namePro}>Cà phê sữa đá</Text>
            <Text style={styles.nameCategory}>Cà phê Việt Nam</Text>
            <Text style={styles.price}>25.000 đ</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {}} icon={"cart"} mode="outlined">
              Thêm
            </Button>
          </Card.Actions>
        </Card>
        <Card
          mode="outlined"
          style={{
            width: width / 2 - 25,
            height: height / 2 - 126,
            marginBottom: 16,
          }}
        >
          <Card.Cover
            source={{
              uri: "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a.jpg",
            }}
          />
          <View style={{ padding: 16 }}>
            <Text style={styles.namePro}>Cà phê sữa đá</Text>
            <Text style={styles.nameCategory}>Cà phê Việt Nam</Text>
            <Text style={styles.price}>25.000 đ</Text>
          </View>
          <Card.Actions>
            <Button onPress={() => {}} icon={"cart"} mode="outlined">
              Thêm
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};

export default NewProducts;
