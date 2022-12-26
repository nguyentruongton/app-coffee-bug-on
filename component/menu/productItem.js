import React from "react";
import styles from "../../BugOnStyles";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { btoa } from "react-native-quick-base64";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const ProductItem = (props) => {
  const { _id, name, price, image } = props.product; //destructuring an object
  const { onPress } = props;
  debugger;
  const { height, width } = Dimensions.get("window");

  return (
    <Card
      onPress={onPress}
      mode="contained"
      style={{
        // width: width / 2 - 25,
        width: "100%",
        // height: height / 2 - 126,
        marginBottom: 16,
      }}
    >
      <Card.Cover
        resizeMode="center"
        source={{
          uri: `data:image/png;base64,${btoa(
            new Uint8Array(image.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          )}`,
        }}
      />
      <View style={{ padding: 16 }}>
        <Text style={styles.namePro}>{name}</Text>
        {/* <Text style={styles.nameCategory}>Cà phê Việt Nam</Text> */}
        <Text style={styles.price}>{price} đ</Text>
      </View>
      <Card.Actions>
        <Button onPress={() => {}} icon={"cart"} mode="outlined">
          Thêm vào giỏ hàng
        </Button>
      </Card.Actions>
    </Card>

    // <TouchableOpacity
    //   onPress={onPress}
    //   style={{
    //     height: 150,
    //     paddingTop: 20,
    //     paddingStart: 10,
    //     flexDirection: "row",
    //   }}
    // >
    //   <Image
    //     style={{
    //       width: 100,
    //       height: 100,
    //       resizeMode: "cover",
    //       borderRadius: 10,
    //       marginRight: 15,
    //     }}
    //     source={{
    //       uri: `data:image/png;base64,${btoa(
    //         new Uint8Array(image.data.data).reduce(function (data, byte) {
    //           return data + String.fromCharCode(byte);
    //         }, "")
    //       )}`,
    //     }}
    //   />
    //   <View
    //     style={{
    //       flex: 1,
    //       marginRight: 10,
    //     }}
    //   >
    //     <Text
    //       style={{
    //         color: "black",
    //         fontWeight: "bold",
    //       }}
    //     >
    //       {name}
    //     </Text>
    //     <View
    //       style={{
    //         height: 1,
    //         backgroundColor: "black",
    //       }}
    //     />
    //     <Text>{price} VNĐ</Text>
    //   </View>
    // </TouchableOpacity>
  );
};
export default ProductItem;
