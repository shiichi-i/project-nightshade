import { Box } from '@chakra-ui/react';

// Components
import NavBar from './NavBar';
import Footer from './Footer';

const navigationLinks = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Perks',
        path: '/perks',
    },
    
  ];
  

const DefaultLayout = ({ children }) => {
    return (
        <Box w="100vw" h="100vh">

          <Box w="inherit" h="inherit" zIndex="-1" pos="fixed" bgGradient="linear(to-tl, #bc1eac25 5%, #16142b20 50%)" />
          <Box w="inherit" h="inherit" zIndex="-2" pos="fixed" bgGradient="radial(#223337 15%, #16142b 80%)" />

          <NavBar navigationLinks={navigationLinks}/>

          
          
            <Box>
              { children }
            </Box>

          

        <Footer navigationLinks={navigationLinks}/>
        </Box>
    );
};

export default DefaultLayout;