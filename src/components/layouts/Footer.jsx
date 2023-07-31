import { Box, Image, Button } from "@chakra-ui/react";

import Banner from "../../assets/pd_banner-blk.png";

const Footer = () => {
    return(
        <Box mt="-35px">
            <Box bg="#ba55e3" w="full" h="35px" borderTopRadius="40" bottom="0"
            display="flex" alignItems="center">
                <Image src={Banner} h="25px" ml="16px" />
            </Box>
        </Box>
    );
}
export default Footer;