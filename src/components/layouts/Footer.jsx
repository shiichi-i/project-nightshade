import { Box, Image, Text, Heading, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiFacebook, FiMail } from "react-icons/fi";

import Banner from "../../assets/pd_banner-blk.png";

const Footer = ({ navigationLinks = [] }) => {
  const nav = useNavigate();

  return (
    <Box mt="-40px" bgGradient="linear(to-tl, #9747FF, #BA55E3)" borderTopRadius="40" pt="3">
      <Box w="full" h="40px" bottom="0" display="flex" alignItems="center">
        <Image src={Banner} h="36px" ml="16px"/>
        <Box
          pos="absolute"
          right="16px"
          display={{ base: "none", md: "block" }}
        >
          <Text textColor="darkBlue">
            Tarlac State University | College of Computer Studies
          </Text>
        </Box>
      </Box>
      <Box w="full" display="flex" justifyContent="center" flexDir="column">
        <Box ml="16px" display={{ base: "block", md: "none" }}>
          <Text textColor="darkBlue">
            Tarlac State University | College of Computer Studies
          </Text>
        </Box>
        <Box w="full" display="flex" justifyContent="center">
          <Box
            w={{ base: "full", lg: "80vw" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box
              display="flex"
              fledDir={{ base: "column", md: "unset" }}
              w="full"
            >
              <Box h="150px" w={{ base: "90%", md: "50%" }}>
                <Box m="36px">
                  <Heading size="md" textColor="darkBlue" mb="8px">
                    Browse
                  </Heading>
                  <Box display="flex" flexDir="column">
                    {navigationLinks.map(link => (
                      <Button
                        key={link.label}
                        variant="link"
                        w="50px"
                        my="4px"
                        onClick={() => {
                          nav(link.path);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Text fontWeight="light" color="darkBlue">
                          {link.label}
                        </Text>
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box h="100px" w={{ base: "90%", md: "50%" }} mb="16px">
                <Box m="36px">
                  <Heading size="md" textColor="darkBlue" mb="8px">
                    Become a Member
                  </Heading>
                  <Box display="flex" flexDir="column">
                    <Button
                      variant="link"
                      w="60px"
                      my="4px"
                      onClick={() => {
                        nav("/join");
                        window.scrollTo(0, 0);
                      }}
                    >
                      <Text fontWeight="light" color="darkBlue">
                        Register
                      </Text>
                    </Button>

                    <Button
                      variant="link"
                      w="150px"
                      my="4px"
                      onClick={() => {
                        nav("/join");
                        window.scrollTo(0, 0);
                      }}
                    >
                      <Text fontWeight="light" color="darkBlue">
                        Membership Details
                      </Text>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box w={{ base: "90%", md: "50%" }}>
              <Box m="36px">
                <Heading mt="8px" size="md" textColor="darkBlue" mb="8px">
                  CONTACT US
                </Heading>
                <Box mx="8px" display="flex" flexDir="column">
                  <Box display="flex" flexDir="row">
                    <Box bg="darkBlue" borderRadius="40px" w="40px" h="40px">
                      <Icon
                        as={FiFacebook}
                        boxSize={6}
                        color="secondary"
                        m="8px"
                      />
                    </Box>
                    <a
                      href="https://www.facebook.com/ccsprogrammersden"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        variant="link"
                        fontWeight="light"
                        m="8px"
                        color="darkBlue"
                      >
                        CCS Programmers' Den
                      </Button>
                    </a>
                  </Box>
                  <Box display="flex" flexDir="row">
                    <Box
                      mt="8px"
                      bg="darkBlue"
                      borderRadius="40px"
                      w="40px"
                      h="40px"
                    >
                      <Icon as={FiMail} boxSize={6} color="secondary" m="8px" />
                    </Box>
                    <Text fontWeight="light" m="14px" color="darkBlue">
                      progden.official@gmail.com
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Text m="16px" textColor="darkBlue">
          Programmers' Den &#169; 2023
        </Text>
      </Box>
    </Box>
  );
};
export default Footer;
