import { Box, Text, SimpleGrid, GridItem, FormControl, FormLabel, Button, Input, FormHelperText, FormErrorMessage, Image } from "@chakra-ui/react";
import pdLogo from '../../assets/logo_blk.png';

const Login = () => {
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
                                <Text as="b" fontSize="35px" textColor="green.300">MEMBER LOGIN</Text>
                                <Box m="20px" mt="70px">
                                    <FormControl>
                                        <SimpleGrid spacing={8}>
                                            <GridItem>
                                                <FormLabel textColor="white">Organization email</FormLabel>
                                                <Input textColor="white" type='email' />
                                            </GridItem>
                                        
                                            <GridItem>
                                                <FormLabel textColor="white">Password</FormLabel>
                                                <Input textColor="white" type='password' />
                                            </GridItem>
                                        </SimpleGrid>

                                            <Button type="submit" bg="midnight" _hover={{bg:'darkBlue'}} w="full" borderBottomRadius="0" borderTopRadius="40px" mt="140px">
                                                S I G N &nbsp; I N
                                            </Button>
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