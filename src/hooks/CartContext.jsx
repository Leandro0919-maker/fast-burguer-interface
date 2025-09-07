import { useContext, createContent, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
          console.log(product);
    }

    const clearCart = () => { }

    const deleteProduct = (product) => { }

    const increaseProduct = (productId) => { }

    const decreaseProduct = (productId) => { }


    return (<CartContext.Provider value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct
    }}>
        {children}

    </CartContext.Provider>
    )

}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context){ 
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}