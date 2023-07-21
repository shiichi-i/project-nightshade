import { Box, Text, Input, FormControl, FormLabel, SimpleGrid, GridItem, Button, useToast, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/** admin@progden.dev == "-(9wLk50n!c" (at least 6 characters)*/

const Create = () => {

    const toast = useToast();
    const navigate = useNavigate();

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFNameChange = (event) => {
        setFName(event.target.value)
    }
    const handleLNameChange = (event) => {
        setLName(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const getSubstring = () => {
        if (fName.length === 0 || lName.length === 0) {
            toast({
                title: "Error",
                description: "Please input both First Name and Last Name.",
                isClosable: true,
                status: "error",
              })
        }else{
            const first = fName.split(" ");
            const name = first[0];
            const last = lName.substring(0,2);
            const res = name.concat(".",last,"@progden.dev");
            setEmail(res.toLowerCase());
        }
        
    }


 return(
    <Box>
        <Button onClick={() => {navigate('/admin/accounts')}}
         bg="transparent" _hover={{bg: 'midnight'}}>
            <Text>&lt; Back</Text>
        </Button>
        
        <Box w="full" display="flex" flexDir="column" justifyContent="center" alignItems="center">

        <Text textColor="teal">ADD ACCOUNTS</Text>
        <Box bg="transparent" border="solid 2px teal" borderRadius="20px" w={{base:'full', sm:'600px'}}>
            <FormControl m={{base:'20px', sm:'50px'}}>
                <SimpleGrid spacing={8}>
                    <GridItem>
                        <FormLabel textColor="white">First Name</FormLabel>
                        <Input w="350px" textColor="white" value={fName} onChange={handleFNameChange} />
                        <Text color="whiteAlpha.600" mt="10px">Include all names ex. "James Mark" of "James Mark Santos"</Text>
                    </GridItem>

                    <GridItem>
                        <FormLabel textColor="white">Last Name</FormLabel>
                        <Input w="350px" textColor="white" value={lName} onChange={handleLNameChange} />
                        <Text color="whiteAlpha.600" mt="10px">Include suffix ex. "Santos Jr."</Text>
                    </GridItem>

                    <Divider w="30vw" borderColor="teal"/>

                    <GridItem>
                        <FormLabel textColor="white">ID Photo</FormLabel>
                        <Box mr="10vw">
                            <Text color="whiteAlpha.600" my="10px">Choose a clear photo capturing until the shoulders.
                            Proper ID Photo is required for member recognition, identification card, and profile image</Text>
                        </Box>
                        <Box h="200px" w="200px" bg="gray" my="10px"></Box>
                        <Button>Upload File</Button>
                    </GridItem>

                    <Divider w="30vw" borderColor="teal"/>

                    <GridItem>
                        <FormLabel textColor="white">Organization Email</FormLabel>
                        <Button onClick={getSubstring} variant="outline" textColor="white" borderRadius="50px" my="6px">Generate Email</Button>
                        <Box mr="50px">
                            <Input w="350px" textColor="white" value={email} disabled={true}/>
                            <Text color="whiteAlpha.600" my="10px">emails are auto generated. Take note of your email in case of account recovery.</Text>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <FormLabel textColor="white">Password</FormLabel>
                        <Input w="350px" textColor="white" value={password} onChange={handlePasswordChange} />
                    </GridItem>
                </SimpleGrid>

                <Button
                m="50px" borderRadius="50px" bg="green.300" w={{base:'250px', sm:'400px'}}>
                    Add Account
                </Button>
            </FormControl>
        </Box>
        </Box>
    </Box>
 );
};
export default Create;