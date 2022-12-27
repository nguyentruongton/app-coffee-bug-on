import react, { useContext, useEffect, useState } from "react";
import styles from "../../BugOnStyles";
import { ListProductContext } from "../../context/listProductContext";
import { Image, ScrollView, Text, View } from "react-native";
import moment from "moment";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import {
  Appbar,
  Button,
  IconButton,
  TextInput,
  MD3Colors,
  Card,
  Portal,
  Dialog,
  Paragraph,
  Provider,
} from "react-native-paper";

const Cart = () => {
  // const [visible, setVisible] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [login, setLogin] = useState(false);
  // const hideDialog = () => setVisible(!visible);
  var token = AsyncStorage.getItem("token");
  //   const InputData = async () => {
  //       token = await AsyncStorage.getItem('token');
  //       console.log(token);
  //   }
  //   useEffect(()=>{
  //     InputData();
  // },[])
  const { products, delProduct, upAmount, downAmount, clearCart } =
    useContext(ListProductContext);
  var sum = 0;
  const [namediscount, setNameDisCount] = useState("");
  const [discountid, setDisCountId] = useState("");
  const [discountprice, setDiscountPrice] = useState(0);
  const [statuspayment, setStatusPayment] = useState(false);
  const [statusdelivery, setStatusDelivery] = useState(false);

  products.forEach((item) => {
    sum += item.amount * item.price;
  });
  const searchdiscount = () => {
    axios
      .post(`https://coffeebugon.onrender.com/discount/one`, {
        name: namediscount,
      })
      .then((res) => {
        var today = moment().format("DD-MM-YYYY");
        var startday = moment(res.data.startdate).format("DD-MM-YYYY");
        var endday = moment(res.data.enddate).format("DD-MM-YYYY");

        if (startday <= today && today <= endday) {
          setNameDisCount(res.data.name);
          setDisCountId(res.data._id);
          setDiscountPrice(res.data.price);
          alert("Giảm giá thành công !");
        } else {
          alert("Giảm giá không thành công !");
        }
      });
  };
  const addOrder = async () => {
    if (!token || token._z != null) {
      const infoUser = await axios.get(
        `https://coffeebugon.onrender.com/user/${jwtDecode(token._z).id}`
      );
      if (infoUser.data) {
        if (infoUser.data.numberphone == "" && infoUser.data.address == "") {
          alert("Vui lòng cập nhật SĐT và địa chỉ đầy đủ!");
        } else {
          const rec = await axios.post(
            `https://coffeebugon.onrender.com/receipt`,
            {
              userid: jwtDecode(token._z).id,
              price: sum - discountprice,
              products: products,
              discountid: discountid,
              discountprice: discountprice,
              statuspayment: statuspayment,
              statusdelivery: statusdelivery,
            }
          );
          setNameDisCount("");
          setDiscountPrice(0);
          setDisCountId("");
          if (rec) {
            alert("Thanh toán thành công");
            // setSuccess(true);
            // setVisible(true);
            clearCart();
          } else {
            alert("Vui lòng thử lại sau");
            // setSuccess(false);
            // setVisible(true);
          }
        }
      }
      // alert("Bạn đã đăng nhập rồi!!!");
      // console.log(jwtDecode(token._z).id);
    } else {
      // setLogin(true);
      // setVisible(true);
      alert("Bạn chưa đăng nhập");
    }
  };

  return (
    // <Provider>
    <View>
      <Appbar.Header>
        <Appbar.Content titleStyle={styles.titleAppBar} title="Giỏ hàng" />
        <Appbar.Action
          icon="delete-sweep"
          onPress={() => {
            clearCart();
            setNameDisCount("");
            setDisCountId("");
            setDiscountPrice(0);
          }}
        />
      </Appbar.Header>

      <View>
        {products.length > 0 ? (
          <ScrollView>
            <View style={{ padding: 16 }}>
              {/* <Button
                style={{
                  // width: "50%",
                  // flexDirection: "row",
                  // justifyContent: "flex-end",
                  marginBottom: 16,
                }}
                icon={"delete"}
                mode="contained-tonal"
                onPress={() => {
                  clearCart();
                  setNameDisCount("");
                  setDisCountId("");
                  setDiscountPrice(0);
                }}
              >
                Xóa tất cả
              </Button> */}
              {products.map((n) => (
                <Card
                  mode="contained"
                  style={{ padding: 12, marginBottom: 8 }}
                  key={n.name}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.nameProCart}>{n.name}</Text>
                    <IconButton
                      icon={"delete"}
                      size={20}
                      mode="outlined"
                      iconColor={MD3Colors.error50}
                      onPress={() => delProduct(n.name)}
                    >
                      Xóa
                    </IconButton>
                  </View>
                  <Text style={styles.priceCart}>{n.price}đ</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      size={12}
                      mode="outlined"
                      icon={"minus"}
                      onPress={() => downAmount(n.name)}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        marginHorizontal: 6,
                      }}
                    >
                      {n.amount}
                    </Text>
                    <IconButton
                      size={12}
                      mode="outlined"
                      icon={"plus"}
                      onPress={() => upAmount(n.name)}
                    />
                  </View>
                </Card>
              ))}
              <View
                style={{
                  marginTop: 12,
                  flexDirection: "column",
                  fontSize: 24,
                  backgroundColor: "#E8DEF9",
                  padding: 16,
                  borderRadius: 12,
                  marginBottom: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  Tạm tính{" "}
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    {sum}đ
                  </Text>
                </Text>
                <View>
                  <Text style={{ fontSize: 14, marginTop: 4, marginBottom: 8 }}>
                    Số tiền giảm giá{" "}
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      {discountprice}đ
                    </Text>
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TextInput
                        placeholder="Nhập mã giảm giá (nếu có)"
                        mode="outlined"
                        onChangeText={setNameDisCount}
                        style={{ marginBottom: 8, flex: 1, marginRight: 4 }}
                        value={namediscount}
                      />
                      <IconButton
                        style={{
                          flex: 0,
                        }}
                        icon={"delete"}
                        size={32}
                        mode="outlined"
                        onPress={() => {
                          setNameDisCount("");
                          setDisCountId("");
                          setDiscountPrice(0);
                        }}
                      />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Button mode="contained" onPress={() => searchdiscount()}>
                        Áp dụng
                      </Button>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      marginTop: 12,
                    }}
                  >
                    Tổng thanh toán{" "}
                    <Text style={{ fontSize: 22, fontWeight: "500" }}>
                      {sum - discountprice}đ
                    </Text>
                  </Text>
                </View>
              </View>
              <Button icon={"cash"} mode="contained" onPress={() => addOrder()}>
                Thanh toán
              </Button>
              {/* <Portal>
                  <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Thông báo</Dialog.Title>
                    <Dialog.Content>
                      {login === true && (
                        <Paragraph>Bạn chưa đăng nhập.</Paragraph>
                      )}
                      {success === true && (
                        <Paragraph>Thanh toán thành công.</Paragraph>
                      )}
                      {success === false && (
                        <Paragraph>Thanh toán thất bại.</Paragraph>
                      )}
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button onPress={hideDialog}>OK</Button>
                    </Dialog.Actions>
                  </Dialog>
                </Portal> */}
            </View>
          </ScrollView>
        ) : (
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#444149",
                textAlign: "center",
                padding: 32,
                textTransform: "uppercase",
              }}
            >
              Giỏ hàng rỗng
            </Text>
            <Image
              style={{ width: "100%" }}
              resizeMode="center"
              source={require("../../assets/images/Empty.png")}
            />
          </View>
        )}
      </View>
    </View>
    // </Provider>
  );
};
export default Cart;
