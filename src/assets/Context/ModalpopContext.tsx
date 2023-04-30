import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ModalPopProp {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalPopProp>({
    modalOpen: false,
    setModalOpen: () => {},
});

export const ModalPopProvider = ({children}:any)=>{

   const [modalOpen, setModalOpen] = useState<boolean>(false)

    return(
        <ModalContext.Provider value={{modalOpen, setModalOpen}}>
            {children}
        </ModalContext.Provider>
    )
}