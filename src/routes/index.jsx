import { Routes, Route } from 'react-router-dom';

import Main from '../views';
import Login from '../views/Login';

//
import Home from '../views/Home';
import About from '../views/About';
import Perks from '../views/Perks';
import Join from '../views/Join';
//
import Submitted from '../views/Join/Submitted';


import Events from '../views/Events';
import Members from '../views/Members';
import MemberList from '../views/Members/memberList';
import MyProfile from '../views/Members/myProfile';

import Admin from '../views/Admin';
import PrivateRoute from '../views/Admin/PrivateRoute';

/**import Accounts from '../views/Admin/Accounts';
import Create from '../views/Admin/Accounts/create';
import ListAccounts from '../views/Admin/Accounts/listAccounts';

import AdminEvents from '../views/Admin/AdminEvents';
import ListEvent from '../views/Admin/AdminEvents/listEvents';

import Officers from '../views/Admin/Officers';*/



//Images for featured
import Stanley from '../assets/vp-multimedia.jpg';
import Project from '../assets/proj.png';

const featured =[
  {
      memberImg:`${Stanley}`,
      member: 'Stanley Gonzales',
      memberDesc: 'Hey everyone! Im Stanley, the Vice President of Multimedia for this school year. Im looking for creative people to join the Multimedia team. Its been hard that most of the members are on the Main Division, I want people who have an eye for design to spark the rebirth of the multimedia team. Im looking forward to working with you!',
      projectImg: `${Project}`,
      projectDesc: 'A software for learning robotics using virtual environments. Developed by alumni members of Programmers Den as their capstone project. With the help of current President Sigmund. Bringing robotics to life in the digital world',
      projectLink: 'https://pebbles-robotics.web.app/',
  }
]

const AppRoutes = () => {

    return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Main />}>
          <Route path="" element={<Home featured={featured} />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />

          <Route path="/submit" element={<Submitted />} />
         

          <Route path="events" element={<Events />} />
          <Route path="perks" element={<Perks />} />


          <Route path="members" element={<Members />}>
            <Route path="" element={<MemberList />} />
            <Route path=":id" element={<MyProfile />} />
          </Route>

          
          <Route path="admin" element={
            <PrivateRoute>
              <Admin featured={featured} />
            </PrivateRoute>
          } />

            {/**<Route path="accounts" element={<Accounts />}>
              <Route path="" element={<ListAccounts />}/>
              <Route path="create" element={<Create />} />
            </Route>
            <Route path ="events" element={<AdminEvents />}>
              <Route path="" element={<ListEvent />} />
            </Route>
            <Route path="officers" element={<Officers />}/>
    </Route>*/}

        </Route>
          

      </Routes>
    );
  };
  
  export default AppRoutes;