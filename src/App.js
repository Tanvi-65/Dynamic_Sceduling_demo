import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './components/RoleSelection';
import AdminLogin from './components/admin/Login';
import AdminRegister from './components/admin/Register';
// import FacultyLogin from './components/faculty/Login';
// import FacultyRegister from './components/faculty/Register';
// import StudentLogin from './components/student/Login';
// import StudentRegister from './components/student/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        {/* <Route path="/faculty/login" element={<FacultyLogin />} />
        <Route path="/faculty/register" element={<FacultyRegister />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
