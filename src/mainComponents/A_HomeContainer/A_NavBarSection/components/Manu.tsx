import {Box, Icon, List, ListItem, Text} from '@chakra-ui/react'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { MenuContext } from '../../../../assets/Context/menuContext'

export default function Manu() {

   const {display} = useContext(MenuContext)
   const {setDisplay} = useContext(MenuContext)

  

  return (
   
        <Box
          w="100%"
          h={{ base: '120vh', md: '120vh', lg: '100%', '2xl': '100%' }}
          position={{ base: 'absolute', md: 'absolute', lg: 'relative', '2xl': 'relative' }}
          top={{ base: '0px', md:'0px' }}
          left={{ base: (display ? '0px' : '-100%'), md: (display ? '0px' : '-100%'), lg:'0px' }}
          backgroundColor={{ base: 'rgba(0, 0, 0, 0.8)', md: 'rgba(0, 0, 0, 0.7)', lg: 'rgba(0, 0, 0, 0.0)' }}
          zIndex={{ base: '999', md: '999', lg: '0' }}
          transition="left 1s ease"
        >
          <Box
            w={'60%'}
            p={'10px 20px'}
            display={{base:'block', md:'block', lg:'none'}}
            bg={'#fff'}
          >
              <Icon as={FaTimes} boxSize={6} cursor={'pointer'} onClick={()=>{setDisplay(false)}}/>
          </Box>

            <List 
              w={{base:'60%', md:'60%', lg:'100%'}}
              h={{base:'114vh', md:'114vh', lg:'100%', '2xl':'100%'}}
              display={{md:'block', lg:'flex'}} 
              bg={{base:'#fff', md:'#fff'}}
            >

              <ListItem  
                p={{base:'10px 20px', md:'10px 20px', lg:'10px 10px 25px 10px'}} 
                textAlign={{md:'left', lg:'center'}}
                _hover={{borderBottom:'4px', borderColor:'hsl(26, 100%, 55%)', borderRadius:'4px'}}    
                >
                <Link to={'/collection'} ><Text fontWeight={{base:'800', md:'800', lg:'400'}} >Collections</Text></Link>
                </ListItem>

              <ListItem  
                p={{base:'10px 20px', md:'10px 20px', lg:'10px 10px 25px 10px'}} 
                textAlign={{md:'left', lg:'center'}}
                _hover={{borderBottom:'4px', borderColor:'hsl(26, 100%, 55%)', borderRadius:'4px'}}
              >
                <Link to={'/men'}><Text fontWeight={{base:'800', md:'800', lg:'400'}}>Men</Text></Link>
              </ListItem>

              <ListItem  
                p={{base:'10px 20px', md:'10px 20px', lg:'10px 10px 25px 10px'}} 
                textAlign={{md:'left', lg:'center'}}
                _hover={{borderBottom:'4px', borderColor:'hsl(26, 100%, 55%)', borderRadius:'4px'}}
              >
                <Link to={'/women'}><Text fontWeight={{base:'800', md:'800', lg:'400'}}>Women</Text></Link>
              </ListItem>

              <ListItem  
                p={{base:'10px 20px', md:'10px 20px', lg:'10px 10px 25px 10px'}} 
                textAlign={{md:'left', lg:'center'}}
                _hover={{borderBottom:'4px', borderColor:'hsl(26, 100%, 55%)', borderRadius:'4px'}}
              >
                <Link to={'/about'}><Text fontWeight={{base:'800', md:'800', lg:'400'}}>About</Text></Link>
              </ListItem>

              <ListItem  
                p={{base:'10px 20px', md:'10px 20px', lg:'10px 10px 25px 10px'}} 
                textAlign={{md:'left', lg:'center'}}
                _hover={{borderBottom:'4px', borderColor:'hsl(26, 100%, 55%)', borderRadius:'4px'}}
              >
                <Link to={'/contact'}><Text fontWeight={{base:'800', md:'800', lg:'400'}}>Contact</Text></Link> 
              </ListItem>

            </List>

     </Box>
   
  )
}
