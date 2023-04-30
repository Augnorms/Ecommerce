import {createContext, useState, Dispatch, SetStateAction} from 'react'

interface ImageProps{
    imagesId:number,
    setImageId:Dispatch<SetStateAction<number>>
}

export const ImageContext = createContext<ImageProps>({
    imagesId:-1,
    setImageId:()=>{}
})

export const ImageContextProvider = ({children}:any)=>{

   const [imagesId, setImageId] = useState<number>(0)

    return(
        <ImageContext.Provider value={{imagesId, setImageId}}>
            {children}
        </ImageContext.Provider>
    )
}