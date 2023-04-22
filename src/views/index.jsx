import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

// Components
{/** import DefaultLayout from 'components/layouts'; */}

const Main = () => {
 return(
    <Box>
        {/** <DefaultLayout> */}
            <Outlet />
        {/** </DefaultLayout> */}
    </Box>
 );
};
export default Main;