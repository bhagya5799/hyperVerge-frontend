import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import SignupUser from './Components/SignupUser';
import UserDashBoard from './Components/UserDashBoard';
import ProtectedRoute from './Components/ProtectedRoute';


const App = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserLogin />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/userDashboard" element={<UserDashBoard />} />
      <Route path="/signup" element={<SignupUser />} />
      <Route path="/" element={<ProtectedRoute element={Home} />} />
      {/* <Route path="/" element={<Home/>} /> */}
      {/* <Route path="/userDashboard" element={<ProtectedRoute element={UserDashBoard} />} /> */}
    </Routes>
  );
};

export default App;