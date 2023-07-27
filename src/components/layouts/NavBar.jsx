import { Box, Image, Button, Icon  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { useState } from "react";

import LogoBLK from "../../assets/logo_blk.png";

const open = {
    opacity: 1,
    marginTop: 0,
    display: "block"
  };
  
  const close = {
    opacity: 0,
    marginTop: "-350px",
    transitionEnd: {
        display: "none"
      }
  };


const NavBar = ({ navigationLinks = [] }) => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return(
        <Box w="full" h="84px" display="flex" alignItems="center" justifyContent="center">

            <motion.div
            animate={show? open : close}
            transition={{ duration: 0.2 }}>
                <Box display={{base: 'flex', md: 'none'}}>
                <Box position="absolute" zIndex="1"
                layerStyle="seafoam" w="95vw" h="250px" borderBottomRadius="40px">
                    <Box mt="40px" display="flex" justifyContent="center" flexDir="column" alignItems="center">
                        {navigationLinks.map((link) => (
                            <Button w="80%" bg="whiteAlpha.400" borderRadius="30px" my="1" key={link.label} onClick={() => {navigate(link.path); setShow(false)}}>
                                {link.label}
                            </Button>
                        ))}
                        <Button w="80%" my="0.5" bg="blackAlpha.600" borderRadius="30px" textColor="white">
                            Join our Team
                        </Button>
                        
                    </Box>
                </Box>
                </Box>
            </motion.div>

            
            <Box layerStyle="afton" borderRadius="20px" w="95vw" h="60px" display="flex" flexDir="row" zIndex="2">
            
                <Image src={LogoBLK} h="50px" pl="30px" pt="10px" pr="30px"/>

                <Box display="flex" position="relative" w="full">
                    <Box display={{base: 'none', md: 'flex'}} flexDir="row" position="absolute" right="5">
                    {navigationLinks.map((link) => (
                        <motion.div
                        whileHover={{
                            marginTop: "10px",
                            scale: 1.1,
                        }}
                        transition={{
                            duration: 0.2,
                            scale: {
                                type: "spring",
                            }
                        }}
                        >
                        <Box borderRadius="25px" layerStyle="seafoam"  key={link.label} display="flex" alignItems="center" m="1">  
                            <Button onClick={()=> navigate(link.path)}borderRadius="25px" boxShadow="lg" bg="whiteAlpha.100" h="50px" w="100px" textColor="galaxy" _hover={{ textColor: 'primary', bg: 'darkBlue'}}>
                                {link.label}
                            </Button>
                        </Box>
                        </motion.div>
                    ))}
                        <motion.div
                        whileHover={{
                            scale: 1.2
                        }}
                        transition={{
                            duration: 0.2,
                            scale: {
                                type: "spring",
                            }
                        }}>
                            <Box borderRadius="25px" layerStyle="afton" display="flex" alignItems="center" m="1">
                                <Button borderRadius="25px" boxShadow="lg" textColor="white" _hover={{ textColor: 'midnight', bg: 'primary'}} bg="whiteAlpha.100" h="50px" w="150px" onClick={() => navigate("/join")}>
                                    Join our Team
                                </Button>
                            </Box>
                        </motion.div>
                    </Box>

                    <Box display={{base: 'flex', md: 'none'}} flexDir="row" position="absolute" right="5" alignItems="center" h="full">
                        <Button borderRadius="40px" bg="darkBlue" onClick={() => setShow(!show)}>
                            <Icon as={show? TiTimes : TiThMenu} color="midnight" boxSize={6} />
                        </Button>
                        
                    </Box> 
                    

                </Box>
                
            </Box>

            
        </Box>
    );
}
export default NavBar;