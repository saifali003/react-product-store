import { createContext,useContext, useEffect, useState } from "react";
const ProductContext = createContext();
export function Provider({children}) {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [text,setText] = useState("");
    const fetchData = async()=>{
        try{
            const respose = await fetch("https://fakestoreapi.com/products");
            const result = await respose.json();
            setProducts(result);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    console.log(products);

    const addToCart = (product)=>{
        const exist = cart.find((item)=> item.id === product.id);
        if(exist){
            return;
        }
        setCart([...cart,product]);
    }
    const removeFromCart = (id)=>{
        const flteredProduct = cart.filter((item)=> item.id!==id);
        setCart(flteredProduct);
    }
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    return(
        <ProductContext.Provider value={{products,cart,addToCart,removeFromCart,totalPrice,text,setText}}>
            {children}
        </ProductContext.Provider>
    );
}
export function useProduct(){
    return useContext(ProductContext);
}