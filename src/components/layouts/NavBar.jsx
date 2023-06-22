import { Box, Image, Button, Text, Divider } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

import LogoBLK from "../../assets/logo_blk.png"

const NavBar = ({ navigationLinks = [] }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();


    return(
        <Box layerStyle="seafoam" w="full" h="60px" display="flex" flexDir="row">
            
            <Image src={LogoBLK} h="50px" pl="30px" pt="10px" pr="30px"/>

            <Box display={{base: 'none', md: 'flex'}} flexDir="row">
            {navigationLinks.map((link) => (
                <>
                <Button key={link.label} borderRadius="0" bg="whiteAlpha.100" h="full" w="100px" _hover={{ bg: 'blackAlpha.300'}} onClick={() => navigate(link.path)}>
                    <Text textColor="galaxy">{link.label}</Text>
                </Button>
                <Divider orientation="vertical" bg="#16142b" w="1px"/>
                </>
            ))}
            </Box>

            <Box position="relative" pt="10px" w="full" display={{base: 'none', md: 'block'}}>
                <Button position="absolute" right="10" bg="blackAlpha.600" _hover={{ bg: 'secondary'}} display={{base: 'none', md: 'block'}}>
                    <Text>Log in</Text>
                </Button>
            </Box>

            <Box position="relative" pt="10px" w="full" display={{base: 'block', md: 'none'}}>
                <Button position="absolute" right="10" bg="blackAlpha.600" display={{base: 'block', md: 'none'}}>

                </Button>
            </Box>


        </Box>
    );
}
export default NavBar;