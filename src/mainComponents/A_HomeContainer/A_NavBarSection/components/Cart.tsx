import {Box, Button, Card, CardBody, CardFooter, CardHeader, Icon, Image, Menu, MenuButton, MenuList, Text} from '@chakra-ui/react'
import {BsCart3} from 'react-icons/bs'
import {VscTrash} from 'react-icons/vsc'
import {useContext} from 'react'
import { CartContext } from '../../../../assets/Context/cartArrayContext'

export default function Cart() {

  const {cart} = useContext(CartContext)


  return (
    <Box
     w={'100%'}
     pt={{base:'0', md:'0', lg:'5px'}}
    >
      
       <Box
         w={{md:'100%', lg:'50%'}}
         display={'flex'}
         m={{lg:'0 auto'}}
       >
          
         <Box 
           w={'100%'}
           mt={'10px'}
           >

              <Menu>

                 <MenuButton>
                    <Icon as={BsCart3}  boxSize={{base:6, md:6, lg:6}} cursor={'pointer'}/>
                    <Box
                     w={'20px'}
                     h={'20px'}
                     borderRadius={'50%'}
                     display={'flex'}
                     alignItems={'center'}
                     justifyContent={'center'}
                     bg={'red'}
                     color={'#fff'}
                     position={'relative'}
                     top={'-35px'}
                     left={'20px'}
                     fontWeight={'600'}
                    >
                      {cart.length}
                    </Box>
                 </MenuButton>

                 <MenuList 
                   w={{base:'100vw', md:'100vw', lg:'40vw'}}
                   height={'260px'}
                   p={'0'}
                   
                  >

                  <Card
                     w={'100%'}
                     h={'100%'}
                     overflow={'auto'}
                    >
                       <CardHeader
                         borderBottom={'1px'}
                         borderColor={'hsl(220, 14%, 75%)'}
                       >
                          <Text fontWeight={'900'}>Cart</Text>
                          
                       </CardHeader>

                       {cart.length >= 1 &&
                          cart.map(cartData => (
                            <Box 
                              h={'100%'}
                              key={cartData.id}>
                                
                              <CardBody w={'100%'} h={'100%'}>

                                <Box w={'100%'} p={'10px'} display={'flex'}>
                                  <Box w={'15%'} h={'70px'} borderRadius={'5px'}>
                                    <Image src={cartData.image} alt="images" />
                                  </Box>

                                  <Box w={'75%'} h={'70px'} p={'10px'}>
                                    <Text color={'hsl(219, 9%, 45%)'}>
                                      {cartData.Heading}<br />
                                      {cartData.amount}
                                      <Text as={'span'} fontWeight={'900'} ml={'5px'} color={'hsl(0, 0%, 0%)'}>
                                        {cartData.amount * cartData.quantity}
                                      </Text>
                                    </Text>
                                  </Box>

                                  <Box w={'10%'} h={'70px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Icon as={VscTrash} boxSize={6} color={'hsl(219, 9%, 45%)'} cursor={'pointer'} />
                                  </Box>
                                </Box>

                              </CardBody>
                             </Box>

                              ))
                        }


                       {cart.length >= 1 &&
                             <CardFooter w={'100%'} p={'10px'}>
                                <Button w={'100%'} bg={'hsl(26, 100%, 55%)'} color={'#fff'} _hover={{ bg: 'hsl(26, 100%, 55%)' }}>
                                        Checkout
                                </Button>
                              </CardFooter>
                                                 
                       }


                      {cart.length == 0 &&
                       <Box 
                        p={'10px'}
                        w={'100%'}
                        h={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                            <Text 
                              textAlign={'center'}
                              fontSize={'18px'}
                              fontWeight={'700'}
                              color={'hsl(220, 14%, 75%)'}
                              >Your Cart is Empty</Text>

                      </Box>
                      }

                   </Card>

                     
                 </MenuList>
              </Menu>

         </Box>

         
         <Box 
           w={'100%'}
           display={'flex'}
           justifyContent={'flex-end'}
           >
            <Image 
                src={'/images/image-avatar.png'} 
                w={'40px'}
                h={'40px'} 
                borderRadius={'50%'}
                cursor={'pointer'}
                _hover={{border:'2px', borderColor:'hsl(26, 100%, 55%)'}}
            />
         </Box>

       </Box> 
  
     
    </Box>
  )
}
