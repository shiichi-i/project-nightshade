import { Box, Text } from "@chakra-ui/react";
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return(
        <Box>
            <Text>Admin</Text>
            <Outlet />
        </Box>
    );
};
export default Admin;