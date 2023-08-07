import {
  Box,
  FormControl,
  VStack,
  Heading,
  Input,
  Select,
  Text,
  Button,
  List,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

const Join = () => {
  return (
    <Box>
      {/** CONTAINER FOR FORM (LG: RIGHT ALIGN)*/}
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
          w={{ base: "85%", sm: "800px", xl: "1000px"}}
        >
          <Box
            w={{ base: "85%", sm: "500px", xl: "650px" }}
            h="950px"
            layerStyle="bubblegum"
            pos="absolute"
            mt="15px"
            ml="15px"
            borderRadius="40px"
          ></Box>
          <Box
            w={{ base: "85%", sm: "500px", xl: "650px" }}
            h="950px"
            pos="absolute"
            display="flex"
            flexDir="column"
            boxShadow="dark-lg"
            borderRadius="40px"
          >
            <Box
              w="100%"
              h="150px"
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

            <Box w="100%" h="950px" bg="darkBlue" borderBottomRadius="40px">
              {/** FORM */}
              <Box m="10">
                <FormControl>
                  <VStack spacing={8}>
                    <Box w="full">
                      <Box display="flex">
                        <Text as="b" fontSize="24px">
                          Name:
                        </Text>
                        <Text color="miku" fontSize="24px">
                          *
                        </Text>
                      </Box>
                      <Input placeholder="Surname, First Name, Middle Name, Suffix" />
                    </Box>

                    <Box w="full">
                      <Box display="flex">
                        <Text as="b" fontSize="24px">
                          Student Number:
                        </Text>
                        <Text color="miku" fontSize="24px">
                          *
                        </Text>
                      </Box>
                      <Input placeholder="ex. 202300111" />
                    </Box>

                    <Box w="full">
                      <Box display="flex">
                        <Text as="b" fontSize="24px">
                          Course:
                        </Text>
                      </Box>
                      <Select>
                        <option value="option1">
                          BS Information Technology
                        </option>
                        <option value="option2">BS Computer Science</option>
                        <option value="option3">BS Information Systems</option>
                      </Select>
                    </Box>

                    <Box w="full">
                      <Box display="flex">
                        <Text as="b" fontSize="24px">
                          Division:
                        </Text>
                        <Text color="miku" fontSize="24px">
                          *
                        </Text>
                      </Box>
                      <Select bg="secondary">
                        <option value="option1">
                          Main &#40; Web, App, Game Development & Competition
                          &#41;
                        </option>
                        <option value="option2">
                          Multimedia &#40; Graphic Design, Digital Art, Video
                          Editing &#41;
                        </option>
                      </Select>
                    </Box>

                    <Box w="full">
                      <Box display="flex">
                        <Text as="b" fontSize="24px">
                          Preffered Schedule:
                        </Text>
                      </Box>
                      <Select placeholder=" ">
                        <option value="option1">Tuesday</option>
                        <option value="option2">Wednesday</option>
                        <option value="option3">Thursday</option>
                        <option value="option4">Friday</option>
                      </Select>
                    </Box>

                    <Button
                      layerStyle="seafoam"
                      borderRadius="40px"
                      w="full"
                      mt="48px"
                      h="52px"
                      fontSize="20px"
                    >
                      <Text as="b" color="darkBlue">
                        Submit
                      </Text>
                    </Button>
                    <Box align="middle">
                      <Text fontSize="10px">
                        By submitting through the form, you agree to the
                        following. In compliance with Data Privacy Act 0f 2012,
                        it's implementing rules and regulations, and other
                        issuance of the National Privacy Commission, you
                        authorize the organization(Programmers' Den) to collect
                        your data for accomplishing the said activity
                      </Text>
                    </Box>
                  </VStack>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={{ base: "0", lg: "-950px" }}>
        <Box w="full" h="150px" layerStyle="afton" />
        <Box pb="20px">
          <Heading color="darkBlue" ml="8" mt="-50px">
            Membership Details:
          </Heading>
        </Box>
        <Box
          w={{ base: "full", lg: "35%"}}
          h="500px"
          ml={{ base: "0", lg: "5" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box w="80%" h="95%">
            <VStack align="left">
              <List>
                <OrderedList textColor="white" spacing={4}>
                  <ListItem>
                    <Box>
                      <Text>Recruitment will only be held face-to-face. Only interview scheduling will be allowed online.</Text>
                    </Box>
                  </ListItem>

                  <ListItem>
                      <Text>There will be no confirmation to be sent after submitting the form. Please visit </Text>
                      <Text color="secondary">Room C416,</Text>
                      <Text>CCS Building, 4th floor near the Right wing for the interview venue.</Text>
                  </ListItem>

                  <ListItem>
                      <Text>Upon the interview, new recruits are also required to take the </Text>
                      <Text color="secondary">organization entrance exam. </Text>
                      <Text>Please bring your own ballpen</Text>
                  </ListItem>

                  <ListItem>
                      <Text>Once successfully completed, you will be considered a </Text>
                      <Text color="secondary">probationary member </Text>
                      <Text>and can still be removed if necessary.</Text>
                  </ListItem>

                  <ListItem>
                      <Text>Regular members are required to pay a </Text>
                      <Text color="secondary" as="b">membership fee of Php 50.00 </Text>
                      <Text>per academic year.</Text>
                  </ListItem>

                </OrderedList>
              </List>
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box h={{base: '300px', lg: '500px'}} w="full" />
    </Box>
  );
};
export default Join;
