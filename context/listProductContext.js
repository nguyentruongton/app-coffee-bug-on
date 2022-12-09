import React, {createContext , useState} from 'react';

export const ListProductContext = createContext();

const ListProductProvider = (props) => {

    const [products, setProducts] = useState([]);
    
    const addProduct = async (product) => {
      const existedProduct = products.find((item) => {
        return item.id === product.id
      })
      if (existedProduct) {
        products.forEach((item) => {
          if (item.id === product.id) {
            item.amount += 1
          }
        })
        setProducts([...products]);
        console.log([...products]);
      } else {
        setProducts([...products, product])
        console.log([...products, product]);
      }
    }

    const delProduct = (id) => {
        setProducts(products.filter((n) => (n.id !== id)));
      }
    
      const upAmount = (id) => {
        products.forEach((item) => {
          if (item.id === id) {
            item.amount += 1
          }
        })
        setProducts([...products])
      }
    
      const downAmount = (id) => {
        products.forEach((item) => {
          if (item.id === id) {
            item.amount -= 1
            if (item.amount <= 1) {
              item.amount = 1
            }
          }
        })
        setProducts([...products])
      }
    
      const clearCart = () => {
        setProducts([])
      }
    
      return (
        <ListProductContext.Provider
          value={{
            products,
            addProduct,
            delProduct,
            upAmount,
            downAmount,
            clearCart,
          }}
        >
          {props.children}
        </ListProductContext.Provider>
      )
}

export default ListProductProvider