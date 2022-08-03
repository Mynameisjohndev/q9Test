import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAppContext } from "../Context/ContextApp";
import { List } from "../pages/List";
import { NotFound } from "../pages/NotFound";
import { Signup } from "../pages/Signup";

export const AppRoutes = () => {
  const { user, breed } = useAppContext();

  const isLogged = user.token !== undefined;
  const PrivateRoute = ({ redirectTo }: any) => {
    const isAuthenticated = isLogged;
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  const Public = ({ redirectTo }: any) => {
    const isAuthenticated = isLogged;
    return !isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute redirectTo="/" />}>
          <Route path="/list/:breed" element={<List />} />
        </Route>
        <Route element={<Public redirectTo={`/list/${breed}`} />}>
          <Route path="/" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
