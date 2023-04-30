import {Box, Icon, Image} from '@chakra-ui/react'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../../../../assets/Context/productContext'
import { fetchProducts } from '../../../../assets/Hooks/FetchProduct'
import { ImageContext } from '../../../../assets/Context/productImageContex'
import { ModalContext } from '../../../../assets/Context/ModalpopContext'
import { MyQuantityContext } from '../../../../assets/Context/quantityContext'

export default function Images() {

 const {product, setProduct} = useContext(ProductContext)
 let {imagesId, setImageId} = useContext(ImageContext)
 const {setModalOpen} = useContext(ModalContext)
 let {setEachQuantity} = useContext(MyQuantityContext)

 useEffect(()=>{

  setProduct(fetchProducts)

 },[])

 

 const handleImageSlide = (e:any)=>{

      const Id = e.currentTarget.id

      setImageId(Id)
      setEachQuantity(0)
 }


 const handleIncrementImgSlide = () => {
   
      if (imagesId < 3) {
        setImageId(prevId => prevId + 1)
        setEachQuantity(0)
      }   
   
}


const handleDecrementIngSlide = () => {
  if (imagesId > 0 && imagesId <= 3) {
    setImageId(prevId => prevId - 1)
    setEachQuantity(0)
  }   
}




  return (
    <Box
     w={'100%'}
     h={{base:'100%', md:'100%', lg:'75vh', '2xl':'75vh'}}
    >
        <Box
          w={{base:'100%', md:'100%', lg:'70%', '2xl':'65%'}}
          h={{base:'', md:'', lg:'', '2xl':''}}
          m={{base:'none', md:'none', lg:'0 auto', '2xl':'0, auto'}}
          
        >

             <Box
               w={'100%'}
               h={{base:'20rem', md:'20rem', lg:'30rem'}}         
               borderRadius={{base:'0px', md:'0px', lg:'10px'}}
               cursor={'pointer'}
             >

               <Image 
                src={product.length > 1 ? product[imagesId].Image : 'empty'} 
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                borderRadius={{base:'0px', md:'0px', lg:'10px'}}
                onClick={()=>{setModalOpen(true)}}
                />

                <Box
                 w={'100%'}
                 p={'10px'}
                 display={{base:'flex', md:'flex', lg:'none'}}
                 justifyContent={'space-between'}
                 position={'relative'}
                 top={{base:'-56', md:'-200'}}
                >

                    <Box
                     w={'50px'}
                     h={'50px'}
                     borderRadius={'50%'}
                     bg={'#fff'}
                     display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                    >
                        <Icon as={IoIosArrowBack} boxSize={6} onClick={handleDecrementIngSlide}/>

                    </Box>

                    <Box
                     w={'50px'}
                     h={'50px'}
                     borderRadius={'50%'}
                     bg={'#fff'}
                     display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                    >
                        <Icon as={IoIosArrowForward} boxSize={6} onClick={handleIncrementImgSlide}/>

                    </Box>

                </Box>

             </Box>


             <Box
               w={'100%'}
               h={'12rem'}
               display={{base:'none', md:'none', lg:'grid'}}
               gridTemplateColumns={{base:'', md:'', lg:'repeat(4, 1fr)'}}
               gap={6}
               alignItems={'center'}
             >

                <Box
                  h={'100px'}
                  cursor={'pointer'}     
                >
                    <Image 
                      src={product.length > 1 ? product[0].Image : 'empty'}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'cover'}
                      borderRadius={'8px'}
                      id={product.length > 1 ? (product.length - 4).toString()  : '0'}
                      onClick={handleImageSlide}
                    />

                </Box>

                <Box
                  h={'100px'}
                  cursor={'pointer'}
                >

                    <Image 
                      src={product.length > 1 ? product[1].Image : 'empty'}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'cover'}
                      borderRadius={'8px'}
                      id={product.length > 1 ? (product.length - 3).toString()  : '0'}
                      onClick={handleImageSlide}
                    />

                </Box>

                <Box
                  h={'100px'}
                  cursor={'pointer'}
                >

                   <Image 
                      src={product.length > 1 ? product[2].Image : 'empty'}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'cover'}
                      borderRadius={'8px'}
                      id={product.length > 1 ? (product.length - 2).toString()  : '0'}
                      onClick={handleImageSlide}
                    /> 

                </Box>

                <Box
                  h={'100px'}
                  cursor={'pointer'}
                >

                    <Image 
                      src={product.length > 1 ? product[3].Image : 'empty'}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'cover'}
                      borderRadius={'8px'}
                      id={product.length > 1 ? (product.length - 1).toString()  : '0'}
                      onClick={handleImageSlide}
                    />

                </Box>


             </Box>

        </Box>
    </Box>
  )
}
