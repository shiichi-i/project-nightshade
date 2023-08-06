import { 
    Box,
    Text,
    Image,
    Button,
    Heading,
    SimpleGrid,
 } from "@chakra-ui/react";
 import { motion } from 'framer-motion';

 //Images
import Banner from '../../assets/pd_banner.png';
import Graphic from '../../assets/graphic.png';
import Polygon from '../../assets/polygon.png';
import Star from '../../assets/star.png';
import Star2 from '../../assets/Star 2.png';
import Purple from '../../assets/divider.png';
import HeadPurple from '../../assets/Vector 15.png';
import Rectangle from '../../assets/Rectangle 56.png';
import Marketing from './Marketing';


const Home = () => {
    return(
        <Box display="flex" w="full" justifyContent="center" alignItems="center" flexDir="column" >
            
            <motion.div
            animate={{ opacity: [0,1], y: ['25px', '0px']}}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Box w="90vw" h="80vh" display="flex" flexDir={{base: 'column', md: 'row-reverse'}} mt="24px">
                <Box w={{base: '100%', md: '50%'}} h="full" position="relative"  >
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
                display="flex" alignItems="center" justifyContent="center" >
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
            <Box w="full" h="500px" bg="midnight" display="flex" alignItems='center' justifyContent='center'>
                {/* MEMBER OF THE MONTH IMAGE PLACEHOLDER*/}
                <Box w="90vw" h="500px" display="flex" flexDir={{base: 'column', md: 'row'}} bg='midnight'>
                    {/*PARENT BOX OF THE SHAPES DIV*/}
                    <Box ml={{md:'25px'}} w={{base: '100%',md:'50%'}} h='full'
                    display="flex" alignItems="center" justifyContent="center"  position="relative" minHeight='250px'>
                        {/*SHAPES FORMATTING AND POSITIONING*/}
                        
                        <Box position="absolute" h="full" display="flex" alignItems="center" justifyContent="center" mr={0}>
                            <Box position="absolute" top={{base:'-5px',sm: '-30px', md: '60px',lg:'-20px'}} left={{base:'-50px', md: '-50px',lg:'-60px'}}  zIndex={200}>
                                <Image src={Star2} w={{base: '80px',sm:'90px', lg: '120px'}} />
                            </Box>
                            <Box mr='0' position="absolute" bottom={{base:'-5px',sm:'-30px', md: '70px',lg:'-15px'}} right={{base: '-50px', md: '-50px',lg:"-60px"}} zIndex={200}>
                                <Image src={Star} w={{base: '80px',sm:'90px', lg: '120px'}} />
                            </Box>
                            <Box  zIndex={201}>
                                <Image src={Rectangle} w={{base:'200px',sm:'250px', md:"350px",lg:"420px"}}/>
                                </Box>      
                        </Box>
                    </Box>
                {/*PARENT BOX OF THE DETAILS DIV*/}
                <Box w={{base: '100%',md:'50%'}} h="full"
                display="flex" alignItems="flex-start" justifyContent="center"  position="relative">
                    {/*DETAILS OF THE MEMBER */}
                    <Box ml={{md:'50px'}} color="black"  display={{base: 'flex'}} flexDirection={{base:'column',}} alignItems={{base:'center',md:'flex-start'}} mt={{base:'15px',sm:'30px',md:'100px'}}>
                        <Heading fontSize={{base:'25px',md:'30px', lg:'35px'}} color="rgb(18,198,176)"pb="15px" whiteSpace='nowrap'>MEMBER OF THE MONTH</Heading>
                        <Heading fontSize={{base:"25px",md:'30px', lg:'35px'}}pb={{base:'10px',md:"10px"}} color="rgb(22,20,43)">Juan Dela Cruz</Heading>
                            <Box w={{base:"95%",md:"95%"}}>
                                <Text fontSize={{base:"14px"}} color="rgb(22,20,43)" mb='20px'>
                                    Hi I’m Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/*PUTTING THE CURVED DESIGN IN THE PAGE*/}
            <Image src={HeadPurple} w="full" mt={{base: '-25px', md: '-10px'}} />
            <Box w="90vw" h="500px" display="flex" flexDir={{base: 'column', md: 'row-reverse'}} mb={{base:'0px',md:'-100px'}}>
                {/*PLACEHOLDER FOR THE PROJECT SHOWCASE*/}
                <Box w={{base: '100%',md:'50%'}} h="full"
                    display="flex" alignItems="center" justifyContent="center"  position="relative" >
                        <Box position="absolute" h="full" display="flex" alignItems="baseline" justifyContent="center" mt={{base:'0px', md:'-140px',lg:'-200px'}}>
                            <Box>
                                <Image src={Rectangle} w={{base:'200px',sm:'250px', md:"350px",lg:"420px"}}/>
                            </Box>      
                        </Box>
                </Box>
                {/*PARENT BOX OF THE PROJECT DETAILS DIV*/}
                <Box w={{base: '100%',md:'50%'}} h="full"
                display="flex" alignItems="baseline" justifyContent="center"  position="relative" >
                    {/*PROJECT DETAILs*/}
                    <Box ml={{sm:"-10px"}} color="black"  display={{base: 'flex'}} flexDirection={{base:'column',}} alignItems={{base:'center',md:'flex-start'}} mt={{base:'-50px',sm:'10px'}}>
                        <Heading fontSize={{base:'25px',md:'35px',lg:'45px'}} color="#FFFFFF"pb="20px" whiteSpace={{base:'nowrap'}}>FEATURED PROJECT</Heading>
                        <Box w={{base:"95%",md:"95%"}}>
                        <Text fontSize={{base:"14px",sm:'15px',md:"17px"}} color="#FFFFFF" mb='20px'>
                            I’m Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Box>
                    {/*BUTTON FOR VIEW THE PROJECT*/}
                    <Box layerStyle="bubblegum" w="200px" h="48px" borderRadius="40px">
                         <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.5 }}>
                            <Button bg="rgb(18,198,176)" _hover={{bg:'transparet'}} w="200px" h="48px" borderRadius="40px">
                                <Text fontSize="14px">VIEW PROJECT</Text>
                             </Button>
                        </motion.div>
                    </Box>
                </Box>
            </Box>
            </Box>

            {/*Marketing */}
            <Box w="90vw" h={{base: 'full',md:"120vh"}} display="flex" flexDirection={{base: 'column'}}alignItems={{base:'center', lg:'center'}}>
                <Box w="90vw" h={{base:'full',lg:"500px"}} display="flex" alignItems='center' justifyContent='center' position='relative'mb={{base:'10px', lg:'-70px'}}>
                    <SimpleGrid columns={{base:1,lg:3}} spacing={'20px'}>
                        <Marketing/>
                        <Marketing/>
                        <Marketing/>
                    </SimpleGrid>
                </Box>
                <Box alignItems={{base:'center', md:'flex-end'}} layerStyle="bubblegum" w={{base:'200px',lg:"400px"}} h={{base:'48px',lg:"60px"}} borderRadius="40px" mt={{base:'10px', md:'-150px',lg:'0px'}} ml={{base:'12px', lg:'480px'}} >
                         <motion.div
                        whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.5 }}>
                            <Button bg="transparent" _hover={{bg:'#9348FB'}} w={{base:'200px',lg:"400px"}} h={{base:'48px',lg:"60px"}} borderRadius="40px">
                                <Text pt={{base:'5px',lg:'8px'}} fontSize={{base:'14px',lg:'25px'}}>MORE ABOUT US &gt;</Text>
                             </Button>
                        </motion.div>
                    </Box>
            </Box>
            <Box w="90vw" h="100px" display="flex" flexDir={{base: 'column', md: 'row-reverse'}} mb={{base:'0px',md:'-100px'}}>
            </Box>
        </Box>
    );
};
export default Home;
