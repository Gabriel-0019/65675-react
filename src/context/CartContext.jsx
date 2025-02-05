import { createContext, useState } from "react";

//crear el context
export const CartContext = createContext();

//crear el componente proveedor
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //Antes de agregar un producto, primero verificar si existe
    let isInCart = cart.some(element => element.id === product.id);

    if (isInCart) {
      //realizar algo
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );

      setCart(updatedCart);
    }
    else
    {
      setCart([...cart, product]);
    }
  };

  const removeCart = () => {
    setCart([]);
  };

  const removedById = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };

  const getTotalAmount = () => {
    /*     let acc = 0;
    for (let index = 0; index < cart.length; index++) {
      acc += cart[index].price * cart[index].quantity;
    }

    return acc; */

    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);

    return total;
  };

  const getTotalItems = () => {
    let total =  cart.reduce( (acc, element)=>{
      return acc += element.quantity
    }, 0)

    return total;
  };

  let data = {
    cart,
    addToCart,
    removeCart,
    removedById,
    getTotalAmount,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
