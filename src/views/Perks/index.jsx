import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

//Images
import Banner from "../../assets/perks_banner.png";
import Events from "../../assets/compe_events.png";
import Merch from "../../assets/merch_perks.png";
import Portfolio from "../../assets/portfolio_perks.png";
import Games from "../../assets/work_play.png";
import Curve from "../../assets/perks_curve.png";
import { useNavigate } from "react-router-dom";

const Perks = () => {

  const nav = useNavigate();

  return (
    <Flex>
      <Flex flexDirection="column" alignItems={"center"} w={"100%"}>
        {/**Header */}
        
        <Box display="flex" flexDir={{base: 'column-reverse', sm: 'row'}} bg={"#9848FF"} w={"full"} alignItems={"center"}>

         
          
            <Box m="24px" w={{base: '100%', sm: '75%'}} ml={{base: '0', lg: '8vw' }}>
            <motion.div
            animate={{
              y: [-10,0],
              opacity: [0,1]
            }}
            transition={{
              duration: 0.8
            }}>
              <Heading textAlign="center">
                SIGN UP FOR EXCLUSIVE MEMBERSHIP PERKS
              </Heading>
              </motion.div>
            </Box>

            
              <Box display="flex" justifyContent="flex-end" h="100%">
              <motion.div
              animate={{
                y: [-10,0],
                opacity: [0,1]
              }}
              transition={{
                duration: 0.8
              }}>
                <Image w={{base: '100%', lg: '450px'}}  src={Banner} />
                </motion.div>
              </Box>
              
        </Box>
        


        <Flex w={"76vw"}  justifyContent={"center"} alignItems={"center"}>
          <Flex borderRadius="35px" layerStyle={"bubblegum"} maxW="950px" mt="20" p={{base: '5', md: '0'}}>
            {/**Join Competition */}
            <Flex flexDir={{base: 'column', md: 'row'}} justifyContent={"center"} alignItems={"center"}>
              <Flex w={{base:'100%', md: '50%'}} flexDir="column" alignItems={"center"}>
                <Heading textAlign={"center"} color="darkBlue" m="5">
                  JOIN COMPETITION AND EVENTS
                </Heading>
                <Text m="7">
                  Get offered more opportunities to participate in competitions and experience your college-life attending both National and
                  International events. As a member of the elite programmers, the College puts its faith in your skills.
                </Text>
              </Flex>
              <Box margin={"15px"}>
                <Image src={Events} />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Flex w={"76vw"}  justifyContent={"center"} alignItems={"center"}  maxW="950px">
          <Flex flexDir={"column"} >
            <Flex mt="6" flexDir={{ base: "column", md: "row" }} justifyContent={"center"}>
              {/**Merch */}
              <Flex
                layerStyle={"seafoam"}
                borderRadius="35px"
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"15px"}
                mr={{base: '0', md: '3'}}
              >
                <Box>
                  <Heading textAlign={"center"} color="darkBlue" m="5">
                    ENJOY EXCLUSIVE MERCHANDISE
                  </Heading>
                </Box>
                <Box>
                  <Image src={Merch} />
                </Box>
              </Flex>
              {/**Portfolio */}
              <Flex
                layerStyle={"afton"}
                borderRadius="35px"
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"15px"}
                ml={{base: '0', md: '3'}}
                mt={{base: '6', md: '0'}}
              >
                <Box>
                  <Image src={Portfolio} />
                </Box>
                <Box>
                  <Heading textAlign={"center"} color="darkBlue" m="4">
                    BUILD YOUR WORK PORTFOLIO
                  </Heading>
                  <Flex justifyContent={"center"}>
                    <Text textAlign={"center"} mx="6">
                      Be job ready. Work on projects to put on your portfolio as early as college
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        </motion.div>

       
        <Flex w="100%" flexDir={"column"}>
          <Image src={Curve} />
          <Flex bg={"#11C6B0"}>
            <Box w="full" display="flex" flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
            <motion.div
                  initial={{ opacity: 0, scale: 0  }}
                  whileInView={{ opacity: 1 , scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.8 }}>
              <Heading color="darkBlue" mb="5">WORK HARD. PLAY HARD.</Heading>
              </motion.div>
              <Flex w={"100%"}>
                
                <Image src={Games} w={"100%"} />
              </Flex>
              <Flex justifyContent="center" m="4">
              <Box w={{base: '80%', lg: '50%'}}>
                <Text color="darkBlue" textAlign={"center"}>
                  Celebrate gaming as a platform. Engage in exciting organization Team Building activities that sprout teamwork and healthy competition.
                </Text>
              </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        
        


        <Box
        w="full"
        h="250px"
        align="middle"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
         <motion.div
                  initial={{ opacity: 0  }}
                  whileInView={{ opacity: 1  }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.8 }}>
        <Heading layerStyle="seafoam" backgroundClip="text" as="b">
          BECOME A MEMBER TODAY
        </Heading>
        <Box display="flex" flexDir="row" w="full" justifyContent="center">
          <Button
            w="150px"
            m="8px"
            borderRadius="20px"
            bg="transparent"
            border="solid 2px"
            borderColor="secondary"
            textColor="secondary"
            onClick={()=>{nav("/about"); window.scrollTo(0,0)}}
          >
            About Us
          </Button>
          <Box m="8px" borderRadius="20px" layerStyle="seafoam">
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
        </motion.div>
      </Box>
      </Flex>
    </Flex>
  );
};
export default Perks;
