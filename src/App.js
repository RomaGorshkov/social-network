import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchMe, isAuthCheck } from './redux/slices/auth';
import { MainLayout } from './components/Layouts/MainLayout';

import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthCheck);

  React.useEffect(() => {
    dispatch(fetchMe())
  }, [dispatch]);

  if(!isAuth) {
    return <Login />
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
