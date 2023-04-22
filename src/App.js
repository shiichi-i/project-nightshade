import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes';
import '@fontsource/josefin-sans';

import theme from './styles/theme';

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </ChakraProvider>
  );
}

export default App;
