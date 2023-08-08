import { 
    Box,
    Text,
    Image,
    Button,
    Heading,
    SimpleGrid,
    List,
    UnorderedList,
    ListItem
 } from "@chakra-ui/react";
 import { motion } from 'framer-motion';
 import { FiBriefcase, FiUsers, FiCpu } from 'react-icons/fi'



 //Images
import Banner from '../../assets/pd_banner.png';
import Graphic from '../../assets/graphic.png';
import Polygon from '../../assets/polygon.png';
import Star from '../../assets/star.png';
import Star2 from '../../assets/Star 2.png';
import Purple from '../../assets/divider.png';
import HeadPurple from '../../assets/Vector 15.png';
import SeaCurve from '../../assets/Vector 16.png';
import BottomCurve from '../../assets/Vector 17.png';
import Hiring from '../../assets/hiring.png';

import meID from '../../assets/edit_PDID.png';
import Project from '../../assets/proj.png';

import Marketing from "./Marketing";
import { useNavigate } from "react-router-dom";

const featured =[
    {
        memberImg:`${meID}`,
        member: 'Andrea Adalem',
        memberDesc: 'Hi Im Andrea, everyones ate schi <3 mwamwa chupchup',
        projectImg: `${Project}`,
        projectDesc: 'A software for learning robotics using virtual environments',
        projectLink: 'https://pebbles-robotics.web.app/',
    }
]


