import React from 'react';
import { Box, Image, Button, Text, Divider, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";

import LogoBLK from "../../assets/logo_blk.png"

const NavBar = ({ navigationLinks = [] }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();


    return(
        <Box layerStyle="seafoam" w="full" h="60px" display="flex" flexDir="row">
            
            <Image src={LogoBLK} h="50px" pl="30px" pt="10px" pr="30px"/>

            <Box display={{base: 'none', md: 'flex'}} flexDir="row">
            {navigationLinks.map((link) => (
                <>
                <Button key={link.label} borderRadius="0" bg="whiteAlpha.100" h="full" w="100px" _hover={{ bg: 'blackAlpha.300'}} onClick={() => navigate(link.path)}>
                    <Text textColor="galaxy">{link.label}</Text>
                </Button>
                <Divider orientation="vertical" bg="#16142b" w="1px"/>
                </>
            ))}
            </Box>

            <Box position="relative" pt="10px" w="full" display={{base: 'none', md: 'block'}}>
                <Button position="absolute" right="10" bg="blackAlpha.600" _hover={{ bg: 'secondary'}} display={{base: 'none', md: 'block'}}>
                    <Text>Log in</Text>
                </Button>
            </Box>

            <Box position="relative" pt="10px" w="full" display={{base: 'block', md: 'none'}}>
                <Button position="absolute" right="10" bg="darkBlue" _hover={{ bg: 'secondary'}} display={{base: 'block', md: 'none'}} onClick={onOpen} ref={btnRef}>
                    <Icon as={FiMenu} color="white" mt="1" boxSize={6} />
                </Button>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent layerStyle="seafoam" onClick={onClose}>
                <Box display="flex" flexDir="column">

                    <Box mt="20vh">
                    {navigationLinks.map((link) => (
                        <>
                        <Button key={link.label} borderRadius="0" bg="whiteAlpha.100" w="full" h="75px" _hover={{ bg: 'blackAlpha.300'}} onClick={() => navigate(link.path)}>
                            <Text fontSize="22px" textColor="galaxy">{link.label}</Text>
                        </Button>
                        <Divider orientation="horizontal" bg="#16142b" w="1px"/>
                        </>
                    ))}
                    </Box>

                    <Box w="full" align="middle" mt="10vh">
                        <Button borderRadius="20px" h="50px" w="50%" bg="darkBlue" _hover={{bg:'secondary'}}><Text fontSize="20px">Log In</Text></Button>
                    </Box>
                
                </Box>
            </DrawerContent>

            </Drawer>


        </Box>
    );
}
export default NavBar;