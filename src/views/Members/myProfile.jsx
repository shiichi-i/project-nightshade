/**import { Box, Text, Icon, Image, Divider } from "@chakra-ui/react";
import { FiChevronsUp, FiStar } from 'react-icons/fi';
import { keyframes, styled } from "styled-components";
import { useState, useEffect } from "react";
import { db } from '../../firebase-config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useParams } from "react-router-dom";

import pdID from '../../assets/edit_PDID.png';
import SonicBanner from '../../assets/sonic_frontiers.gif';

const rainbow = keyframes`
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 400%;
        }
    `;
    
    const Anim = styled(Text)`
        animation: ${rainbow} 8s linear infinite;
        background: linear-gradient(90deg, #fc03ba, #03fceb, #45fc03, #fc03ba);
        background-size: 400%;
        font-weight: bold;
        font-size: 20px;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-stroke-width: 0.3px;
        -webkit-text-stroke-color: white;
    `;
*/
const Profile = () => {
    
 return(
    <div>
        <p>Page Unavailable</p>
    </div>

    /**const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [bioDesc, setBioDesc] = useState("");
    const [senior, setSenior] = useState(false);
    const [achievements, setAchievements] = useState([]);

    const { id } = useParams();


    useEffect(() => {
                //setBioDesc(ed.data().bioDesc)
                //setAchievements(ed.data().achievements)
                //setSenior(ed.data().isSenior)

                setBioDesc("bio")
                //setAchievements([""])
                setSenior(false)
            onSnapshot(doc(db, "accounts", id), (doc) => {
                if(doc.object){
                    setFName(doc.data().fName)
                    setLName(doc.data().lName)
                }
            });
    }, [])

    return(
        <Box m={{base:'0', md:'30px'}} w={{base:'full', md:'95vw'}} display="flex" justifyContent="center">
            <Box>
            <Box display="flex" flexDir={{base: 'column', md: 'row'}}>
                <Box w={{base: 'full', md: '250px'}} display="flex" justifyContent="center" alignItems="center" flexDir="column">
                    <Image src={pdID} h="200px" w="200px" borderRadius="20px" m="20px" />
                </Box>

                <Box display="flex" flexDir="column" justifyContent={{base: 'center', md:'left'}} alignItems={{base:'center', md:'unset'}} mt={{base: '0', md: '20px'}}>

                    {senior ? 
                    <Box display="flex" flexDir="row" my="3px">
                        <Anim>
                           SENIOR DEVELOPER
                        </Anim>
                    </Box> : '' }
                    

                    <Text as="b" fontSize="28px" my="10px" >{fName} {lName}</Text>

                    {/** is Officer 
                    <Box display="flex" flexDir="row" mb={{base: '30px', md: '0'}}>
                        <Icon as={FiChevronsUp} color="white" boxSize={4} />
                        <Text ml="3">Officer</Text>
                    </Box>

                </Box>
            </Box>

            <Box display="flex" flexDir={{base: 'column-reverse', md: 'row'}} alignItems={{base: 'center', md: 'unset'}}>

                <Box w="300px" h="full" my="30px">
                    <Text fontSize="18px" as="b">Achievements</Text>
                    <Divider border="1.5px solid" color="teal.200" w="90%"/>

                    {/** Achievements Map
                    <Box display="flex" flexDir="column" m="20px">
                        {achievements.map((achievement) => (
                        <Box display="flex" flexDir="row" m="10px" key={achievement.id}>
                            <Icon as={FiStar} color="white" boxSize={4} mr="20px" />
                            <Text fontWeight="light">
                                {achievement}
                            </Text>
                        </Box>
                        ))}

                    </Box>*
                </Box>

                {/** BIO *
                <Box mt={{base: '0', md: '-80px'}} border="1px solid white" borderRadius="20px" h={{base:'250px', md:'450px'}} w={{base:'full', md:'700px'}} bg="whiteAlpha.300">
                    <Box m={{base: '10px', md: '20px'}}>
                        {/** Image 
                         * 
                         * <Box bg="tomato" w="full" h={{base: '150px', md: '300px'}} />
                        *
                        <Image src={SonicBanner} objectFit="cover" w="full" h={{base: '150px', md: '300px'}} />
                    </Box>

                    <Box m={{base: '10px', md: '20px'}}>
                        <Text>{bioDesc}</Text>
                    </Box>
                </Box>

            </Box>
            </Box>
                        </Box>*/
    );
};
export default Profile;