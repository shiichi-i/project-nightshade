import { Routes, Route } from 'react-router-dom';

import Main from '../views';
import Login from '../views/Login';

import Home from '../views/Home';
import About from '../views/About';
import Events from '../views/Events';
import Members from '../views/Members';
import MemberList from '../views/Members/memberList';
import MyProfile from '../views/Members/myProfile';

import Admin from '../views/Admin';

import Accounts from '../views/Admin/Accounts';
import Create from '../views/Admin/Accounts/create';
import ListAccounts from '../views/Admin/Accounts/listAccounts';

import AdminEvents from '../views/Admin/AdminEvents';
import ListEvent from '../views/Admin/AdminEvents/listEvents';

import Officers from '../views/Admin/Officers';

const AppRoutes = () => {

    return (
      <Routes>
        
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />

          <Route path="members" element={<Members />}>
            <Route path="" element={<MemberList />} />
            <Route path=":id" element={<MyProfile />} />
          </Route>

          <Route path="admin" element={<Admin />}>
            <Route path="accounts" element={<Accounts />}>
              <Route path="" element={<ListAccounts />}/>
              <Route path="create" element={<Create />} />
            </Route>
            <Route path ="events" element={<AdminEvents />}>
              <Route path="" element={<ListEvent />} />
            </Route>
            <Route path="officers" element={<Officers />}/>
          </Route>

        </Route>
          

      </Routes>
    );
  };
  
  export default AppRoutes;