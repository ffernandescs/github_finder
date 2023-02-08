type SearchProps = {
    loadUser: (userName: string) => Promise<void>
    }

import { useState, KeyboardEvent } from "react";

import { Box, Button, ChakraProvider, Flex, Input, Text } from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs";

export const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName);
        }
    }

    return (
        <Box bgColor='blue.900' w='100vh' borderRadius='15' padding='8' marginBottom='5'>
            <Text fontSize='3xl'>Busque por um usuário</Text>
            <Text fontSize='md' margin='5'>Conheça seus melhores repositórios</Text>
            <Flex>
                <Input  
                    type="text" 
                    placeholder="Digite o nome do usuário" 
                    onChange={(e) => setUserName(e.target.value)}
                    variant='outline'
                    onKeyDown={handleKeyDown}
                    margin='2'
                    bg='white'
                    color='black'
                />
                <Button 
                    onClick={() => loadUser(userName)}
                    margin='2'
                    colorScheme='facebook'
                    border='1px solid white'
                >
                    <BsSearch />
                </Button>
            </Flex>
        </Box>
        
    )
}