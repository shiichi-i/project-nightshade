import { Outlet } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const Accounts = () => {
 return(
    <Box>
        <Box w="full" align="middle" my="25px" border="white 1px solid" borderRadius="10px">
            <Text my="8px">Accounts</Text>
        </Box>
        <Outlet />
    </Box>
 );
};
export default Accounts;