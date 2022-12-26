import react,{useContext, useEffect, useState} from 'react';
import { ListProductContext } from '../../context/listProductContext';
import { Button, ScrollView, Text, View , TextInput, TouchableOpacity } from "react-native";
import moment from 'moment'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
    const { products, delProduct, upAmount, downAmount, clearCart } = useContext(ListProductContext);
    var sum = 0;
    const [price, setPrice] = useState(0)
    const [userid, setUserId] = useState('')
    const [namediscount, setNameDisCount] = useState('')
    const [discountid, setDisCountId] = useState('')
    const [discountprice, setDiscountPrice] = useState(0)
    const [statuspayment, setStatusPayment] = useState(false)
    const [statusdelivery, setStatusDelivery] = useState(false)
    products.forEach(item =>{
        sum += item.amount * item.price;
    });
    const searchdiscount = () => {
        axios
          .post(`https://coffeebugon.onrender.com/discount/one`, { name: namediscount })
          .then((res) => {
            var today = moment().format('DD-MM-YYYY')
            var startday = moment(res.data.startdate).format('DD-MM-YYYY')
            var endday = moment(res.data.enddate).format('DD-MM-YYYY')
    
            if (startday <= today && today <= endday) {
              setNameDisCount(res.data.name)
              setDisCountId(res.data._id)
              setDiscountPrice(res.data.price)
              alert('Giảm giá thành công !');
            } else {
              alert('Giảm giá không thành công !');
            }
          })
      }

      const addOrder = async () => {
        // if (AsyncStorage.getItem('token')) {
        //   alert('Mời bạn đăng nhập!!!')
        // }
        if (!AsyncStorage.getItem('token')) {
          const infoUser = await axios.get(`https://coffeebugon.onrender.com/user/${userid}`)
          if (infoUser.data) {
            if (infoUser.data.numberphone == '' && infoUser.data.address == '') {
              alert('Vui lòng cập nhật SĐT và địa chỉ đầy đủ!')
            } else {
              const rec = await axios.post(`https://coffeebugon.onrender.com/receipt`, {
                userid,
                price,
                products,
                discountid,
                discountprice,
                statuspayment,
                statusdelivery
              })
              setNameDisCount('')
              setDiscountPrice(0)
              setDisCountId('')
              if (rec) {
                alert('Thanh toán thành công!')
                clearCart()
              } else {
                alert('Vui lòng thử lại sau')
              }
            }
          }
        }else{
            alert('Mời bạn đăng nhập!!!')
        }
      }
    return (
        <View>
            {products.length > 0?
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => {
                        clearCart()
                        setNameDisCount('')
                        setDisCountId('')
                        setDiscountPrice(0)
                        }}>
                        <Text>Xóa toàn bộ</Text>
                    </TouchableOpacity>
                    {
                        products.map((n) => (
                            <View key={n.name}>
                                <Text>{n.name}</Text>
                                <Text>{n.price}</Text>
                                <TouchableOpacity
                                    onPress={()=>upAmount(n.name)}
                                    >
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{n.amount}</Text>
                                <TouchableOpacity
                                    onPress={()=>downAmount(n.name)}
                                    >
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>delProduct(n.name)}
                                    >
                                    <Text>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                    <Text>Tổng đơn hàng: {sum}</Text>
                </View>    
                <View>
                    <Text>Nhập mã giảm giá {discountprice}</Text>
                    <Text>Số tiền thanh toán {sum-discountprice}</Text>
                    <TextInput
                        onChangeText={setNameDisCount}
                        style={{height: 40,margin: 12,borderWidth: 1,padding: 10}}
                        value={namediscount}
                    />
                    <TouchableOpacity onPress={() => {
                        setNameDisCount('')
                        setDisCountId('')
                        setDiscountPrice(0)
                        }
                    }>
                        <Text>Xóa mã</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => searchdiscount()}>
                        <Text>Gửi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addOrder()}>
                        <Text>Thanh toán</Text>
                    </TouchableOpacity>
                </View> 
        </ScrollView>
            :
            <Text>Giỏ hàng rỗng</Text>
            }
        </View>
    )
};
export default Cart
