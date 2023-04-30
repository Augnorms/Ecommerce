import {createContext, Dispatch, SetStateAction, useState} from 'react'

interface CartProp{
    cart:any[],
    setCart:Dispatch<SetStateAction<any[]>>
}

export const CartContext = createContext<CartProp>({
    cart:[],
    setCart:()=>{}
})

export const CartContextProvider = ({children}:any)=>{
      const [cart, setCart] = useState<any[]>([])

      return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
      )
}