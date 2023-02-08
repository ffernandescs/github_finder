import { Userprops } from "../types/user";

import { MdLocationPin } from 'react-icons/md'

import { Link } from 'react-router-dom'
import classes from './User.module.css'
import { Box, Flex, Img, Text } from "@chakra-ui/react";

export const User = ({
    login, 
    avatar_url, 
    followers, 
    following, 
    location
    }: Userprops) => {
    return (
        <Box 
            bgColor='blue.900' 
            w='100vh' 
            borderRadius='15' 
            padding='8' 
            display='flex' 
            flexDirection='column' 
            alignItems='center' 
            justifyContent='center'
        >
            <Img 
                borderRadius='50%' 
                border='4px solid #644aff'
                w='140px'
                h='140px'
                src={avatar_url} 
                alt={login} 
            />
            <Text>{login}</Text>
            {location && (
                <Text 
                    display='flex'
                    alignItems='center'
                    gap='0.4rem'
                >
                  <MdLocationPin />
                  <Text
                    color='blue.500'
                    fontWeight='bold'
                  >{location}
                  </Text>
                </Text>
            )}
            <Flex
                margin='2'
            >
                <Box
                    padding='0 1rem'
                    display='flex'
                    flexDirection='column'
                    gap='0.4rem'
                >
                    <Text>Seguidores</Text>
                    <Text  
                        bg='#4ed8c7'
                        padding='0.2rem 0.4rem'
                        borderRadius='3px'
                    >{followers}</Text>
                </Box>
                <Box
                    padding='0 1rem'
                    display='flex'
                    flexDirection='column'
                    gap='0.4rem'
                >
                    <Text>Seguindo</Text>
                    <Text
                        bg='#4ed8c7'
                        padding='0.2rem 0.4rem'
                        borderRadius='3px'
                    >{following}</Text>
                </Box>
            </Flex>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>

        </Box>
    )
}