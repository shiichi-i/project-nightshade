import { Box } from '@chakra-ui/react';

// Components
import NavBar from './NavBar';
//import Footer from './Footer';

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
        label: 'Events',
        path: '/events',
    },
    {
        label: 'Projects',
        path: '/projects',
    },
    
  ];
  

const DefaultLayout = ({ children }) => {
    return (
        <Box w="100vw" h="100vh">
          <NavBar navigationLinks={navigationLinks} />
          <Box w="inherit" h="inherit" zIndex="-1" pos="fixed" bgGradient="linear(to-tl, #bc1eac25 5%, #16142b20 50%)" />
          <Box w="inherit" h="inherit" zIndex="-2" pos="fixed" right="50px" bgGradient="radial(#22333790 15%, #16142b 80%)" />
          
          <Box m="20px">
            { children }
          </Box>

        </Box>
    );
};

export default DefaultLayout;