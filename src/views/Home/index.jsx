import { 
    Box,
    Text,
    Image,
    Button,
 } from "@chakra-ui/react";
 import { motion } from 'framer-motion';

 //Images
import Banner from '../../assets/pd_banner.png';
import Graphic from '../../assets/graphic.png';
import Polygon from '../../assets/polygon.png';
import Star from '../../assets/star.png';
import Purple from '../../assets/divider.png';

const Home = () => {
    return(
        <Box display="flex" w="full" justifyContent="center" alignItems="center" flexDir="column" >
            
            <motion.div
            animate={{ opacity: [0,1], y: ['25px', '0px']}}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Box w="90vw" h="80vh" display="flex" flexDir={{base: 'column', md: 'row-reverse'}} mt="24px">
                <Box w={{base: '100%', md: '50%'}} h="full" position="relative">
                    {/** graphic */}
                    <Box h="full" display="flex" alignItems="center">

                        {/** Polygon */}
                        <Box position="absolute" left={{base: '40vw', md: '25vw'}}>
                            <motion.div
                            animate={{ rotate: [359, 0, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Image src={Polygon} w={{base: '200px', md: '25vw'}} />
                            </motion.div>
                        </Box>
                        

                        {/** Circle */}
                        <Box position="absolute" left={{base: '15vw', md: '5vw'}} bottom={{base: '8vh', md: '24vh'}}>
                            <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 8, repeat: Infinity }}>
                                <Box layerStyle="afton" borderRadius="50%" w={{base: '55px', md: '100px'}} h={{base: '55px', md: '100px'}}/>
                            </motion.div>
                        </Box>

                        {/** Star */}
                        <Box position="absolute" left={{base: '25vw', md: '10vw'}} bottom={{base: '5vh', md: '15vh'}}>
                            <motion.div
                            animate={{ rotate: [0, 359] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            >
                                <Image src={Star} w={{base: '55px', md: '100px'}}/>
                            </motion.div>
                        </Box>
                    
                        {/** PD graphic */}
                        <Box position="absolute" left={{base: '15vw', md: '5vw'}} >
                            <motion.div
                            animate = {{ marginTop: ['0px','-45px', '0px'] }}
                            transition = {{ duration: 3, repeat: Infinity }}
                            whileHover={{ transform: '-30px'}}>
                                <Image src={Graphic} w={{base: '300px', md: '45vw'}} />
                            </motion.div>
                        </Box>
                        
                    </Box>
                    
                </Box>
                <Box w={{base: '100%', md: '50%'}} h="full"
                display="flex" alignItems="center" justifyContent="center">
                    {/** text */}
                    <Box ml="5vw">
                        <Image src={Banner} w={{base: '95%', md: '80%'}} mb="12px" />
                        <Box w={{base: '95%', md: '80%'}} mb="24px">
                            <Text fontSize="20px">
                                The computer technology-focused college organization preparing students for industry practices in Design and Development
                            </Text>
                        </Box>
                        <Box layerStyle="bubblegum" w="200px" h="48px" borderRadius="40px">
                            <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.5 }}>
                                <Button bg="transparent" _hover={{bg:'#9348FB'}} w="200px" h="48px" borderRadius="40px">
                                    <Text fontSize="14px">BECOME A MEMBER</Text>
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </Box>
            </motion.div>


            {/** --------- below fold --------- */}

            <Image src={Purple} w="full" mt={{base: '-25px', md: '-170px'}} />
            <Box w="full" h="500px" bg="midnight">
                
            </Box>
            

        </Box>
    );
};
export default Home;