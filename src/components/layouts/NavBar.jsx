import React, { useState } from 'react';
import { Box, Image, Button, Text, Divider, Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from '@chakra-ui/react';
import { FiMenu, FiChevronDown } from "react-icons/fi";

import LogoBLK from "../../assets/logo_blk.png"
import { useEffect } from 'react';

import { auth } from '../../firebase-config';
import { checkAuth } from '../../views/Login/user';

import { db } from '../../firebase-config';
import { collection, getDoc, doc, query, where, onSnapshot } from 'firebase/firestore';

const NavBar = ({ navigationLinks = [] }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    checkAuth();

    /** Setting USER information */
    const [logUser, setLogUser] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('storageId'));
            if (items) {
                setLogUser(items);
                const getId = async () => { 
                    const u = await getDoc(doc(db, "accounts", items));
                    setUserName(u.data().fName);
                }
                getId();
            }
    }, []);

    const handleLogout= (e) => {
        auth.signOut();
        setShowMenu(false);
        navigate("/");
        window.location.reload();
    }

    const [showMenu, setShowMenu] = useState(false);

    return(
        <Box layerStyle="seafoam" w="full" h="60px" display="flex" flexDir="row">
            
            <Image src={LogoBLK} h="50px" pl="30px" pt="10px" pr="30px"/>

            <Box display={{base: 'none', md: 'flex'}} flexDir="row">
            {navigationLinks.map((link) => (
                <Box key={link.label}>
                    <Button borderRadius="0" bg="whiteAlpha.100" h="full" w="100px" _hover={{ bg: 'blackAlpha.300'}} onClick={() => navigate(link.path)}>
                        <Text textColor="galaxy">{link.label}</Text>
                    </Button>
                    <Divider orientation="vertical" bg="#16142b" w="1px" mt="-60px"/>
                </Box>
            ))}
            </Box>

            {/**<Button onClick={handleLogout}>
                Sign Out
            </Button>*/}

            {logUser? 

                /** IF logged IN */
                <Box position="relative" pt="10px" w="full" display={{base: 'none', md: 'block'}}>
                    <Button onClick={() => setShowMenu(!showMenu)} position="absolute" right="10" bg="blackAlpha.600" _hover={{ bg: 'secondary'}} display={{base: 'none', md: 'block'}}>
                        <Box display="flex" flexDir="row">
                            <Text>{userName}</Text>
                            <Icon as={FiChevronDown} textColor="white" ml="5px"/>
                        </Box>
                    </Button>
                </Box>
            : 
                /** IF logged OUT */
                <Box position="relative" pt="10px" w="full" display={{base: 'none', md: 'block'}}>
                    <Button position="absolute" right="10" bg="blackAlpha.600" _hover={{ bg: 'secondary'}} display={{base: 'none', md: 'block'}} onClick={() => navigate("/login")}>
                        <Text>Log in</Text>
                    </Button>
                </Box>
            }


            <Box position="relative" pt="10px" w="full" display={{base: 'block', md: 'none'}}>
                <Button position="absolute" right="10" bg="darkBlue" _hover={{ bg: 'secondary'}} display={{base: 'block', md: 'none'}} onClick={onOpen} ref={btnRef}>
                    <Icon as={FiMenu} color="white" mt="1" boxSize={6} />
                </Button>
            </Box>

            {showMenu?
                <Box w="250px" bg="green.300" position="absolute" right="0" top="60px"
                borderBottomRadius="20px">
                    <Box display="flex" flexDir="column" m="2">
                        <Button borderRadius="40px" bg="whiteAlpha.300">My Profile</Button>
                        <Button mt="2" borderRadius="40px" bg="pink.700" textColor="white"
                        onClick={handleLogout}>
                            Sign Out
                        </Button>
                    </Box>
                </Box>
            :
             ''
            }

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
                        <Box key={link.label}>
                        <Button borderRadius="0" bg="whiteAlpha.100" w="full" h="75px" _hover={{ bg: 'blackAlpha.300'}} onClick={() => navigate(link.path)}>
                            <Text fontSize="22px" textColor="galaxy">{link.label}</Text>
                        </Button>
                        <Divider orientation="horizontal" bg="#16142b" w="1px"/>
                        </Box>
                    ))}
                    </Box>
                    
                    {logUser?

                        /** IF logged IN */
                        <Box w="full" align="middle" mt="10vh">
                            <Button borderRadius="20px" h="50px" w="50%" bg="darkBlue" _hover={{bg:'secondary'}}><Text fontSize="20px" onClick={() => navigate("/login")}>Name Here</Text></Button>
                        </Box>
                    :
                        /** IF logged OUT */
                        <Box w="full" align="middle" mt="10vh">
                            <Button borderRadius="20px" h="50px" w="50%" bg="darkBlue" _hover={{bg:'secondary'}}><Text fontSize="20px" onClick={() => navigate("/login")}>Log In</Text></Button>
                        </Box>
                    }
                
                </Box>
            </DrawerContent>

            </Drawer>


        </Box>
    );
}
export default NavBar;