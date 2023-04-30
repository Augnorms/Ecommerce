import {Box} from '@chakra-ui/react'
import NavBar from '../A_NavBarSection/NavBar'
import Body from '../B_MainBodySection/Body'
import ModalPopup from '../B_MainBodySection/components/ModalPopup'


export default function Home() {
 

  return (
    <Box
     w={{base:'100%', md:'100%', lg:'80%'}}
     m={{lg:'0 auto'}}
    >
        <NavBar /> 
        <Body />
        <ModalPopup />

    </Box>
  )
}
