// menuContext.tsx
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface MenuContextProps {
  display: boolean;
  setDisplay: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextProps>({
  display: false,
  setDisplay: () => {},
});

export const MenuContextProvider = ({ children }:{children:React.ReactNode}) => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ display, setDisplay }}>
      {children}
    </MenuContext.Provider>
  );
};
