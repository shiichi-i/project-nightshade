import { Routes, Route } from 'react-router-dom';

import Main from '../views';
import Home from '../views/Home';
import Services from '../views/Services';

const AppRoutes = () => {
    return (
      <Routes>
        {/**  
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />*/}

        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
        </Route>
          

      </Routes>
    );
  };
  
  export default AppRoutes;