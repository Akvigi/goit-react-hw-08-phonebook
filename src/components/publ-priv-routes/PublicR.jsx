import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicR = ({ children }) => {
  const isLogin = useSelector(store => store.auth.isLogin);

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }
  return children;
};