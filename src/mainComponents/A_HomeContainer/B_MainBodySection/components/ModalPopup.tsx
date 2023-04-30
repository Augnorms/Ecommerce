import {Box, Icon, Image} from '@chakra-ui/react'
import {FaTimes} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { useContext } from 'react'
import { ProductContext } from '../../../../assets/Context/productContext'
import { ImageContext } from '../../../../assets/Context/productImageContex'
import { ModalContext } from '../../../../assets/Context/ModalpopContext'

export default function ModalPopup() {

  const {product} = useContext(ProductContext)
  const {imagesId, setImageId} = useContext(ImageContext)
  const {modalOpen, setModalOpen} = useContext(ModalContext)

  const handleImageSlide = (e:any)=>{

    const Id = e.currentTarget.id

    setImageId(Id)
}

  const handleIncrementImgSlide = () => {
   
    if (imagesId < 3) {
      setImageId(prevId => prevId + 1)
    }   
 
}


const handleDecrementIngSlide = () => {
    if (imagesId > 0 && imagesId <= 3) {
      setImageId(prevId => prevId - 1)
    }   
}


  return (
    <Box
      w={'100%'}
      h={'100vh'}
      position={'absolute'}
      top={modalOpen ? '0%' : '-110%'}
      left={'0%'}
      bg={'rgba(0,0,0,0.8)'}
      display={{base:'none', md:'none', lg:'block', '2xl':'block'}}
      transition={'top 1s ease-in'}
    >
        
        <Box
         w={'30%'}
         m={'100px auto'}
         p={'10px'}
        >

            <Box
             w={'100%'}
             p={'20px'}
             display={'flex'}
            justifyContent={'end'}
             bg={'rgba(0,0,0,0.0)'}
            >
                <Icon 
                  as={FaTimes} boxSize={8} 
                  color={'hsl(26, 100%, 55%)'}
                  cursor={'pointer'}
                  onClick={()=>{setModalOpen(false)}}
                  />

            </Box>


            <Box
             w={'100%'}
             h={'50vh'}
             bg={'rgba(0,0,0,0.0)'}
             mt={'10px'}
             borderRadius={'8px'}
            >
                    <Image 
                    src={product.length > 1 ? product[imagesId].Image : 'empty'} 
                    w={'100%'}
                    h={'100%'}
                    objectFit={'cover'}
                    borderRadius={{base:'0px', md:'0px', lg:'10px'}}
                    cursor={'pointer'}
                    />

               <Box
                 w={'100%'}
                 p={'10px'}
                 display={{base:'flex', md:'flex', lg:'flex'}}
                 justifyContent={'space-between'}
                 position={'relative'}
                 top={'-280px'}
                >

                    <Box
                     w={'50px'}
                     h={'50px'}
                     borderRadius={'50%'}
                     bg={'#fff'}
                     display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     position={'relative'}
                     left={'-10'}
                    >
                        <Icon 
                          as={IoIosArrowBack} 
                          boxSize={6}
                          cursor={'pointer'}
                          onClick={handleDecrementIngSlide}
                        />

                    </Box>

                    <Box
                     w={'50px'}
                     h={'50px'}
                     borderRadius={'50%'}
                     bg={'#fff'}
                     display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     position={'relative'}
                     right={'-10'}
                    >
                        <Icon 
                          as={IoIosArrowForward} 
                          boxSize={6}
                          cursor={'pointer'}
                          onClick={handleIncrementImgSlide}
                          />

                    </Box>

                </Box>

            </Box>


          <Box
             w={'100%'}
             h={'10vh'}
             bg={'rgba(0,0,0,0.0)'}
             mt={'40px'}
             borderRadius={'8px'}
             display={'grid'}
             gridTemplateColumns={'repeat(4, 1fr)'}
             gap={2}
            >
               <Box
                 w={'100%'}
                 h={'100%'}
                 borderRadius={'6px'}
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
                 w={'100%'}
                 h={'100%'}
                 borderRadius={'6px'}
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
                 w={'100%'}
                 h={'100%'}
                 borderRadius={'6px'}
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
                 w={'100%'}
                 h={'100%'}
                 borderRadius={'6px'}
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
