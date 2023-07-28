import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Trophy from '../../assets/about-trophy.png';

const About = () => {
    return(
        <Box>
            <Box w="full" display="flex" flexDir={{base: 'column', md: 'row'}}>
                <Box w={{base: '100%', md: '50%'}} display="flex" justifyContent="center" alignItems="center">
                    <Image src={Trophy} w="80%" maxW="500px" mt="24px"/>
                </Box>
                <Box w={{base: '100%', md: '50%'}} display="flex" justifyContent="flex-start" alignItems="center">
                    <Box m="24px">
                        <Box display="flex" flexDir="row">
                            <Heading fontSize={{base: '3xl', md: '4xl', lg: '6xl'}} bgGradient="linear(to-tl, #12c6b0, #5ae399)" bgClip="text">ONLY THE</Heading> 
                            <Heading fontSize={{base: '3xl', md: '4xl', lg: '6xl'}} bgGradient="linear(to-tl, #BA55E3, #9747FF)" bgClip="text">&nbsp; BEST</Heading>
                        </Box>
                        <Heading fontSize={{base: '3xl', lg: '6xl'}} bgGradient="linear(to-tl, #12c6b0, #5ae399)" bgClip="text">AMONG THE REST</Heading>
                        <Text as="b">Elite Programmers from BSIT, BSIS and BSCS </Text>

                        <Box w={{base: '90%', lg: '500px'}} mt="16px">
                        <Text>
                        We are the Programmers’ Den, an organization of Tarlac State University - College of Computer Studies that was founded in 2013. The organization focuses on design and programming-related activities, competitions, and development projects. Our goal is to enhance its member capabilities to learn, adapt, and perform in desired skillsets.
                        </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default About;