import { Box, Heading, Text, Button, Icon, TableContainer, Table, Thead, Tr, Th, Tbody, Td, useDisclosure, Modal, ModalOverlay, ModalContent, Image } from "@chakra-ui/react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { auth } from '../../firebase-config';
import { checkAuth } from '../../views/Login/user';
import { useNavigate } from "react-router-dom";

const dummyData = [
    {
        studentNo: '12',
        name: 'Juan Dela Cruz',
        course: 'BS Information Technology',
        date: 'WED',
        division: 'Main',
    },
    {
        studentNo: '13',
        name: 'Juan Dela Cruz',
        course: 'BS Information Technology',
        date: 'TUE',
        division: 'Mutltimedia',
    },
    {
        studentNo: '14',
        name: 'Juan Dela Cruz',
        course: 'BS Information Technology',
        date: 'WED',
        division: 'Main',
    },
    {
        studentNo: '15',
        name: 'Juan Dela Cruz',
        course: 'BS Information Technology',
        date: 'TUE',
        division: 'Main',
    },

];

const Admin = ({ featured = [] }) => {

  const nav = useNavigate();

  const handleLogout= (e) => {
    auth.signOut();
    checkAuth();
    nav("/");
    window.location.reload();
}

  const { isOpen: isLogOutOpen, onOpen: onLogOutOpen, onClose: onLogOutClose } = useDisclosure();


  return (
    <Box>
      <Box w="full" my="25px" display="flex" flexDir="row">
        <Box h="8px" w="15px" layerStyle="seafoam" mt="8px" />
        <Heading color="secondary" size="md" pl="16px">
          PROGDEN
        </Heading>
        <Heading color="secondary" size="md" pr="16px" ml="10px">
          ADMIN
        </Heading>

        <Modal isOpen={isLogOutOpen} onClose={onLogOutClose} >
          <ModalOverlay />
          <ModalContent bg="darkBlue" p="10" display='flex' justifyContent="center">
            <Text as="b">Log out?</Text>
            <Box display="flex">
              <Button variant="outline" m="2" textColor="secondary" onClick={onLogOutClose}>Cancel</Button>
              <Button variant="outline" m="2" layerStyle="seafoam" onClick={handleLogout}>Confirm</Button>
            </Box>
          </ModalContent>

        </Modal>

        <Box display="flex" justifyContent="flex-end" w="full">
          <Box h="8px" w="full" layerStyle="seafoam" mt="8px" />
          <Button
            borderRightRadius="0"
            borderLeftRadius="25px"
            bg="midnight"
            mt="-8px"
            onClick={onLogOutOpen}
          >
            <Text m="38px">Log Out</Text>
          </Button>
        </Box>
      </Box>

      {/** Featured Section */}
      {featured.map((feat) => (
        <Box key={feat.member} display="flex" flexDir={{ base: "column", md: "row" }}>
        <Box m="16px" w={{ base: "90%", md: "50%" }} h="500px">
          <Box display="flex" w="full">
            <Box display="flex" w="50%" justifyContent="flex-start">
              <Heading
                justifySelf="flex-start"
                left="0"
                size="md"
                textColor="secondary"
              >
                FEATURED MEMBER
              </Heading>
            </Box>
            <Box display="flex" w="50%" justifyContent="flex-end">
              <Button
                layerStyle="seafoam"
                textColor="darkBlue"
                _hover={{ bg: "darkBlue", textColor: "secondary" }}
                borderRadius="20px"
              >
                <Icon as={FiEdit3} m="5px" />
                Edit
              </Button>
            </Box>
          </Box>
          <Box
            mt="16px"
            bg="midnight"
            h="430px"
            borderRadius="35px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Image src={feat.memberImg} h="150px" w="150px" bg="white" m="16px" borderRadius="25px" />
            <Box w="full" align="middle">
              <Text color="darkBlue" as="b" fontSize="25px">
                {feat.member}
              </Text>
              <Text color="darkBlue" align="left" w="80%">
                {feat.memberDesc}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box m="16px" w={{ base: "90%", md: "50%" }} h="500px">
          <Box display="flex" w="full">
            <Box display="flex" w="50%" justifyContent="flex-start">
              <Heading
                justifySelf="flex-start"
                left="0"
                size="md"
                textColor="white"
              >
                FEATURED PROJECT
              </Heading>
            </Box>
            <Box display="flex" w="50%" justifyContent="flex-end">
              <Button
                bg="white"
                _hover={{ bg: "midnight" }}
                borderRadius="20px"
              >
                <Icon as={FiEdit3} m="5px" />
                <Text color="darkBlue">Edit</Text>
              </Button>
            </Box>
          </Box>
          <Box
            mt="16px"
            bg="darkBlue"
            h="430px"
            borderRadius="35px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Image src={feat.projectImg} h="150px" w="150px" bg="white" m="16px" borderRadius="25px" />
            <Box w="full" align="middle">
              <Text align="left" w="80%">
                {feat.projectDesc}
              </Text>

              <Text color="secondary">
                {feat.projectLink}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      ))}
      

      {/** Data Table Section */}
        <Box w="full" h="10px" layerStyle="bubblegum"/>

            
        <Box mb="80px">
            <TableContainer m="36px" border="solid 3px" borderColor="#57E9D8" borderRadius="40px" >
                <Table m="24px" variant='striped' colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th color="#57E9D8">Student No.</Th>
                            <Th color="#57E9D8">Name</Th>
                            <Th color="#57E9D8">Course</Th>
                            <Th color="#57E9D8">Date</Th>
                            <Th color="#57E9D8">Division</Th>
                            <Th color="#57E9D8">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dummyData.map((data) => (
                            <Tr key={data.studentNo}>
                                <Td textColor="white">{data.studentNo}</Td>
                                <Td textColor="white">{data.name}</Td>
                                <Td textColor="white">{data.course}</Td>
                                <Td textColor="white">{data.date}</Td>
                                <Td textColor="white">{data.division}</Td>
                                <Td>
                                    <Button bg="transparent" border="solid 2px white" h="50px" w="50px" borderRadius="50%">
                                        <Icon as={FiTrash2} color="white" boxSize="7" m="9px"/>
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>

    </Box>
  );
};
export default Admin;
