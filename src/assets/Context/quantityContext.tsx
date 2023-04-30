import {createContext, Dispatch, SetStateAction, useState} from 'react'


interface QunatityProp{
    eachQuantity:number,
    setEachQuantity:Dispatch<SetStateAction<number>>
}

export const MyQuantityContext = createContext<QunatityProp>({
    eachQuantity:0,
    setEachQuantity:()=>{}
}) 

export const MyQuantityContextProvider = ({children}:any)=>{
    const [eachQuantity, setEachQuantity] = useState<number>(0)

    return(
        <MyQuantityContext.Provider value={{eachQuantity, setEachQuantity}}>
            {children}
        </MyQuantityContext.Provider>
    )

}