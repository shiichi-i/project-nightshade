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
    <Flex w={"100%"} h={"full"}>
      <Flex flexDirection={"column"} alignItems={"center"} w={"100%"} h={"372px"} padding={"15px 0px"}>
        {/**Header */}
        <Flex bg={"#9848FF"} w={"full"} alignItems={"center"} justifyContent={"flex-end"} gap={"150"}>
          <Flex>
            <Heading noOfLines={"2"} maxW={"600px"} textAlign={"center"}>
              SIGN UP FOR EXCLUSIVE MEMBERSHIP PERKS
            </Heading>
          </Flex>

          <Flex>
            <Image w={"608px"} h={"100%"} src={Banner} />
          </Flex>
        </Flex>

        <Flex w={"76vw"} flexDir={"row"} justifyContent={"center"} alignItems={"center"}>
          <Flex bg={"#9848FF"} borderRadius={"15px"} layerStyle={"bubblegum"} margin={"15px"}>
            {/**Join Competition */}
            <Flex flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
              <Flex flexDir={"column"} alignItems={"center"} margin={"15px"}>
                <Heading textAlign={"center"} color={"black"} noOfLines={"2"} maxW={"400px"} padding={"15px"}>
                  JOIN COMPETITION AND EVENTS
                </Heading>
                <Text noOfLines={"6"} maxW={"300px"} padding={"15px"}>
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

        <Flex flexDir={"column"}>
          <Flex w={"full"} h={"full"} margin={"15px"} flexDir={{ base: "column", md: "row" }} justifyContent={"center"}>
            {/**Merch */}
            <Flex
              layerStyle={"seafoam"}
              borderRadius={"15px"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"15px"}
              padding={"15px"}
            >
              <Box>
                <Heading textAlign={"center"} color={"black"} noOfLines={"2"} maxW={"500px"}>
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
              borderRadius={"15px"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"15px"}
              padding={"15px"}
            >
              <Box>
                <Image src={Portfolio} />
              </Box>
              <Box>
                <Heading textAlign={"center"} color={"black"} noOfLines={"2"} maxW={"500px"}>
                  BUILD YOUR WORK PORTFOLIO
                </Heading>
                <Flex justifyContent={"center"}>
                  <Text noOfLines={"2"} maxW={"300px"} textAlign={"center"}>
                    Be job ready. Work on projects to put on your portfolio as early as college
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex w={"full"} flexDir={"column"}>
          <Image src={Curve} />
          <Flex bg={"#11C6B0"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Heading color={"black"}>WORK HARD. PLAY HARD.</Heading>
            <Flex w={"100%"}>
              <Image src={Games} w={"100%"} />
            </Flex>
            <Text color={"black"} noOfLines={"2"} maxW={"600px"} textAlign={"center"}>
              Celebrate gaming as a platform. Engage in exciting organization Team Building activities that sprout teamwork and healthy competition.
            </Text>
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
