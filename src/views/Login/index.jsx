import { Box, Text, SimpleGrid, GridItem, FormControl, FormLabel, Button, Input, Image, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import { useState } from 'react';
import pdLogo from '../../assets/logo_blk.png';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

        const nav = useNavigate();

        const toast = useToast();

        const [error, setError] = useState(false);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);

        const handleLogin = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast({
                    title: 'Logged in',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                nav("/admin");
            })
            .catch(() => {
                setError(true);
            })
        }

    return(
        <Box>
            <SimpleGrid columns={{base:'1',md:'2'}}>
                <GridItem>
                    <Box w="full" h="90vh" display="flex" justifyContent="center" alignItems="center">
                        <Box w={{base:'400px', md:'450px'}} h={{base:'500px', md:'500px'}} bg="whiteAlpha.200" border="solid 1px white" borderRadius="40px" boxShadow="dark-lg">
                            <Box w="inherit" h="inherit" zIndex="-1" pos="fixed" bgGradient="linear(to-tl, #bc1eac25 5%, #16142b20 50%)" borderRadius="40px"/>
                            <Box w="inherit" h="inherit" zIndex="-2" pos="fixed" bgGradient="radial(#22333770 20%, #16142b 85%)" borderRadius="40px"/>
                            
                            {/**FORM CONTENT */}
                            <Box m="20px">
                                <Text as="b" fontSize="35px" textColor="green.300">LOGIN</Text>
                                <Box m="20px" mt="70px">
                                    <FormControl>
                                        <SimpleGrid spacing={8}>
                                            <GridItem>
                                                <FormLabel textColor="white">Organization email</FormLabel>
                                                <Input isInvalid={error} textColor="white" type="email" placeholder="example@progden.dev" onChange={e=>setEmail(e.target.value)}/>
                                            </GridItem>

                                            <GridItem>
                                                <FormLabel textColor="white">Password</FormLabel>
                                                <InputGroup size='md'>
                                                    <Input
                                                    pr='4.5rem'
                                                    type={show ? 'text' : 'password'}
                                                    placeholder='Enter password'
                                                    textColor="white"
                                                    onChange={e=>setPassword(e.target.value)}
                                                    isInvalid={error}
                                                    />
                                                    <InputRightElement width='4.5rem'>
                                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                        { show ? 'Hide' : 'Show'}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </GridItem>
                                        </SimpleGrid>

                                        <Box position="relative">
                                            {error && <Box position="absolute" top="30px" display="flex" flexDir="column">
                                                <Text color="pink.500" as="b">Error: &nbsp; Incorrect login details</Text>
                                                <Text color="pink.500">For account recovery, please contact website superadmin</Text>
                                            </Box>}
                                            <Button position="absolute" type="submit" bg="midnight" _hover={{bg:'darkBlue'}} w="full" borderBottomRadius="0" borderTopRadius="40px" mt="140px"
                                            onClick={handleLogin}>
                                                S I G N &nbsp; I N
                                            </Button>
                                        </Box>
                                    </FormControl>

                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </GridItem>

                <GridItem>
                    <Box layerStyle="seafoam" w="full" h="100vh" display="flex" justifyContent="center" alignItems="center">
                        <Image src={pdLogo} w="80%" h="80%"/>
                    </Box>

                </GridItem>
            </SimpleGrid>
        </Box>
    );
};
export default Login;