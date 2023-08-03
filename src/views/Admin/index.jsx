import { Box, Heading, Text, Button, Icon, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const dummyData = [
    {
        studentNo: '22642069',
        name: 'Juan Dela Cruz',
        course: 'BS Information Technology',
        date: 'WED',
        division: 'Main',
    },
    {
        studentNo: '22642069',
        name: 'Juan Dela Cruz',
        course: 'BS Information Technology',
        date: 'TUE',
        division: 'Main',
    },

];

const Admin = () => {
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

        <Box display="flex" justifyContent="flex-end" w="full">
          <Box h="8px" w="full" layerStyle="seafoam" mt="8px" />
          <Button
            borderRightRadius="0"
            borderLeftRadius="25px"
            bg="midnight"
            mt="-8px"
          >
            <Text m="38px">Log Out</Text>
          </Button>
        </Box>
      </Box>

      {/** Featured Section */}
      <Box display="flex" flexDir={{ base: "column", md: "row" }}>
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
            <Box h="150px" w="150px" bg="white" m="16px" borderRadius="25px" />
            <Box w="full" align="middle">
              <Text color="darkBlue" as="b" fontSize="25px">
                Juan Dela Cruz
              </Text>
              <Text color="darkBlue" align="left" w="80%">
                Juan Dela Cruz Hi I’m Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
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
            <Box h="150px" w="150px" bg="white" m="16px" borderRadius="25px" />
            <Box w="full" align="middle">
              <Text align="left" w="80%">
                Juan Dela Cruz Hi I’m Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Text>

              <Text color="secondary">
                https://www.lodadskfoafhiohfiasofnaos
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/** Data Table Section */}
        <Box w="full" h="10px" layerStyle="bubblegum"/>

            
        <Box>
            <TableContainer m="48px" border="solid 3px" borderColor="#57E9D8" borderRadius="40px" >
                <Table m="24px">
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
                                <Td textColor="white">{data.name}</Td>
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
