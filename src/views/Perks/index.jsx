import { Box, Heading, Text, Image, Flex, Button, Spacer, Center } from "@chakra-ui/react";

//Images
import Banner from "../../assets/perks_banner.png";
import Events from "../../assets/compe_events.png";
import Merch from "../../assets/merch_perks.png";
import Portfolio from "../../assets/portfolio_perks.png";
import Games from "../../assets/work_play.png";
import Curve from "../../assets/perks_curve.png";

const Perks = () => {
  return (
    <Flex>
      <Flex flexDirection="column" alignItems={"center"} w={"100%"}>
        {/**Header */}
        <Box display="flex" flexDir={{base: 'column-reverse', sm: 'row'}} bg={"#9848FF"} w={"full"} alignItems={"center"}>

            <Box m="24px" w={{base: '100%', sm: '75%'}} ml={{base: '0', lg: '8vw' }}>
              <Heading textAlign="center">
                SIGN UP FOR EXCLUSIVE MEMBERSHIP PERKS
              </Heading>
            </Box>

              <Box display="flex" justifyContent="flex-end" h="100%">
                <Image w={{base: '100%', lg: '450px'}} src={Banner} />
              </Box>

        </Box>

        <Flex w={"76vw"}  justifyContent={"center"} alignItems={"center"}>
          <Flex borderRadius="35px" layerStyle={"bubblegum"} maxW="950px" mt="20" p={{base: '5', md: '0'}}>
            {/**Join Competition */}
            <Flex flexDir={{base: 'column', md: 'row'}} justifyContent={"center"} alignItems={"center"}>
              <Flex w={{base:'100%', md: '50%'}} flexDir="column" alignItems={"center"}>
                <Heading textAlign={"center"} color="darkBlue" m="5">
                  JOIN COMPETITION AND EVENTS
                </Heading>
                <Text m="7">
                  Get offered more opportunities to participate in competitions and experience your college-life attending both National and
                  International events. As a member of the elite programmers, the College puts its faith in your skills.
                </Text>
              </Flex>
              <Box margin={"15px"}>
                <Image src={Events} />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex w={"76vw"}  justifyContent={"center"} alignItems={"center"}  maxW="950px">
          <Flex flexDir={"column"} >
            <Flex mt="6" flexDir={{ base: "column", md: "row" }} justifyContent={"center"}>
              {/**Merch */}
              <Flex
                layerStyle={"seafoam"}
                borderRadius="35px"
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"15px"}
                mr={{base: '0', md: '3'}}
              >
                <Box>
                  <Heading textAlign={"center"} color="darkBlue" m="5">
                    ENJOY EXCLUSIVE MERCHANDISE
                  </Heading>
                </Box>
                <Box>
                  <Image src={Merch} />
                </Box>
              </Flex>
              {/**Portfolio */}
              <Flex
                layerStyle={"afton"}
                borderRadius="35px"
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"15px"}
                ml={{base: '0', md: '3'}}
                mt={{base: '6', md: '0'}}
              >
                <Box>
                  <Image src={Portfolio} />
                </Box>
                <Box>
                  <Heading textAlign={"center"} color="darkBlue" m="4">
                    BUILD YOUR WORK PORTFOLIO
                  </Heading>
                  <Flex justifyContent={"center"}>
                    <Text textAlign={"center"} mx="6">
                      Be job ready. Work on projects to put on your portfolio as early as college
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex w={"full"} flexDir={"column"}>
          <Image src={Curve} />
          <Flex bg={"#11C6B0"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Heading color="darkBlue" mb="5">WORK HARD. PLAY HARD.</Heading>
            <Flex w={"100%"}>
              <Image src={Games} w={"100%"} />
            </Flex>
            <Flex justifyContent="center" m="4">
            <Box w={{base: '80%', lg: '50%'}}>
              <Text color="darkBlue" textAlign={"center"}>
                Celebrate gaming as a platform. Engage in exciting organization Team Building activities that sprout teamwork and healthy competition.
              </Text>
            </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex w={"full"} padding={"30px"} justifyContent={"center"}>
          <Flex flexDir={"column"} alignItems={"center"}>
            <Heading>BECOME A MEMBER TODAY</Heading>
            <Spacer />
            <Flex flexDir={"row"} padding={"15px"}>
              <Flex>
                <Button variant={"outline"} color={"#5AE399"} colorScheme={"#5AE399"} borderRadius={"30px"} margin={"15px"}>
                  About Us
                </Button>
              </Flex>
              <Flex>
                <Button layerStyle={"seafoam"} borderRadius={"30px"} margin={"15px"} vw={"266px"}>
                  Sign Up &gt;{" "}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Perks;
