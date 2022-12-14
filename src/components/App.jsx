import React, { lazy, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { currentUser } from 'redux/auth/auth_operations';
import { AppBar, NotFound } from 'components/index';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRout';
import { selectIsRefreshing } from 'redux/selectors';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isRefreshing = useSelector(selectIsRefreshing);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    location.pathname === '/register' && handleShow();
    location.pathname === '/login' && handleShow();
  }, [location]);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route element={<AppBar />}>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register show={show} handleClose={handleClose} />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <Login show={show} handleClose={handleClose} />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    )
  );
};

export default App;
