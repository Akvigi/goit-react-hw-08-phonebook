import { Home } from "components/pages/Home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { current } from "redux/requests";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Phonebook } from "./pages/Phonebook";
import { SignUp } from "./pages/SignUp";
import { PrivateR } from "./publ-priv-routes/PrivateR";
import { PublicR } from "./publ-priv-routes/PublicR";
// import { lazy } from 'react';
import { SharedLayout } from "./SharedLayout";
// import { PageContainer } from "./styled-comp/styled";

// const Phonebook = lazy(() => import("./pages/Phonebook"));
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route
            path="signup"
            element={
              <PublicR>
                <SignUp />
              </PublicR>
            }/>
          <Route
            path="login"
            element={
              <PublicR>
                <Login />
              </PublicR>
            }/>
          <Route
            path="phonebook"
            element={
              <PrivateR>
                <Phonebook />
              </PrivateR>
            } />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}


export default App
