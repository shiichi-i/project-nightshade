import {
  Box,
  VStack,
  Heading,
  Input,
  Select,
  Text,
  Button,
  List,
  OrderedList,
  ListItem,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { Form, Formik, useFormik } from "formik";
import { FormSchema } from '../../components/FormSchema';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Join = () => {

  const nav = useNavigate();

  const [loading, setLoading] = useState();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        nav("/submit")
        window.scrollTo(0,0);
        setLoading(false);
      }, 2000);
    }
  });

  const {handleChange, values , handleSubmit, errors, touched} = useFormik({
    initialValues: {
      name: "",
      studentNo: "",
      course: "BSIT",
      division: "Main",
      date: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      
    },
  })

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
              <Formik onSubmit={handleSubmit} initialValues={{name: "", studNo: "", course: ""}}>
              <Form>
              <Box m="10">
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
                        <Input border={errors.name && touched.name? "solid 2px red" : ""} name="name" placeholder="Surname, First Name, Middle Name, Suffix" value={values.name} onChange={handleChange}/>
                        {errors.name && touched.name?<Text color="red">{errors.name}</Text>:""}

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
                      <Input border={errors.studentNo && touched.studentNo? "solid 2px red" : ""} name="studentNo" placeholder="ex. 202300111" value={values.studentNo} onChange={handleChange} />
                      {errors.studentNo && touched.studentNo?<Text color="red">{errors.studentNo}</Text>:""}
                    </Box>

                    <Box w="full">
                      <Box display="flex">
                        <Text as="b" fontSize="24px">
                          Course:
                        </Text>
                      </Box>
                      <Select name="course" value={values.course} onChange={handleChange}>
                        <option value="BSIT">
                          BS Information Technology
                        </option>
                        <option value="BSCS">BS Computer Science</option>
                        <option value="BSIS">BS Information Systems</option>
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
                      <Select name="division" value={values.division} onChange={handleChange} bg={values.division=="Multimedia"? "midnight": "secondary"}>
                        <option value="Main">
                          Main &#40; Web, App, Game Development & Competition
                          &#41;
                        </option>
                        <option value="Multimedia">
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
                      <Select placeholder=" " name="date" value={values.date} onChange={handleChange}>
                        <option value="TUE">Tuesday</option>
                        <option value="WED">Wednesday</option>
                        <option value="THU">Thursday</option>
                        <option value="FRI">Friday</option>
                      </Select>
                    </Box>

                    <Button
                      layerStyle="seafoam"
                      borderRadius="40px"
                      w="full"
                      mt="48px"
                      h="52px"
                      fontSize="20px"
                      type="submit"
                      isLoading={loading}
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
              </Box>
              </Form>
              </Formik>


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
