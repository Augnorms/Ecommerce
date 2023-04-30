// App.tsx
import { Box } from '@chakra-ui/react';
import MainRoutes from './mainComponents/RoutesContainer/MainRoutes';
import { MenuContextProvider } from './assets/Context/menuContext';
import {ProductProvider} from '../src/assets/Context/productContext'
import {ImageContextProvider} from '../src/assets/Context/productImageContex'
import { ModalPopProvider } from './assets/Context/ModalpopContext';
import { MyQuantityContextProvider } from './assets/Context/quantityContext';
import { CartContextProvider } from './assets/Context/cartArrayContext';

function App() {
  return (
    <Box w={'100%'} p={{ base: '0px', md: '0px', lg: '10px', '2xl': '10px' }}>

      <MenuContextProvider>
        <ProductProvider>
          <ImageContextProvider>
            <ModalPopProvider>
               <MyQuantityContextProvider>
                  <CartContextProvider>
                     <MainRoutes />
                  </CartContextProvider>
               </MyQuantityContextProvider>    
             </ModalPopProvider>
          </ImageContextProvider>
        </ProductProvider>
      </MenuContextProvider>
      
    </Box>
  );
}


export default App;
