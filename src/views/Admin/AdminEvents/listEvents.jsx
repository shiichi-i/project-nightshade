import { Box, Text, Button, Table, Thead, Tr, Td, Th, Tbody, Checkbox, Icon, TableContainer } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

const ListEvent = () => {

    /**DUMMY ACHIEVEMENTS TEST */
    const achieve = [
        "President 2021-2023",
        "Best Hotdog 2023",
        "Prince Talong 2023"
    ]

    const navigate = useNavigate();

 return(
    <Box>
        <Box position="relative" w="full">
            <Button onClick={() => {navigate('/admin/accounts/create')}}
            bg="transparent" _hover={{bg: 'midnight'}} position="absolute" right="10px">
                <Text>+ Create Event</Text>
            </Button>
            <Box w="full" h="50px" position="relative" bg="transparent" zIndex="-2" />
        </Box>
        
        <Box m={{base: '10px', md: '50px'}}>
            <TableContainer>
            <Table>
                <Thead>
                    <Th>Profile Image</Th>
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                    <Th>Achievements</Th>
                    <Th>Bio Description</Th>
                    <Th>Actions</Th>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td><Box w="100px" h="50px" bg="gray.400"/></Td>
                        <Td><Text>Christler Neil</Text></Td>
                        <Td><Text>Vinluan</Text></Td>
                        <Td>
                            {achieve.map((achieves) => (
                                <Box display="flex">
                                    <Icon as={FiStar} color="white" m="1"/>
                                    <Text>{achieves}</Text>
                                </Box>
                            ))}
                        </Td>
                        <Td><Text overflow="hidden" maxWidth="100px" whiteSpace="nowrap">.:.*pink*cheese*:.:.</Text></Td>
                        <Td>
                            <Box display="flex" justifyContent="space-around">
                                <Button>Edit</Button>
                                <Button bg="pink.300">Delete</Button>
                            </Box>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            </TableContainer>
        </Box>
        
    </Box>
 );
};
export default ListEvent;