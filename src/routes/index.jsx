import { Routes, Route } from 'react-router-dom';

import Main from '../views';
import Home from '../views/Home';
import About from '../views/About';
import Events from '../views/Events';
import Projects from '../views/Projects';

const AppRoutes = () => {
    return (
      <Routes>
        {/**  
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />*/}

        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="projects" element={<Projects />} />
        </Route>
          

      </Routes>
    );
  };
  
  export default AppRoutes;