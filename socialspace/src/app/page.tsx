'use client'
import { createContext } from 'react'

//import "./globals.css";
import { Center, AbsoluteCenter, Text, HStack, VStack, Box, Heading, Link} from '@chakra-ui/react'
import "./home_page.css";

export default function Example() {
  //const Context = createContext()
  return (
    <VStack bgColor="#3073B5" paddingTop="50vh" color='white'>
      <Box>
        <Heading fontFamily='Jua' fontSize='48'>Kingdom-System | <Link fontFamily='Jua' href='/authenticate' fontSize='26' textDecoration={'none'} color='white'> Sign-in </Link></Heading>
        <Text color="#CCF6FF">Fast, open-source application for lesson management</Text>
      </Box>
    </VStack>
    
  )
}