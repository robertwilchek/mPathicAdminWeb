import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactDOM } from 'react-dom/client';
import Landing_Page from './pages/landing';
import Login from './pages/login';
import Home_Page from './pages/studentHome';
import MainLayout from './layout/mainLayout';
import Register from './pages/register';
import EducatorHome from './pages/educatorHome';
import EducatorAdmin from './pages/educatorAdmin';
import SuperUserHome from './pages/superuserHome';
import CommonLayout from './layout/commonLayout';
import VerifyUser from './pages/verifyUser';
import React, { useContext } from 'react';
import {RoleContext, RoleProvider} from './utils/roleContext';

const App = () => {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Landing_Page /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="/home" element={<CommonLayout><RoleBasedComponent /></CommonLayout>} />
          <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
          <Route path="/verify" element={<MainLayout><VerifyUser /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}

const RoleBasedComponent = () => {
  const { role } = useContext(RoleContext);

  switch (role) {
    case 'Student':
      return <Home_Page />;
    case 'Administrator':
      return <EducatorHome />;
    case 'Educator':
      return <EducatorAdmin />;
    case 'educatorAdmin':
      return <SuperUserHome />;
    default:
      return null;
  }
};


export default App;