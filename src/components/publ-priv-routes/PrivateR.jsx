import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateR = ({ children }) => {
  const isLogin = useSelector(store => store.auth.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  //   return <Outlet />;
  return children;
};