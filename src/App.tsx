import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function App() {
  return ( 
    <Box w='100%' display='flex' flexDirection='column' alignItems='center'>
      <Center w='100%' bg='blue.900' padding='10' marginBottom='5'>
        <Text color='white' fontSize='4xl'>GitHub Finder</Text>
      </Center>
      <Outlet />
    </Box>
  )
}

export default App
