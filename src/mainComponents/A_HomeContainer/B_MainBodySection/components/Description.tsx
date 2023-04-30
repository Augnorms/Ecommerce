import {Box, Text, Heading, Button, Icon, Tag, TagLeftIcon, TagLabel, TagRightIcon } from '@chakra-ui/react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {MdOutlineAddCircle} from 'react-icons/md'
import { useContext} from 'react'
import { ProductContext } from '../../../../assets/Context/productContext'
import { ImageContext } from '../../../../assets/Context/productImageContex'
import { MyQuantityContext } from '../../../../assets/Context/quantityContext'
import { CartContext } from '../../../../assets/Context/cartArrayContext'


export default function Description() {

  const {product} = useContext(ProductContext)

  const {imagesId} = useContext(ImageContext)

  let {eachQuantity, setEachQuantity} = useContext(MyQuantityContext)

  const {cart, setCart} = useContext(CartContext)
 
  const quant = product.length > 1 ? product[imagesId].Quantity : 0

  const handleCountUp = ()=>{
      
     if(eachQuantity>=0 && eachQuantity<quant){
      setEachQuantity(prevQuant=>prevQuant + 1)
     } 
     
  }

  const handleCountDown = () => {
    if (eachQuantity > 0) {
      setEachQuantity(prevQuant => prevQuant - 1);
    }
  }
  
const handleAddToCart = ()=>{
  let data = {
    id:product[imagesId].id,
    company:product[imagesId].Company,
    Heading:product[imagesId].Heading,
    description:product[imagesId].Description,
    amount:product[imagesId].Amount,
    quantity:eachQuantity,
    image:product[imagesId].Image
  }


  // setCart(prevCart=>[...prevCart, data])

  
  const existingItemIndex = cart.findIndex(item => item.id === data.id);

  if (existingItemIndex !== -1) {
    const existingItem = cart[existingItemIndex];
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + eachQuantity,
    };
    const updatedCart = [...cart];
    updatedCart[existingItemIndex] = updatedItem;
    setCart(updatedCart);
  } else {
    setCart([...cart, data]);
  }
}

  return (
    <Box
        w={'100%'}
        h={{base:'100%', md:'100%', lg:'75vh', '2xl':'75vh'}}
        p={{base:'10px', md:'10px', lg:'50px 10px 10px 10px', '2xl':'50px 10px 10px 10px'}}
    >

        <Box
         w={'100%'}
         p={'10px'}
         textAlign={{md:'center', lg:'left'}}
        >
            <Text fontSize={'20px'} fontWeight={'500'} color={'hsl(26, 100%, 55%)'}> 
               {product.length > 1 ? product[imagesId].Company : ''}
            </Text>

        </Box>

        <Box
         w={'100%'}
         p={'10px'}
         mt={'15px'}
        >
            <Heading 
              as={'h1'} 
              size='xl' 
              color={'hsl(0, 0%, 0%)'}
              textAlign={{md:'center', lg:'left'}}
            >
                 {product.length > 1 ? product[imagesId].Heading : ''}
                 
            </Heading>

        </Box>

        <Box
         w={'100%'}
         p={'10px'}
         mt={'20px'}
        >
            <Text
             color={'hsl(219, 9%, 45%)'}
             fontWeight={'450'}
             textAlign={{md:'center', lg:'left'}}
            >
                {product.length > 1 ? product[imagesId].Description : ''}
            </Text>

        </Box>

        <Box
         w={'100%'}
         p={'10px'}
         mt={'20px'}
        >
            <Text 
             fontSize={'24px'}
             fontWeight={'700'}
             mb={'10px'}
             textAlign={{md:'center', lg:'left'}}
             >{product.length > 1 ? `$${product[imagesId].Amount}` : ''} 

                <Text 
                  as={'span'} 
                  p={'6px'} 
                  bg={'hsl(223, 64%, 98%)'} 
                  color={'hsl(26, 100%, 55%)'}
                  ml={'15px'}
                  fontSize={'16px'}
                  borderRadius={'5px'}
                  >
                    50%
                </Text>

            </Text>

            <Box w={'100%'} textAlign={{md:'center', lg:'left'}}>

                <Text 
                as={'s'}
                fontWeight={'600'}
                color={'hsl(220, 14%, 75%)'}
                
                >
                    $250.00 
                </Text>

                <Text color={'deeppink'} fontWeight={'900'}>{`Quantity ${quant}`}</Text>

            </Box>

        </Box>

        <Box
         w={'100%'}
         p={'10px'}
         mt={'30px'}
         display={'grid'}
         gridTemplateColumns={{base:'1fr', md:'1fr', lg:'0.4fr 0.6fr', '2xl':'0.4fr 0.6fr'}}
         gap={2}
        >

           
                 
               <Tag 
                  display={'grid'} 
                  gridTemplateColumns={'1fr 1fr 1fr'}
                  cursor={'pointer'}
                  p={{base:'12px', md:'12px', lg:'9px'}}
                  >

                 <Box>
                   <TagLeftIcon 
                     as={AiOutlineMinusCircle} 
                     boxSize={6} color={'hsl(26, 100%, 55%)'}
                     onClick={handleCountDown}
                     />
                 </Box>

                  <TagLabel textAlign={'center'} fontWeight={'900'} fontSize={'20px'}>
                   {eachQuantity}
                  </TagLabel>

                 <Box display={'flex'} justifyContent={'flex-end'}>
                  <TagRightIcon 
                    as={MdOutlineAddCircle} boxSize={6}
                    color={'hsl(26, 100%, 55%)'}
                    onClick={handleCountUp}
                    /> 
                 </Box>

               </Tag>   


                <Button
                 color={'#fff'}
                 bg={'hsl(26, 100%, 55%)'}
                 _hover={{bg:'hsl(26, 100%, 55%)'}}
                 onClick={handleAddToCart}
                >
                     <Icon 
                       as={AiOutlineShoppingCart} 
                       mr={'20px'} 
                       boxSize={5}
                       color={'#fff'}
                       />
                     Add to cart
                </Button>
    
        </Box>

    </Box>
  )
}
