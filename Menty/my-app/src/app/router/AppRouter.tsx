import { useContext } from "react";
import { BrowserRouter as Routes, Route, Navigate} from 'react-router-dom';
import { AuthRouter } from "../views/auth/AuthRouter";
import { DashboardRouter } from "../views/dashboard/DashboardRouter";
import { AuthContext } from "../views/store/contexts/AuthContext";
import { PrivateRouter } from "./PrivateRouter";

interface Context {
  dispatchUser?:any,
  user?:User
}
interface User{
  loggedIn:boolean
}
export function AppRouter(){
  const { user }:Context = useContext(AuthContext);
  return ( 
    <Routes>
      <Route path='/auth' element={<AuthRouter/>}/>
      <PrivateRouter
        loggedIn={user?.loggedIn}
        component={DashboardRouter}
      />
      <Route
        path="*"
        element={<Navigate to="/dashboard/home" replace />}
      />
    </Routes>
  );
}