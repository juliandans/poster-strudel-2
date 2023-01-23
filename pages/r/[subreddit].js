import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider, Text, Container } from '@chakra-ui/react'
import Posts from '../../components/Posts'

export default function Subreddit() {
  const {subreddit} = useRouter().query
    return (
      <>
        <Head>
          <title>r/{subreddit}</title>
        </Head>
        <ChakraProvider>
          <Container>
            <br />
            <Text 
              textAlign="center" 
              bgClip="text" 
              bgGradient="linear(to-l, #7928CA, #FF0080)" 
              fontSize="5xl" 
              fontWeight="extrabold"
            >
              r/{subreddit}
            </Text>
            </Container>
            <Container maxW="150%">
              <Posts subreddit={subreddit} count={30} />
            </Container>
        </ChakraProvider>
      </>
  );
}