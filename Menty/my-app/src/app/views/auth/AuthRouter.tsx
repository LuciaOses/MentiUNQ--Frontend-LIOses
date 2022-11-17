import { BrowserRouter as Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./login/Login";

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/dashboard/home" replace />}
      ></Route>
    </Routes>
  );
}
