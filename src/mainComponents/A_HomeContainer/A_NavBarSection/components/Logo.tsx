import {Box, Icon, Image} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useContext} from 'react'
import { MenuContext } from '../../../../assets/Context/menuContext'

export default function Logo() {

  const {setDisplay} = useContext(MenuContext)



  return (
    <Box p={'10px'} display={'flex'}>

          <Icon 
            as={GiHamburgerMenu}  
            boxSize={6} mr={'10px'}
            display={{md:'block', lg:'none'}}
            cursor={'pointer'}
            onClick={()=>{setDisplay(true)}}
            /> 

          <Image 
            w={{base:'120px', md:'180px', lg:'150px'}}
            h={{base:'20px', md:'20px',  lg:'20px'}}
            src={'/images/logo.svg'} 
            alt={'logo'}/>

       

    </Box>
  )
}
