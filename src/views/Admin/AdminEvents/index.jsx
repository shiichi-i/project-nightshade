import { Outlet } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const AdminEvents = () => {
 return(
    <Box>
        <Box w="full" align="middle" my="25px" border="white 1px solid" borderRadius="10px">
            <Text my="8px">Events</Text>
        </Box>
        <Outlet />
    </Box>
 );
};
export default AdminEvents;