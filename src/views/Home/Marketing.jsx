import React from "react";
import { 
  Box,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import Eclipse from '../../assets/Ellipse 4.png';

const Marketing = ()=>{
  return (
    <Box w='275px' h='300px'>
      <Box position='absolute' w='275px' h='300px' layerStyle='afton' borderRadius='30px'>
        <Box display='flex' flexDir='column' w='100%' h='300px' layerStyle='seafoam' borderRadius='35px' position='absolute'
        left='4px' top='-4px'>
            <Box display='flex' justifyContent='center' w='full' h='92px' mt='10px'>
                <Image src={Eclipse} w='92px' h='full'/>
            </Box>
             <Box w='100%' h='full' mt='20px' display='flex' flexDirection='column' alignItems='center'>
                 <Box w='233px' h='39px' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
                <Heading fontSize='20px' color='rgb(22,20,43)'>GET INDUSTRY EXPERIENCE</Heading>
                </Box>

                <Box w='265px' h='64px' textAlign='center' mt='15px'>
                    <Text fontSize='14px' color='rgb(22,20,43)'>Learn how professionals in the industry work and prepare yourself as
                      Programmers’ Den operates under industry standards
                    </Text>
                </Box>
            </Box>
        </Box> 
    </Box>
    </Box>
    
  );
};

export default Marketing;
