import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Submitted = () => {

    const nav= useNavigate();

    return(
        <Box w="100vw" h="88vh">
            <Flex alignItems="center" flexDir="column" justifyContent="center" h="full">
                <Text fontSize="45px">
                    Success ! 🎉
                </Text>
                <Text color="secondary" fontSize="25px">Form has been submitted</Text>

                <Box m="8" align='middle'>
                    <Text>Remember to visit Room C416, 4th Floor, near the Right wing, CCS Building to meet the officers in charge of your interview</Text>
                <Button onClick={() => nav("/")} m="8" layerStyle="seafoam">Proceed to Home Page &gt; </Button>
                </Box>
            </Flex>
        </Box>
    )
}
export default Submitted;