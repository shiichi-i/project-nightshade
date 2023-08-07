import React from "react";
import { 
  Box,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";



const Marketing = (props)=>{
  return (
    <Box>
      <Box display="flex" w={{base: '60vw', md: '25vw'}} h='350px' justifyContent="center" alignItems="center" pos="relative">

      <Box position="absolute" w={{base: '60vw', md: '25vw'}} h='350px' layerStyle='afton' borderRadius='30px' bottom="-5px" left="-5px" />

        <Box position="absolute" layerStyle="seafoam" h='350px' w={{base: '60vw', md: '25vw'}} borderRadius="30px" >
            <Box display='flex' justifyContent='center' w='full' mt='10px' borderRadius='35px'>
              
                <Box bg="darkBlue" borderRadius="50%" w="70px" h="70px" m="8px"
                display='flex' alignItems='center' justifyContent='center'>
                    <Icon as={props.icon} boxSize={8} color="secondary" />
                </Box>
            </Box>
            <Box w='100%' h='full' mt='8px' display='flex' flexDirection='column' alignItems='center'>
                <Box display='flex' alignItems='center' justifyContent='center' textAlign='center'>
                <Heading fontSize='18px' color='darkBlue' m="8px">{props.heading}</Heading>
                </Box>

                <Box h='64px' m="18px" textAlign='center' mt='24px'>
                    <Text fontSize='16px' color='rgb(22,20,43)'>{props.text}</Text>
                </Box>
            </Box>
          </Box>
        </Box>
    </Box>
    
  );
};

export default Marketing;
