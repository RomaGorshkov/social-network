import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchMe, isAuthCheck } from './redux/slices/auth';

import { Login } from './components/Login/Login';
import { MainLayout } from './components/Layouts/MainLayout';

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
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>123</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