const Home = () => {

    const nav = useNavigate();

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
                                <Button bgGradient="linear(to-l,rgb(97,233,216),rgb(146,72,251))" _hover={{bg:'transparet'}} w="200px" h="48px" borderRadius="40px" onClick={()=>nav("/join")}>
                                    <Text fontSize="14px">BECOME A MEMBER</Text>
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </Box>
            </motion.div>


            {/** --------- below fold --------- */}


            {featured.map((feat) => (
                <Box key={feat.member} w="full">
            <Image src={Purple} w="full" mt={{base: '-25px', md: '-170px'}} />
            <Box w="full" bg="midnight" display="flex" alignItems='center' justifyContent='center'>

                <Box w="90vw" display="flex" flexDir={{base: 'column', md: 'row'}} bg='midnight'>

                    <Box w={{base: '100%',md:'50%'}} my="20px"
                    display="flex" alignItems="center" justifyContent="center">

                        
                        <Box position="relative" h="full" display="flex" alignItems="center" justifyContent="center" m="8">
                            <Box position="absolute" top={{base: '-30px', lg: '-30px'}} left={{base: '-30px', lg: '-30px'}} zIndex={1}>
                                <motion.div
                                animate={{ rotate: [0, 359] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                >
                                    <Image src={Star2} w={{base: '80px', lg: '100px'}}  />
                                </motion.div>
                            </Box>
                            <Box position="absolute" bottom={{base: '-30px', lg: '-30px'}} right={{base: '-30px', lg: '-30px'}} zIndex={1}>
                                <motion.div
                                animate={{ rotate: [0, 359] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                >
                                    <Image src={Star} w={{base: '80px', lg: '100px'}} />
                                </motion.div>
                            </Box>
                            <Image
                            src={feat.memberImg}
                            w={{base: '250px', lg: '350px'}} 
                            h={{base: '250px', lg: '350px'}} 
                            borderRadius="40px" zIndex={2} />
  
                        </Box>
                    </Box>
                <Box w={{base: '100%',md:'50%'}}
                display="flex" alignItems="center" justifyContent="center">

                    <Box  display={{base: 'flex'}} flexDirection={{base:'column',}} alignItems={{base:'center',md:'flex-start'}}>
                        <Heading  layerStyle="seafoam" bgClip="text" pb="15px">MEMBER OF THE MONTH</Heading>
                        <Heading mb='20px' size="lg" textColor="darkBlue">{feat.member}</Heading>
                            <Box w="95%">
                                <Text fontSize="20px" textColor="darkBlue" mb='20px'>
                                    {feat.memberDesc}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Image src={HeadPurple} w="full" />
            <Box display="flex" justifyContent="center" alignItems="center">
            <Box w="80vw" display="flex" flexDir={{base: 'column', md: 'row-reverse'}}  pb="120px" mt="-2vw" justifyContent="center" alignItems="center" >

                <Box w={{base: '100%',md:'50%'}}
                    display="flex" alignItems="center" justifyContent="center"  position="relative" >

                        <Image
                        src={feat.projectImg}
                        w={{base: '250px', lg: '350px'}} 
                        h={{base: '250px', lg: '350px'}} 
                        borderRadius="40px" m="8"/>   
                </Box>

                <Box w={{base: '100%',md:'50%'}}
                display="flex" alignItems="baseline" justifyContent="center"  position="relative" >

                    <Box color="black"  display={{base: 'flex'}} flexDirection={{base:'column',}} alignItems={{base:'center',md:'flex-start'}}>
                        <Heading size="xl" color="white" pb="20px">FEATURED PROJECT</Heading>
                        <Box>
                        <Text fontSize="20px" color="white" mb='20px'>
                            {feat.projectDesc}
                        </Text>
                    </Box>
                    <Box w="200px" h="48px" borderRadius="40px">
                         <motion.div
                        whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}>
                                 <a
                                href={feat.projectLink}
                                target="_blank"
                                rel="noreferrer"
                                >
                            <Button bg="secondary" _hover={{ layerStyle: 'seafoam'}} w="200px" h="48px" borderRadius="40px">
                                <Text fontSize="14px" color="darkBlue" >VIEW PROJECT</Text>
                            </Button>
                             </a>
                        </motion.div>
                    </Box>
                </Box>
            </Box>
            </Box>
            </Box>
            </Box>))}

            

            {/** RECRUITMENT AREA */}
            <Box mt="-12vw" w="full">
                <Image w="100%" src={SeaCurve} />
                <Box w="100%" display="flex" flexDir={{base: 'column', md: 'row'}} justifyContent="center" alignItems="center" bgGradient="linear(to-b,  #5ae399, #12c6b0)">
                    <Box my={{base: '2', md: '100px'}} mt="100px" mr="2" ml="12" w={{base:'100%', md:'50%'}}>
                        <Box display="flex" flexDir="column"  bg="darkBlue" borderRadius="35px" justifyContent="center" alignItems="center">
                            <Image src={Hiring} borderRadius="35px" w="80%" m="4" />
                            <Heading color="secondary" as="b" size="lg" m="4">WORK WITH US!</Heading>
                        </Box>
                    </Box>
                    <Box my={{base: '2', md: '100px'}} mb="100px" ml="2" mr="12" w={{base:'100%', md:'50%'}}>
                        <Box display="flex" flexDir="column"  bg="darkBlue" borderRadius="35px" justifyContent="center" alignItems="center">
                           <Box m="8">
                            <Heading size="md" layerStyle="bubblegum" bgClip="text">WE ARE LOOKING FOR NEW MEMBERS!</Heading>
                            <Text m="4">
                                All Red Hawks are welcome to register!
                            </Text>
                            <Text m="2">
                                We are actively searching for new members especially:
                            </Text>
                            <List>
                                <UnorderedList textColor="secondary">
                                    <ListItem>
                                        <Text>
                                            CISCO Networking Competitors
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Multimedia Designers
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Videographers
                                        </Text>
                                    </ListItem>
                                    <ListItem>
                                        <Text>
                                            Unity/Godot Developers
                                        </Text>
                                    </ListItem>
                                </UnorderedList>
                            </List>
                            <Box m="4" borderRadius="20px" layerStyle="seafoam" w="150px">
                                <Button
                                w="150px"
                                borderRadius="20px"
                                bg="transparent"
                                textColor="darkBlue"
                                boxShadow="lg"
                                onClick={()=>{nav("/join"); window.scrollTo(0,0)}}
                                >
                                Sign Up &gt;
                                </Button>
                            </Box>
                           </Box>
                        </Box>
                    </Box>
                </Box>
                <Image w="100%" src={BottomCurve} />
            </Box>


            {/*Marketing */}
            <Box display="flex" flexDir="column" mb="8" alignItems="center">
                <Box display="flex" alignItems='center' justifyContent='center'>
                    <SimpleGrid columns={{base:1,md:3}} spacing={{base: '20px', lg: '48px'}}>
                        <Marketing 
                        icon={FiBriefcase}
                        heading='GET INDUSTRY EXPERIENCE'
                        text='Learn how professionals in the industry work and prepare 
                        yourself as Programmers’ Den operates under industry standards'/>
                        <Marketing
                        icon={FiUsers}
                        heading='COLLABORATE WITH SENIOR PROGRAMMERS'
                        text='Get trained by your mentors and learn to 
                        manage projects with otherkilled members'/>
                        <Marketing
                        icon={FiCpu}
                        heading='USE AI TECHNOLOGY'
                        text='We see AI as a tool to improve and innovate. 
                        Learn how to use modern technologies like AI to become a better programmer'/>
                        
                        </SimpleGrid>
                </Box>
                <Box m={8} mb="24" w="full"  display="flex" justifyContent={{base: 'center', md: 'flex-end'}}>
                    <Box w={{base:'200px',lg:"400px"}}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.0 }}>
                                
                                <Button bg="midnight" _hover={{ layerStyle: 'afton'}} w={{base:'200px',lg:"400px"}} h={{base:'48px',lg:"60px"}} borderRadius="40px"
                                onClick={()=>{nav("/about"); window.scrollTo(0,0);}}>
                                    <Text pt={{base:'5px',lg:'8px'}} fontSize={{base:'14px',lg:'25px'}}>MORE ABOUT US &gt;</Text>
                                </Button>
                            </motion.div>
                    </Box>
                </Box>
                </Box>

        </Box>
    );
};
export default Home;
