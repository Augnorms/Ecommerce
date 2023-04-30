import {Box} from '@chakra-ui/react'
import Images from './components/Images'
import Description from './components/Description'

export default function Body() {
  return (
    <Box
      w={'100%'}
      p={{base:'0px', md:'0px', lg:'50px', '2xl':'50px'}}
      mt={'10px'}
      display={'grid'}
      gridTemplateColumns={{base:'1fr', md:'1fr', lg:'repeat(2, 2fr)', '2xl':'repeat(2, 2fr)'}}
    >
        <Images />

        <Description />
        
    </Box>
  )
}
