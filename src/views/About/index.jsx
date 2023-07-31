import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';

import Trophy from "../../assets/about-trophy.png";
import IconFirebase from "../../assets/icon-firebase.png";
import IconReact from "../../assets/icon-react.png";
import IconPython from "../../assets/icon-python.png";
import IconGithub from "../../assets/icon-github.png";
import IconChatgpt from "../../assets/icon-chatgpt.png";

import ProgdenMembers from "../../assets/progden-members.png";
import Logo from "../../assets/logo_green.png";
import OldLogos from "../../assets/old_logos.png";

const Icons = [
  {
    label: "Firebase",
    src: IconFirebase,
  },
  {
    label: "React",
    src: IconReact,
  },
  {
    label: "Python",
    src: IconPython,
  },
  {
    label: "Github",
    src: IconGithub,
  },
  {
    label: "Chatgpt",
    src: IconChatgpt,
  },
];

const About = () => {
  return (
    <Box>
        <motion.div
        animate={{
            opacity: [0,1],
            x: [20, 1]
        }}
        transition={{ duration: 0.8 }}>
      <Box w="full" display="flex" flexDir={{ base: "column", md: "row" }}>
        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Trophy} w="80%" maxW="500px" mt="24px" />
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box m="24px">
            <Box display="flex" flexDir="row">
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                bgGradient="linear(to-tl, #12c6b0, #5ae399)"
                bgClip="text"
              >
                ONLY THE
              </Heading>
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                bgGradient="linear(to-tl, #BA55E3, #9747FF)"
                bgClip="text"
              >
                &nbsp; BEST
              </Heading>
            </Box>
            <Heading
              fontSize={{ base: "3xl", lg: "6xl" }}
              bgGradient="linear(to-tl, #12c6b0, #5ae399)"
              bgClip="text"
            >
              AMONG THE REST
            </Heading>
            <Text as="b" textColor="midnight">
              Elite Programmers from BSIT, BSIS and BSCS{" "}
            </Text>

            <Box w={{ base: "90%", lg: "500px" }} mt="16px">
              <Text>
                We are the Programmers’ Den, an organization of Tarlac State
                University - College of Computer Studies that was founded in
                2013. The organization focuses on design and programming-related
                activities, competitions, and development projects. Our goal is
                to enhance its member capabilities to learn, adapt, and perform
                in desired skillsets.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      </motion.div>

      {/** LOGOS */}
      <Box w="full" display="flex" justifyContent="center" mt="24px">
        {Icons.map(icon => (
          <Box key={icon.label} mx="8px">
            <Image src={icon.src} h={{ base: "40px", sm: "60px" }} />
          </Box>
        ))}
      </Box>
      <Box w="full" align="middle">
        <Box
          w={{ base: "65%", sm: "full" }}
          display="flex"
          justifyContent="center"
          my="24px"
        >
          <Text as="b" fontSize="12">
            UTILIZING THE LATEST TECHNOLOGIES BEYOND THE CLASSROOM
          </Text>
        </Box>
      </Box>

      {/**PD Members */}
      
      <Box
        w="full"
        position="relative"
        mt="48px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/**Inner */}
        
        <Box position="absolute">
          <Image src={Logo} w={{ base: "200px", md: "450px", lg: "550px" }} />
          <Heading align="middle" fontSize={{ base: "25px", md: "60px" }}>
            TOGETHER
          </Heading>
        </Box>
        
        <Image src={ProgdenMembers} />
      </Box>
      
      

      {/** History */}
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        whileInView={{ opacity: 1, translateY: 1 }}
        transition={{ duration: 1}}
        viewport={{ once: true , amount: 0.8}}
        >
      <Box
        w="full"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        my="36px"
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          justifyContent="center"
          display="flex"
        >
          <Image src={OldLogos} m="24px" />
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          justifyContent="center"
          display="flex"
          flexDir="column"
        >
          <Text m="36px">
            It all started in 2013 when the founding members of the Programmers’
            Den saw potential of having a skill focused student organization.
            Since then, we have been the top performers and competitors for the
            College of Computer Studies and even the University in IT and
            development.
          </Text>
          <Text mx="36px">
            Since then, the organization has continued to grow into what it is
            today. Our team has proudly been improving with our never ending
            challenge to keep up with the latest technologies and programming
            languages.
          </Text>
        </Box>
      </Box>
      </motion.div>

    <Box w="full" h="250px" layerStyle="seafoam" display="flex" flexDir="column" justifyContent="center" alignItems="center">
            <Heading textColor="darkBlue" as="b">BE A PART OF OUR STORY</Heading>
            <Box display="flex" flexDir="row">
                <Button m="8px" borderRadius="20px" bg="transparent" border="solid 2px" borderColor="midnight" textColor="midnight">
                    Membership Perks
                </Button>
                <Box m="8px" borderRadius="20px" layerStyle="afton">
                    <Button borderRadius="20px" bg="transparent" textColor="white" boxShadow="lg">
                        Sign Up &gt;
                    </Button>
                </Box>
            </Box>
    </Box>


    </Box>
  );
};
export default About;
