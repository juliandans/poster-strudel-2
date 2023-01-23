import Head from 'next/head'
import { Container, Text, Center, ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Poster Strüdel 2.0</title>
        <meta name="description" content="Poster Strüdel: Updated and Fresh!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Text fontSize="7xl" fontWeight="extrabold" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
          POSTER STRÜDEL 2.0
        </Text>
      </Center>
    </ChakraProvider>
  )
}
