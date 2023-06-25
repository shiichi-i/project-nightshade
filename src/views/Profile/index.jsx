import { Box, Text, Icon, Image, Divider } from "@chakra-ui/react";
import { FiCoffee, FiStar } from 'react-icons/fi';

import pdID from '../../assets/edit_PDID.png';
import SonicBanner from '../../assets/SONICbanner.png';

const Profile = () => {
    return(
        <Box m={{base:'0', md:'30px'}} w={{base:'full', md:'95vw'}} display="flex" justifyContent="center">
            <Box>
            <Box display="flex" flexDir={{base: 'column', md: 'row'}}>
                <Box w={{base: 'full', md: '250px'}} display="flex" justifyContent="center">
                    <Image src={pdID} h="200px" w="200px" borderRadius="20px" m="20px" />
                </Box>

                <Box display="flex" flexDir="column" mt={{base: '0', md: '20px'}}>
                    <Text as="b" fontSize="28px" my="10px" >Andrea Christela Adalem</Text>

                    {/** IF Senior Dev is TRUE */}
                    <Box display="flex" flexDir="row" my="10px">
                        <Icon as={FiCoffee} color="white" boxSize={4} />
                        <Text ml="3">Senior Developer</Text>
                    </Box>

                </Box>
            </Box>

            <Box display="flex" flexDir={{base: 'column-reverse', md: 'row'}} alignItems="center">

                <Box w="300px" h="full" my="30px">
                    <Text fontSize="18px" as="b">Achievements</Text>
                    <Divider border="1.5px solid" color="teal.200" w="90%"/>

                    {/** Achievements Map */}
                    <Box display="flex" flexDir="column" m="20px">

                        <Box display="flex" flexDir="row" m="20px">
                            <Icon as={FiStar} color="white" boxSize={4} mr="20px" />
                            <Text fontWeight="light">
                                UMAP MicroCredential Achiever, Thailand 2021
                            </Text>
                        </Box>


                        <Box display="flex" flexDir="row" m="20px">
                            <Icon as={FiStar} color="white" boxSize={4} mr="20px" />
                            <Text fontWeight="light">
                                Executive Secretary 2021-2022
                            </Text>
                        </Box>

                        <Box display="flex" flexDir="row" m="20px">
                            <Icon as={FiStar} color="white" boxSize={4} mr="20px" />
                            <Text fontWeight="light">
                                Secretary of Finance 2020-2021
                            </Text>
                        </Box>

                    </Box>
                    

                </Box>

                {/** BIO */}
                <Box m={{base: '0', md: '20px'}} mt={{base: '0', md:'-80px'}} border="1px solid white" borderRadius="20px" h={{base:'250px', md:'450px'}} w={{base:'full', md:'700px'}} bg="whiteAlpha.300">
                    <Box m={{base: '10px', md: '20px'}}>
                        {/** Image 
                         * 
                         * <Box bg="tomato" w="full" h={{base: '150px', md: '300px'}} />
                        */}
                        <Image src={SonicBanner} w="full" h={{base: '150px', md: '300px'}} />
                    </Box>

                    <Box m={{base: '10px', md: '20px'}}>
                        <Text>.:.*pink*cheese*:.:. : in the middle of developing something cool. stay tuned! 👀</Text>
                    </Box>
                </Box>

            </Box>
            </Box>
        </Box>
    );
};
export default Profile;