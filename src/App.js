import { Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './Components/Home';
import UserLogin from './Components/UserLogin'
import AdminLogin from './Components/AdminLogin'
import SignupUser from './Components/SignupUser'
import UserDashBoard from './Components/UserDashBoard'
// import ProtectedRoute from './Components/ProtectRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/user' element={<UserLogin />} />
        <Route exact path='/admin' element={<AdminLogin />} />
        <Route exact path='/signup' element={<SignupUser />} />
        <Route exact path='/userDashboard' element={<UserDashBoard />} />
      </Routes>
    </>
  );
}
export default App;
