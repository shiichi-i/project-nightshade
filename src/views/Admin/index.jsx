import { Box, Button, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const curr = (path) => {
        if(location.pathname === path) return "green.700"
        else return "blackAlpha.200"
    }

    const adminRoutes = [
        {
            label: 'Accounts',
            path: '/admin/accounts'
        },
        {
            label: 'Events',
            path: '/admin/events'
        },
        {
            label: 'Officers',
            path: '/admin/officers'
        },
    ];

    return(
        <Box>
            
            <Box w="full" h="70px">
                <Box mx="10vw">
                    
                    <SimpleGrid columns="3" align="middle">
                    {adminRoutes.map((link) => (
                        <GridItem key={link.label}>
                            <Button onClick={()=>{navigate(link.path)}}
                            w="full" bg={curr(link.path)} borderRadius="0" _hover={{ bg: 'green.800'}}>
                                <Text textColor="teal.300">{link.label}</Text>
                            </Button>
                         </GridItem>
                    ))}
                    </SimpleGrid>
                    <Box w="full" h="3px" bg="green.400" />
                    <Box align="middle" mt="-8px">
                        <Text as="b" textColor="green.300" fontSize="25px" >PROGDEN ADMIN</Text>
                    </Box>
                    
                </Box>
            </Box>
            
            <Outlet />
        </Box>
    );
};
export default Admin;