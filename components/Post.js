// import Image from 'next/image'
import { Box, Badge, Image } from '@chakra-ui/react'
const numeral = require('numeral');

export default function Post(props) {
  return (
    <Box w="150%">
      <Box maxW="sm" borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={props.image} alt={props.title}  />

      <Box p='6'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
        >
          {props.title}
        </Box>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {numeral(props.upvoteRatio).format('0%')}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {props.upvotes} upvotes
          </Box>

        </Box>
        </Box>
      </Box>
    </Box>
  )
}