import logo from './logo.svg';
import './App.css';
import Home from './features/home/Home';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Login from './features/login/Login';
import { selectCurrentUser } from "./features/login/loginSlice";
import ProtectedComp from './features/protectedComp/ProtectedComp';

const BASE_URL = '/code-memoirs-alt';

// App
function App() {
  return (
    <Routes>
      <Route path={`${BASE_URL}/login`} element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={`${BASE_URL}/protected`} element={<ProtectedComp />} />
      </Route>
      <Route path={`${BASE_URL}/`} element={<Home />} />
    </Routes>
  );
}

// Protected Route
const ProtectedRoutes = (props) => {
  const user = selectCurrentUser();
  if (!user) {
    return <Navigate to={`${BASE_URL}/login`} replace />;
  }
  return <Outlet {...props} />
};

export default App;
