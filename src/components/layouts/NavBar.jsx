import { Box, Image, Button } from "@chakra-ui/react";

import LogoBLK from "../../assets/logo_blk.png"

const NavBar = () => {
    return(
        <Box layerStyle="seafoam" w="full" h="60px">
            <Image src={LogoBLK} h="50px" pl="30px" pt="5px"/> 
        </Box>
    );
}
export default NavBar;