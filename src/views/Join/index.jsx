import { Box, FormControl, Heading } from "@chakra-ui/react";

const Join = () => {
  return (
    <Box>
        {/** CONTAINER FOR FORM (LG: RIGHT ALIGN)*/}
        {/** TODO: REMOVE 1000PX SIZE OF BG*/}
      <Box
        mt="50px"
        w="full"
        display="flex"
        justifyContent={{ base: "center", lg: "right" }}
      >
        <Box
          display="flex"
          h="1000px"
          justifyContent="center"
          w={{ base: "85%", sm: "750px" }}
        >
          <Box
            w={{ base: "85%", sm: "500px" }}
            h="700px"
            layerStyle="bubblegum"
            pos="absolute"
            mt="15px"
            ml="15px"
            borderRadius="40px"
          ></Box>
          <Box
            w={{ base: "85%", sm: "500px" }}
            h="700px"
            pos="absolute"
            display="flex"
            flexDir="column"
            boxShadow="dark-lg"
            borderRadius="40px"
          >
            <Box
              w="100%"
              h="100px"
              layerStyle="bubblegum"
              borderTopRadius="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading color="darkBlue" as="b" size="lg" mt="15px">
                SCHEDULE AN INTERVIEW
              </Heading>
            </Box>

            <Box w="100%" h="600px" bg="darkBlue" borderBottomRadius="40px">
              {/** FORM */}
              <FormControl></FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={{base: '0', lg: '-950px' }}>
         <Box w="full" h="150px" layerStyle="afton">

         </Box>
         <Box w={{base: 'full',lg: '35%', xl: '50%'}} h="500px" ml={{base: '0', lg: '5'}} border="solid 3px white"
         display="flex" justifyContent="center" alignItems="center">
            <Box w="95%" h="95%" border="solid 3px pink">
                
            </Box>
         </Box>
      </Box>
    </Box>
  );
};
export default Join;
