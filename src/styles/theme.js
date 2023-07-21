import { extendTheme } from '@chakra-ui/react';

// Base
import fonts from './base/fonts';
import colors from './base/colors';
import layerStyles from './base/layerStyles';

//Components
import Text from './components/Text';
import Heading from './components/Heading';


const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  };

const styles = {
    global: () => ({
      body: {
        bg: '#16142b',
      },
    }),
  };
  
  const theme = extendTheme({
    styles,
    config,
    fonts,
    colors,
    layerStyles,
    components: {
        Text,
        Heading,
      },
  });
  
  export default theme;