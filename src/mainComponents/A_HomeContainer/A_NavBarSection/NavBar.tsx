import {Box} from  '@chakra-ui/react'
import Logo from './components/Logo'
import Manu from './components/Manu'
import Cart from './components/Cart'

export default function NavBar() {
  return (
    <Box
     w={'100%'}
     p={{base:'10px 30px 0px 10px', md:'10px 30px 0px 10px', lg:'10px 10px 0px 10px'}}
     display={'flex'}
     borderBottom={{base:'none', md:'none', lg:'1px', '2xl':'1px'}}
     borderColor={'hsl(220, 14%, 75%)'}
    >

       <Box w={'70%'}  display={{md:'flex-wrap', lg:'flex'}}>

           <Box w={{base:'100%', lg:'30%'}} > <Logo /> </Box>


           <Box 
             w={{base:'100%', lg:'70%'}} 
           > 

                <Manu /> 

          </Box>

       </Box>


        <Box w={'30%'}> <Cart /> </Box>

    </Box>
  )
}
